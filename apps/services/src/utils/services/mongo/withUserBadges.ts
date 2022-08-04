import { ObjectId } from 'mongodb';

import { withAuth } from 'utils/services/auth/withAuth';
import mongoClient from '@packages/services/mongo/mongodbAdapter';

import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next/types';
import type { User } from 'next-auth';

import type { Badge, Game } from 'types/user';
import type { WithAuthResult } from 'utils/services/auth/withAuth';

export type WithUserBadgesResult = {
  game: Game | null;
} & WithAuthResult;

export const withUserBadges =
  (
    getServerSidePropsFC: GetServerSideProps,
  ): GetServerSideProps<
    WithUserBadgesResult & InferGetServerSidePropsType<typeof getServerSidePropsFC>
  > =>
  async (context: GetServerSidePropsContext) => {
    // @ts-ignore
    const { props: withAuthProps } = await withAuth()(context);
    let game = null;

    if (withAuthProps?.session?.user?.email) {
      const db = (await mongoClient).db();
      const user = await db.collection('users').findOne<User>({
        email: withAuthProps.session.user.email,
      });

      if (user) {
        const userId = new ObjectId(user._id);

        const data = await db
          .collection('users-extended')
          .aggregate<Game>([
            {
              $match: {
                userId,
              },
            },
            {
              $lookup: {
                from: 'users-trophies',
                localField: 'userId',
                foreignField: 'userId',
                as: 'users-trophies',
              },
            },
            {
              $lookup: {
                from: 'trophies',
                localField: 'users-trophies.trophyId',
                foreignField: '_id',
                as: 'badges',
              },
            },
            {
              $project: {
                experience: 1,
                level: 1,
                badges: {
                  $map: {
                    input: '$badges',
                    as: 'badge',
                    in: {
                      $mergeObjects: [
                        {
                          $arrayElemAt: [
                            {
                              $filter: {
                                input: '$users-trophies',
                                as: 'userstrophy',
                                cond: {
                                  $eq: ['$$badge._id', '$$userstrophy.trophyId'],
                                },
                              },
                            },
                            0,
                          ],
                        },
                        '$$badge',
                      ],
                    },
                  },
                },
              },
            },
            {
              $project: {
                badges: {
                  userId: 0,
                  trophyId: 0,
                },
              },
            },
          ])
          .toArray();

        if (data.length > 0) {
          const cleanGameData = data[0] as Game;
          let greyBadges = await db
            .collection('users-trophies')
            .aggregate([
              {
                $match: {
                  userId,
                },
              },
              {
                $group: {
                  _id: null,
                  userBadges: {
                    $push: {
                      _id: '$trophyId',
                    },
                  },
                },
              },
              {
                $unionWith: {
                  coll: 'trophies',
                  pipeline: [
                    {
                      $group: {
                        _id: null,
                        badges: {
                          $push: {
                            _id: '$_id',
                            name: '$name',
                            image: '$image',
                            description: '$description',
                          },
                        },
                      },
                    },
                  ],
                },
              },
            ])
            .toArray();

          greyBadges = greyBadges[1].badges
            .filter(
              (badge: { _id: ObjectId }) =>
                !greyBadges[0].userBadges.find(
                  (userBadge: { _id: ObjectId }) =>
                    userBadge._id.toString() === badge._id.toString(),
                ),
            )
            .map((badge: Badge) => ({
              ...badge,
              _id: new ObjectId(badge._id).toString(),
            }));

          game = {
            experience: cleanGameData.experience,
            level: cleanGameData.level,
            badges: cleanGameData.badges.map((badge) => ({
              ...badge,
              _id: new ObjectId(badge._id).toString(),
            })),
            greyBadges,
          };

          // Add static badges
          game.greyBadges.push({
            image: 'badge-coming-soon.png',
            name: 'Coming soon...',
            description: 'Other badges are coming soon. Stay tuned!',
          });
        }
      }
    }

    const getServerSidePropsFCprops: InferGetServerSidePropsType<typeof getServerSidePropsFC> =
      await getServerSidePropsFC(context);

    return {
      props: {
        game,
        ...withAuthProps,
        ...getServerSidePropsFCprops.props,
      },
    };
  };

export default withUserBadges;

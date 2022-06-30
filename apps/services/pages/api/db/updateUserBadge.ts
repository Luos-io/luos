import { ObjectId } from 'mongodb';
import { getToken } from 'next-auth/jwt';

import mongoClient from '@packages/services/mongo/mongodbAdapter';

import type { NextApiRequest, NextApiResponse } from 'next';

import type { Badge } from 'types/user';

const { NEXTAUTH_SECRET: secret, DEBUG } = process.env;

export const updateUserBadge = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const token = await getToken({ req, secret });
      if (token) {
        const db = (await mongoClient).db();
        const userBadge = await db.collection('users-trophies').findOne<Badge>({
          trophyId: new ObjectId(req.body.badgeId),
          userId: new ObjectId(token.sub),
        });

        if (userBadge) {
          const { acknowledged, matchedCount, modifiedCount } = await db
            .collection('users-trophies')
            .updateOne(
              {
                _id: userBadge._id,
              },
              [
                {
                  $set: { notified: true },
                },
              ],
            );

          if (DEBUG) {
            if (acknowledged && matchedCount === 1 && modifiedCount === 1) {
              console.log(`[DEBUG] Badge '${req.body.badgeId}' successfully updated`);
            } else {
              console.log(`[DEBUG] Failed to update badge '${req.body.badgeId}'`);
            }
          }
        }
        res.status(200).send({ result: JSON.stringify(userBadge) });
      } else {
        res.status(401);
      }
    } else {
      res.setHeader('Allow', ['UPDATE']);
      res.status(405);
    }
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' });
  } finally {
    res.end();
  }
};
export default updateUserBadge;

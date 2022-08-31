import { ObjectId } from 'mongodb';

import { withAuth } from 'utils/services/auth';
import mongoClient from '@packages/services/mongo/mongodbAdapter';

import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next/types';
import type { Account, User } from 'next-auth';

import type { UserSessionExtended } from 'types/user';
import type { WithAuthResult } from 'utils/services/auth/withAuth';

export type WithUserAccountsResult = {
  user: UserSessionExtended | null;
} & WithAuthResult;

export const withUserAccounts =
  (
    getServerSidePropsFC: GetServerSideProps,
  ): GetServerSideProps<
    WithUserAccountsResult & InferGetServerSidePropsType<typeof getServerSidePropsFC>
  > =>
  async (context: GetServerSidePropsContext) => {
    // @ts-ignore
    const { props: withAuthProps } = await withAuth()(context);
    let userExtended: UserSessionExtended | null = null;

    if (withAuthProps?.session?.user?.email) {
      const db = (await mongoClient).db();
      const user = await db.collection('users').findOne<User>({
        email: withAuthProps.session.user.email,
      });

      if (user) {
        const userId = new ObjectId(user._id);
        const accounts = await db
          .collection('accounts')
          .find<Account>({
            userId,
          })
          .project<{ provider: string }>({
            provider: 1,
            _id: 0,
          })
          .toArray();

        if (accounts.length > 0) {
          userExtended = {
            name: user.name,
            email: user.email,
            image: user.image,
            isNewUser: user.isNewUser || false,
            accounts: accounts.map(({ provider }) => provider),
          };
        }
      }
    }

    const getServerSidePropsFCprops: InferGetServerSidePropsType<typeof getServerSidePropsFC> =
      await getServerSidePropsFC(context);

    return {
      props: {
        user: userExtended,
        ...withAuthProps,
        ...getServerSidePropsFCprops.props,
      },
    };
  };

export default withUserAccounts;

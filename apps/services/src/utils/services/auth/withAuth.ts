import { getSession } from 'next-auth/react';

import type { GetServerSideProps, GetServerSidePropsContext } from 'next/types';
import type { Session } from 'next-auth';

export type WithAuthResult = {
  session: Session | null;
};
export const withAuth =
  (): GetServerSideProps<WithAuthResult> => async (context: GetServerSidePropsContext) => ({
    props: {
      session: await getSession(context),
    },
  });

export default withAuth;

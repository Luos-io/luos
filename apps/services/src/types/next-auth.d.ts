import type { Account, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface User {
    _id: string;
    isNewUser?: boolean;
  }

  interface Session {
    user: {
      isNewUser?: boolean;
      linkedAccounts?: Account[];
    } & DefaultUser;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    isNewUser?: boolean;
    linkedAccounts?: string[];
  }
}

import { ObjectId } from 'mongodb';
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import EmailProvider from 'next-auth/providers/email';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';

import mongoClient from '@packages/services/mongo/mongodbAdapter';

import type { Badge, UserExtended, UserBadge } from 'types/user';

const {
  DEBUG,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GOOGLE_CLIENT_ID = '',
  GOOGLE_CLIENT_SECRET = '',
  DISCORD_CLIENT_ID = '',
  DISCORD_CLIENT_SECRET = '',
  EMAIL_SERVER_HOST,
  EMAIL_SERVER_PORT,
  EMAIL_SERVER_USER,
  EMAIL_SERVER_PASSWORD,
  EMAIL_FROM,
} = process.env;

export default NextAuth({
  debug: DEBUG ?? false,
  providers: [
    GitHubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    DiscordProvider({
      clientId: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
    }),
    EmailProvider({
      server: {
        host: EMAIL_SERVER_HOST,
        port: EMAIL_SERVER_PORT,
        auth: {
          user: EMAIL_SERVER_USER,
          pass: EMAIL_SERVER_PASSWORD,
        },
      },
      from: EMAIL_FROM,
    }),
  ],
  adapter: MongoDBAdapter(mongoClient),
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: async ({ token, isNewUser, user }) => {
      // Check if the user is new
      if (isNewUser && user) {
        const db = (await mongoClient).db();
        const dataLoginBadge = await db.collection('trophies').findOne<Badge>({
          name: 'login',
        });

        if (dataLoginBadge) {
          const dataUserExtended = await db.collection<UserExtended>('users-extended').insertOne({
            userId: new ObjectId(user.id),
            experience: 0,
            level: 1,
          });

          console.log("[DEBUG] Extended the user's data", dataUserExtended);

          const dataUserBadge = await db.collection<UserBadge>('users-trophies').insertOne({
            userId: new ObjectId(user.id),
            trophyId: new ObjectId(dataLoginBadge._id),
            progress: 0,
            unlocked: true,
            notified: false,
          });

          console.log('[DEBUG] Added first login badge to user', dataUserBadge);
        }
      }

      return token;
    },
  },
  events: {
    linkAccount: async ({ user, account }) => {
      if (
        account.provider === 'discord' ||
        account.provider === 'github' ||
        account.provider === 'google'
      ) {
        const db = (await mongoClient).db();
        const dataLoginBadge = await db.collection('trophies').findOne<Badge>({
          name: account.provider,
        });
        if (dataLoginBadge) {
          const dataUserBadge = await db.collection<UserBadge>('users-trophies').insertOne({
            userId: new ObjectId(user.id),
            trophyId: new ObjectId(dataLoginBadge._id),
            progress: 0,
            unlocked: true,
            notified: false,
          });
          console.log(
            `[DEBUG] Added account linking badge ('${account.provider}') to user`,
            dataUserBadge,
          );
        }
      }
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
});

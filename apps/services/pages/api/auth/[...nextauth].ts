import { ObjectId } from 'mongodb';
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import EmailProvider from 'next-auth/providers/email';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';

import mongoClient from '@packages/services/mongo/mongodbAdapter';

import type { Badge, UserExtended, UserBadge } from 'types/user';

export default NextAuth({
  debug: process.env.DEBUG ?? false,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
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
    signIn: 'app/auth/signin',
  },
});

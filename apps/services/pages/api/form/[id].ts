import { getToken } from 'next-auth/jwt';

import mongoClient from '@packages/services/mongo/mongodbAdapter';

import type { NextApiRequest, NextApiResponse } from 'next/types';

import { ObjectId } from 'mongodb';
import { Badge, UserBadge } from 'types/user';

const { NEXTAUTH_SECRET: secret } = process.env;
const allowedIds: { [key: string]: string } = {
  'get-started-1': 'Get Started #1',
  'get-started-2': 'Get Started #2',
  'get-started-3': 'Get Started #3',
  'get-started-4': 'Get Started #4',
  'your-first-service': 'Your First Service',
  'your-first-message': 'Your First Message',
  'your-first-topology': 'Your First Topology',
};

export const form = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = await getToken({ req, secret });
    if (token) {
      const { query, method } = req;
      if (method === 'GET') {
        if (allowedIds[query.id as string]) {
          const db = (await mongoClient).db();
          const dataBadge = await db.collection('trophies').findOne<Badge>({
            name: allowedIds[query.id as string],
          });
          if (dataBadge) {
            const dataUserBadge = await db.collection<UserBadge>('users-trophies').updateOne(
              {
                userId: new ObjectId(token.sub),
                trophyId: new ObjectId(dataBadge._id),
              },
              [
                {
                  $set: {
                    userId: new ObjectId(token.sub),
                    trophyId: new ObjectId(dataBadge._id),
                    progress: 0,
                    unlocked: true,
                    notified: false,
                  },
                },
              ],
              {
                upsert: true,
              },
            );
            console.log(`[DEBUG] Added '${query.id}' badge to user`, dataUserBadge);
            res.redirect('/');
          } else {
            res.status(500).send({ error: `Badge '${query.id}' not found` });
          }
        } else {
          res.status(400).send({ error: 'unknown id' });
        }
      } else {
        res.setHeader('Allow', ['GET']);
        res.status(405);
      }
    } else {
      res.status(401);
    }
  } catch (err) {
    res.status(500).send({ error: err });
  } finally {
    res.end();
  }
};
export default form;

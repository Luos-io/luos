import { Binary, ObjectId } from 'mongodb';
import { Account } from 'next-auth';

export enum Role {
  USER, // Read
  CONTRIBUTOR, // Read, Write
  ADMIN, // Read, Write, Admin
}

export type Member = {
  _id?: ObjectId;
  userId: ObjectId;
  role: Role;
};

export type Team = {
  _id?: ObjectId;
  name: string;
  image: Binary;
  members: Member[];
};

export type UserSessionExtended = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  isNewUser: boolean;
  accounts: Account['provider'][];
};

export type UserExtended = {
  _id?: ObjectId;
  userId: ObjectId;
  experience: number;
  level: number;
};

export type UserBadge = {
  _id?: ObjectId;
  userId: ObjectId;
  trophyId: ObjectId;
  progress: number;
  unlocked: boolean;
  notified: boolean;
};

export type Badge = {
  _id: ObjectId;
  name: string;
  image: string;
  description: string;
  unlocked: boolean;
  notified: boolean;
  experience: number;
  repeatable: boolean;
  progress: number;
};

export type GreyBadge = {
  name: string;
  description: string;
  image: string;
};

export type Game = {
  _id?: ObjectId;
  level: number;
  experience: number;
  badges: Badge[];
  greyBadges: GreyBadge[];
};

export type DiscordStatisticsData = {
  rank: number;
  level: number;
  xp: number;
  message_count: number;
};

export type DiscordStatisticsError = {
  code: string;
  message: string;
};

export type MEE6GuildData = {
  allow_join: boolean;
  icon: string;
  id: string;
  invite_leaderboard: boolean;
  leaderboard_url: string;
  name: string;
  premium: boolean;
};
export type MEE6PlayersData = {
  avatar: string;
  detailed_xp: string[];
  discriminator: string;
  guild_id: string;
  id: string;
  level: number;
  message_count: number;
  username: string;
  xp: number;
};
export type MEE6Data = {
  admin: boolean;
  banner_url: string;
  guild: MEE6GuildData;
  is_member: boolean;
  page: number;
  player: null;
  players: MEE6PlayersData[];
  role_rewards: object[];
  user_guild_settings: null;
  xp_per_message: number[];
  xp_rate: number;
};

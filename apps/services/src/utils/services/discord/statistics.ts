export {};
// import { GetServerSidePropsContext } from 'next';
// import { getToken } from 'next-auth/jwt';

// import { serverLogger } from 'src/utils/logger';

// import type {
//   DiscordStatisticsData,
//   DiscordStatisticsError,
//   MEE6Data,
//   MEE6PlayersData,
// } from 'src/utils/services/discord/interfaces';

// interface IGetStatistics {
//   (ctx: GetServerSidePropsContext): Promise<DiscordStatisticsData | DiscordStatisticsError>;
// }

// const { SECRET } = process.env;
// const MEE6PlayersPerPage = 100;
// const MEE6MaxPage = 10;
// // So we search over the first 1000 players...

// export const getStatistics: IGetStatistics = async ({ req }) => {
//   const token = await getToken({ req, secret: SECRET });

//   if (token?.discordId) {
//     try {
//       let page = 0;
//       let playerIndex = -1;
//       let playerData = undefined;
//       do {
//         const res = await fetch(
//           `https://mee6.xyz/api/plugins/levels/leaderboard/902486791658041364?limit=${MEE6PlayersPerPage}&page=${page}`,
//         );
//         const mee6JsonData: MEE6Data = await res.json();

//         if (mee6JsonData && mee6JsonData.players) {
//           playerIndex = (mee6JsonData.players as Array<MEE6PlayersData>).findIndex(
//             (user) => user.id === token?.discordId,
//           );
//           if (playerIndex === -1) {
//             page++;
//           } else {
//             playerData = mee6JsonData.players[playerIndex];
//             break;
//           }
//         }
//       } while (playerIndex !== -1 || page <= MEE6MaxPage);

//       if (playerData) {
//         const { level, message_count, xp } = playerData;
//         return {
//           code: '2xx',
//           rank: page * MEE6PlayersPerPage + playerIndex,
//           level,
//           message_count,
//           xp,
//         };
//       }

//       return {
//         code: '2xx',
//         rank: -1,
//         level: -1,
//         message_count: -1,
//         xp: -1,
//       };
//     } catch (err) {
//       const errMsg = (err as Error).message;
//       serverLogger.error("Error while getting Discord user's statistics", errMsg);
//       return {
//         code: '5xx',
//         message: errMsg,
//       };
//     }
//   }

//   return {
//     code: '4xx',
//     message: 'Not connected',
//   };
// };
// export default getStatistics;

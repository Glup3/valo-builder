// import { GuildChannel } from 'discord.js';
// import { CommandoMessage } from 'discord.js-commando';

// export const moveTeams = async (team: Team, channel: GuildChannel, msg: CommandoMessage) => {
//   const players = [team.player1, team.player2, team.player3, team.player4, team.player5];

//   for (const player of players) {
//     const user = await msg.guild.members.fetch(player.player.userId);

//     if (user == null) {
//       await msg.say(`Couldn't find user \`${player.player.userTag}\``);
//       continue;
//     }

//     if (user.voice.channel != null) {
//       await user.voice.setChannel(channel);
//     } else {
//       await msg.say(`Didn't move \`${user.displayName}\` because he/she isn't in a voice channel`);
//     }
//   }
// };

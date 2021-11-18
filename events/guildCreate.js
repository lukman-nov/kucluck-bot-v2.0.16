const client = require ('../index');
const Discord = require ('discord.js');
const config = require ('../botconfig');

module.exports = (client, guild) => {
  require("../util/RegisterSlashCommands")(client, guild.id);
};

client.on('guildCreate', (guild) => {
  let channelToSendTo;

  guild.channels.cache.forEach((channel) =>{
    if (
      channel.type === 'text' &&
      !channelToSendTo &&
      channel.permissionsFor(guild.me).has('SEND_MESSAGES')
    )
    channelToSendTo = channel;
  });

  if (!channelToSendTo);
  channelToSendTo.send(`Thanks for adding **${client.botconfig.BotName}** ❤️ \n
  ❓ Run \`${client.botconfig.DefaultPrefix}help\` to the see all commands I have \n
  🎶 Want to listen to music? Run \`${client.botconfig.DefaultPrefix}play\` \n
  ⚠️ Improve the quality of **${client.botconfig.BotName}** on your server, visit ${client.botconfig.Website} \n
  ⁉️ Looking for the latest update? Join our community server! ${client.botconfig.SupportServer} \n`)
})


const { channel } = require("diagnostics_channel");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  category: "information",
  description: "Information about the bot",
  usage: "[command]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["command", "commands", "cmd"],
  /**
   *
   * @param {import("../structures/KucluckBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    
    let Embeddm = new MessageEmbed()
      .setAuthor(`${client.user.username}`, client.botconfig.BotLogo, client.botconfig.Website)
      .setColor(client.botconfig.EmbedColor)
      .setDescription(`Hi, I'm a versatile Discord bot. Music, moderation and other fun things to keep your members happy. \n \n **Support:** [**kucluck.com/support**](${client.botconfig.SupportServer}) \n **Website:** [**kucluck.com**](${client.botconfig.Website})\n \n
      Use \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}help <command>\` to view command details.`)
      .addField('🇮 **Information**', '`!help`, `!info`, `!premium`, `!changelog`')
      .addField('💎 **Premium**', `**Premium Purchase:** [**kucluck.com/premium**](${client.botconfig.Premium}) \n \`!bassboost\`, \`!bump\`, \`!skipto\`, \`!grab\`, \`!loopqueue\` ,\`!lyrics\` ,\`!skipto\`, \`!volume\``)
      .addField('🎵 **Music**','`!clear`, `!connect`, `!disconnect`, `!loop`, `!move`, `!nowplaying`, `!pause`, `!play`, `!queue`, `!remove`, `!resume`, `!search`, `!seek`, `!shuffle`, `!skip`')
      .addField('🛠️ **Admin**', '`!config`, `!clearchat`')
      .addField('👻 **Fun**', '`!youtube`, `!ava`, `!meme`')
      .addField('⁉️ **Other**', '`!invite`, `!ping`, `!report`')
      .setTimestamp()
      .setFooter(`${client.botconfig.BotName} v${require("../package.json").version}`);

      message.react("👍");
      if (!args[0]) message.author.send(Embeddm) && message.channel.send(`${message.author}, Check your direct messages for a list of commands. :heart:`)
      else {
        let cmd =
        client.commands.get(args[0]) ||
        client.commands.find((x) => x.aliases && x.aliases.includes(args[0]));
        if (!cmd)
        return client.sendTime(message.channel, `❌ | Unable to find that command.`);

      let embedch = new MessageEmbed()
        .setAuthor(`Command: ${cmd.name}`, client.botconfig.BotLogo)
        .setDescription(`${cmd.description} \n
        Prefix: \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}\``)
        .setColor("GREEN")
        //.addField("Name", cmd.name, true)
        .addField("Category", `\`${cmd.category}\``, true)
        .addField("Command", `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${cmd.name}${cmd.usage ? " " + cmd.usage : ""}\``,true)
        .addField("Aliases", `\`${cmd.aliases.join(", ")}\``, true)
        .addField("Permissions", "Member: " + cmd.permissions.member.join(", ") + "\nBot: " + cmd.permissions.channel.join(", "), true)
        .setFooter(`${client.botconfig.BotName} v${require("../package.json").version}`);

      if (!args[1]) message.channel.send(embedch);
      return;
    }
  },
};

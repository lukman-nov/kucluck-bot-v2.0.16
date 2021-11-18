const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  category: "other",
  description: "To invite me to your server",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["inv"],
  /**
   *
   * @param {import("../structures/KucluckBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let embed = new MessageEmbed()
      .setColor("BLUE")
      .setDescription(`Thank you for using ${client.botconfig.BotName}. \nYou can invite me by clicking [**here**](${client.botconfig.Addbot}).`);
    message.channel.send(embed);
  },
};

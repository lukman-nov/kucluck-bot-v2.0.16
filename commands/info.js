const { MessageEmbed } = require("discord.js");
require("moment-duration-format");
const cpuStat = require("cpu-stat");
const moment = require("moment");
const e = require("cors");

module.exports = {
  name: "info",
  category: "information",
  description: "Get information about the bot",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["info", "stats"],
  /**
   *
   * @param {import("../structures/KucluckBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message) => {
    const { version } = require("discord.js");
    cpuStat.usagePercent(async function (err, percent, seconds) {
      if (err) {
        return console.log(err);
      }
      const duration = moment
        .duration(message.client.uptime)
        .format(" D[d], H[h], m[m]");

      const embed = new MessageEmbed();
      embed.setColor(client.botconfig.EmbedColor);
      embed.setAuthor(`${client.user.username}`, client.botconfig.BotLogo, client.botconfig.Website)
      embed.addFields(
        {
          name: "Owner",
          value: `┕\`Lukman_Nov#3011\``,
          inline: true,
        },
        {
          name: "Bot Version",
          value: `┕\`v${require("../package.json").version}\``,
          inline: true,

        },
        {
          name: "Uptime",
          value: `┕\`${duration}\``,
          inline: true,
        },
      );

      embed.addFields(
        {
          name: "Guilds",
          value: `┕\`${client.guilds.cache.size}\``,
          inline: true,
        },
        {
          name: "Users",
          value: `┕\`${client.users.cache.size}\``,
          inline: true,
        },
        {
          name: "API Latency",
          value: `┕\`${message.client.ws.ping}ms\``,
          inline: true,
        }
      );
      embed.addFields(
        {
          name: "Invite",
          value: `┕[kucluck.com/invite](${client.botconfig.Addbot})`,
          inline: true,
        },
        {
          name: "Website",
          value: `┕[kucluck.com](${client.botconfig.Website})`,
          inline: true,
        },
        {
          name: "Support",
          value: `┕[kucluck.com](${client.botconfig.Support})`,
          inline: true,
        },
      );

      return message.channel.send(embed);
    });
  },
};

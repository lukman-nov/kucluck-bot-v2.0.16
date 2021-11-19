const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");
const premiums = ("", "");

module.exports = {
  name: "loopqueue",
  category: "music",
  description: "Loop the whole queue",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["lq", "repeatqueue", "rq"],
  /**
   *
   * @param {import("../structures/KucluckBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let player = await client.Manager.get(message.guild.id);
    if (!player)
      return client.sendTime(
        message.channel,
        "❌ | **Nothing is playing right now...**"
      );
    if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "❌ | **You must be in a voice channel to use this command!**"
      );
    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id !== message.guild.me.voice.channel.id
    )
      return client.sendTime(
        message.channel,
        ":x: | **You must be in the same voice channel as me to use this command!**"
      );
      let premium = premiums.includes(message.guild.id)
      if(!premium) return message.channel.send("You need to upgrade to premium to use this command!")

    if (player.queueRepeat) {
      player.setQueueRepeat(false);
      client.sendTime(message.channel, `:repeat: Queue Loop \`disabled\``);
    } else {
      player.setQueueRepeat(true);
      client.sendTime(message.channel, `:repeat: Queue Loop \`enabled\``);
    }
  },
};

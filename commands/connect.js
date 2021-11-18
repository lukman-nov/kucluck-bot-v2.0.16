const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "connect",
  category: "music",
  description: "Join voice channel.",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["join"],
  /**
   *
   * @param {import("../structures/KucluckBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
   run: async (client, message, args, { GuildDB }) => {
    if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "❌ | **You must be in a voice channel to use this command!**"
      );

      const player = client.Manager.create({
        guild: message.guild.id,
        voiceChannel: message.member.voice.channel.id,
        textChannel: message.channel.id,
        selfDeafen: client.botconfig.ServerDeafen,
        volume: client.botconfig.DefaultVolume,
     });

      if (player.state != "CONNECTED") await player.connect();
      await message.react("✅");
  },
};

const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");
const premiums = ("", "");

module.exports = {
  name: "bump",
  category: "music",
  description: "Moves a track to the front of the queue.",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["b", "up"],
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
    if (!args[0])
      return client.sendTime(message.channel, "❌ | **Invalid arguments.**");

      let premium = premiums.includes(message.guild.id)
      if(!premium) return message.channel.send("You need to upgrade to premium to use this command!")

    // Check if (args[0] - 1) is a valid index
    let trackNum = parseInt(args[0] - 1);
    if (trackNum < 1 || trackNum > player.queue.length - 1) {
      return client.sendTime(message.channel, "❌ | **Invalid track number.**");
    }

    // Remove from and shift array
    const track = player.queue[trackNum];
    player.queue.splice(trackNum, 1);
    player.queue.unshift(track);
    client.sendTime(
      message.channel,
      "✅ | **" + track.title + "** has been moved to the front of the queue."
    );
  },
};

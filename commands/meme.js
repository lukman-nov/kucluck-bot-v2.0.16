const { MessageEmbed } = require("discord.js");
const fetch = require ('node-fetch');

module.exports = {
  name: "meme",
  category: "Fun",
  description: "Send random a memes",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["memes"],
  /**
   *
   * @param {import("../structures/KucluckBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
      fetch ('https://meme-api.herokuapp.com/gimme')
      .then(res => res.json())
      .then(async json => {
          const Embed = new MessageEmbed()
          .setTitle(json.title)
          .setImage(json.url)
          .setFooter(`${json.subreddit} ${json.postlink}`);

          let msg = await message.channel.send('Fetching you a meme...');
          message.react('💯')
          msg.edit(Embed);
      });
  },
};

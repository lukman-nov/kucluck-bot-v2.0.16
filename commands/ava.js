const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  category: "fun",
  description: "Showing your discord member avatars",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["ava"],
  /**
   *
   * @param {import("../structures/KucluckBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
   run: async (client, message, args, { GuildDB }) => {
     
    let embed = new MessageEmbed()
    if(!message.mentions.users.first()){
        embed.setTitle("Your avatar:")
        embed.setImage(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
        embed.setColor("RANDOM")
        return message.channel.send(embed)
    }else{
        const user = message.mentions.users.first()
        embed.setTitle(`${user.tag}'s avatar`)
        embed.setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
        embed.setColor('RANDOM')
        return message.channel.send(embed)
    }
  },
};

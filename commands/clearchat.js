const Discord = require ('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "clearchat",
  category: "Admin",
  description: "Clear all message on text channel.",
  usage: ["Number 1-200"],
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: ["ADMINISTRATOR"],
  },
  aliases: ["endchat", "cleanchannel"],
  /**
   *
   * @param {import("../structures/KucluckBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
   run: async (client, message, args, { GuildDB }) => {
     if (!message.member.hasPermission('MANAGE_CHANNELS'))
     return message.channel.send(`❌ | Sorry, you don't have permission to use this command!`);
     if(!args[0]) return message.channel.send(":warning: | How many messages do you want to delete \`<limit 99>\`, You can only bulk delete messages that are under 14 days old.");
     if(parseInt(args[0]) > 99) return message.channel.send(":warning: | You can't delete more than 99 messages at once dude!!");
     message.channel.bulkDelete(parseInt(args[0]) + 1 )
       message.channel.send(`:thumbsup: | Cleared messages!`).then (message =>message.delete({timeout: 1000}))
      .catch((err) =>{
        console.log(err)
        let embed = new MessageEmbed()
        .setDescription(`:warning: | An error occurred. If you need help please contact our admin at [kucluck.com/support](${client.botconfig.Support})`);
        return message.channel.send(embed);
      })
  },
}
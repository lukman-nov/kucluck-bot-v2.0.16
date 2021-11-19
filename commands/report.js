const { Client, Message, MessageEmbed } = require ('discord.js');

module.exports = {
    name: "report",
    category: "other",
    description: "Report bugs in the bot",
    usage: "",
    permissions: {
      channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
      member: [],
    },
    aliases: [""],
    /**
     *
     * @param {import("../structures/KucluckBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
     run: async (client, message, args, { GuildDB }) => {
         const owner = client.users.cache.get('377636455016824834');

         const query = args.join(" ");
         if(!query) return message.reply('Please specify a query!');

         const reportEmbed = new MessageEmbed()
         .setTitle("New BUG!")
         .addField('Author', message.author.toString(), true)
         .addField('Guild', message.guild.name, true)
         .addField('Report', query)
         .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
         .setTimestamp();

         owner.send(reportEmbed);
         message.react("👍");
     }
}
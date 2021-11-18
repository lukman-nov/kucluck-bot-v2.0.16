const {
    channel
} = require("diagnostics_channel");
const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: "premium",
    category: "information",
    description: "Information about the Premium bot",
    usage: "[command]",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["pro", "premi", "vip"],
    /**
     *
     * @param {import("../structures/KucluckBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, {
        GuildDB
    }) => {

        let Embed = new MessageEmbed()
            .setAuthor(`${client.botconfig.BotName}`, client.botconfig.BotLogo, client.botconfig.Website)
            .setColor(client.botconfig.EmbedColor)
            .setDescription(`We will be very grateful for those of you who participated in helping the development of this ${client.botconfig.BotName}. We will provide **PREMIUM** features that you can use on your Discord channel, you know. \n \n For those of you who want to use this feature, you only need to donate **IDR 25,000**, and you can enjoy this feature for 1 month. \n \n For more information, you can visit our site at: [**pro.kucluck.com**](${client.botconfig.Website})`)
            .addField('**:gem: Fitur Premium:**', '> - Enables bass boosting audio effect. \n > - Moves a track to the front of the queue. \n > - Skip to a song in the queue. \n > - Saves the current song to your Direct Messages. \n > - Loop the whole queue. \n > - Shows the lyrics of the song searched. \n > - Check or change the current volume. \n > - 24/7 Stay in Voice Channel ')
            .setTimestamp()
            .setFooter(`${client.botconfig.BotName} v${require("../package.json").version}`);

        message.react("👍");
        message.author.send(Embed) && message.channel.send(`${message.author} Check your direct messages for a Premium commands. :heart:`)
        
    },
};
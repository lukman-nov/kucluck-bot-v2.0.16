const { channel } = require("diagnostics_channel");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "changelog",
    category: "information",
    description: "Information about bot status updates",
    usage: [],
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["cl", "log", "update"],
    /**
     *
     * @param {import("../structures/KucluckBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, {GuildDB}) => {

        let Embed = new MessageEmbed()
            .setAuthor(`${client.botconfig.BotName} v${require("../package.json").version}`, client.botconfig.BotLogo, client.botconfig.Website)
            .setTitle('**Change Log:**')
            .setColor(client.botconfig.EmbedColor)
            .setDescription(`- Disable premium commands in the bot. \n \nAdd new features: \n- **Report** Report bugs in the bot. \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}report\` \n \nSay \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}help\` For more information a new commands.`)
            .setTimestamp()
            .setFooter(`${client.botconfig.BotName} v${require("../package.json").version}`);
        message.channel.send(Embed)
    },
};
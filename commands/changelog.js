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
            .setDescription(`- Add chat replies if tagged \n- Add the first chat to enter the channel. \n- Added a module to support songs from **Spotify**. \n- Fixing the resume command which was previously not running. \n- Fix lag when the song is playing. \n- Replace the contents of the command \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}ping\` \n- Replace Indonesian to English \n \nand add new features: \n- **Memes** Send random a memes \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}meme\` \n- **Report** Report bugs in the bot. \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}report\` \n- **Invite** To invite me to your server. \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}invite\` \n- **Clear chat** Clear all message on text channel. \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}clearchat\` \n- **Now Playing** See what song is currently playing. \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}nowplaying\` \n- **Remove ** Remove a song from the queue. \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}remove\` \n- **Seek** Seek to a position in the song. \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}seek\` \n- **Youtube** Starts a YouTube Together session. \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}youtube\` \n- **Config** Edit the bot settings. \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}config\` \n- **Changelog** Information about bot status updates. \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}changelog\` \n- **Info** Get information about the bot. \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}info\` \n \nSay \`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}help\` For more information a new commands.`)
            .setTimestamp()
            .setFooter(`${client.botconfig.BotName} v${require("../package.json").version}`);
        message.channel.send(Embed)
    },
};
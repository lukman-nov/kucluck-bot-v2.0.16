module.exports = {
  BotName: "Kucluck",
  BotLogo: "http://kucluck.com/img/Logo.png",
  Admins: ["377636455016824834"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "1!", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/BuACxn4XUw", //Support Server Link
  Token: process.env.Token || "", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/attachments/898516000604061699/904998671781867530/Logo-pro-small.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 8, //Bot Inviting Permissions
  Website: process.env.Website || "https://kucluck.com", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  Premium: "https://kucluck.com/premium",
  Addbot:"https://kucluck.com/addbot",
  Support: "https://kucluck.com/support",
  PremiumGuilds: "",
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "kucluck.com | !help", // kucluck.com || !!help The message shown
    type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80, // The port that lavalink is listening to. This must be a number!
    pass: "kokomilan",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "2427144d336945e889229274f3bdb27b", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "a747cddcb7d84ce892f9c4a732e5889a", //Spotify Client Secret
  },
};

const Discord = require("discord.js")
require("dotenv").config

/*
const TOKEN = "OTcwMTY5MzExNjQ3ODk1NjI0.Ym4ClA.cm3MSg_qKvlWjn3UuNLD59rW--A"
*/

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

/*
client.on("messageCreate", (message) =>{
    if(message.content == "Hi"){
        message.reply("Hello World")
    }
}) */

client.login(process.env.TOKEN)


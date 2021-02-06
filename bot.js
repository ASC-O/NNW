// Import both modules "discord.js" & "dotenv"

// Import "discord.js" libary

const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });

// Import "dotenv" Libary

require('dotenv').config();

// add a listener to the client 

client.on("ready", () => {
    console.log(`[${client.user.tag}] is now online!`);
});

// adding a message listener to the client

client.on("message", async message => {
    if (message.content === 't.ping') {
        var time = Date.now();
        message.reply(`PONG 🏓. [**Latency:** ${time - message.}]`)
    }
});
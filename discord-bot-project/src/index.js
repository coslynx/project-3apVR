const { Client, Intents } = require('discord.js');
require('dotenv').config();

const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

client.once('ready', () => {
  console.log('Bot is ready');
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  
  if (message.content === '!help') {
    message.reply('Use commands like !categorySearch, !keywordSearch, !performerSearch to search for content.');
  } else if (message.content.startsWith('!categorySearch')) {
    // Logic for category search
  } else if (message.content.startsWith('!keywordSearch')) {
    // Logic for keyword search
  } else if (message.content.startsWith('!performerSearch')) {
    // Logic for performer search
  }
});

client.login(process.env.DISCORD_TOKEN);
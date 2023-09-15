const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters')

const bot = new Telegraf('5997290204:AAGPiaZ-ud7-pUgPPzicn1fD8oFqXFdXEpM');

// command handler
bot.start((ctx) => {
  const username = ctx.message.from.username;
  ctx.reply(`Hello, ${username} Bitch!`);
  ctx.replyWithSticker('https://graph.org/file/666a31e06e739ef9f2709.mp4');

});
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('Kaam kr lode'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('Hi', (ctx) => ctx.reply('Hey there'))

// Start the bot
bot.launch();
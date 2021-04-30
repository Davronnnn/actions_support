require("dotenv").config();

const Telegraf = require("telegraf");
const bot = new Telegraf('1749989200:AAHnZdw_AmMHWUUF8OgRY556BtUalvgp50c');

bot.command("start", (ctx) => {
  sendStartMessage(ctx);
  console.log(ctx.from.first_name, ctx.from.username);
});

function sendStartMessage(ctx) {
  startMessage = `Assalomu alaykum, qutlug' ramazon oyi muborak bo'lsin ! \n Здравствуйте, да будет благословен священный месяц Рамадан !\n Hi everybody, may the holy month of Ramadan be blessed !`;
  bot.telegram.sendMessage(ctx.chat.id, startMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "O'zbek tili 🇺🇿",
            callback_data: "uz",
          },
        ],
        [
          {
            text: "Pусский 🇷🇺",
            callback_data: "ru",
          },
        ],
        [
          {
            text: "English 🇬🇧",
            callback_data: "eng",
          },
        ],
        [
          {
            text: "Biz haqimizda batafsil",
            url: "http://actions.uz/",
          },
        ],
        [
          {
            text: "Admin bilan bog'lanish",
            url: "http://t.me/actions_admin",
          },
        ],
      ],
    },
  });
}

// uzbek tili

bot.action("uz", (ctx) => {
  ctx.answerCbQuery();
  let savolMessage = `Savollarga javob oling👇`;
  bot.telegram.sendMessage(ctx.chat.id, savolMessage, {
    reply_markup: {
      keyboard: [
        [
          {
            text: '"Actions" o\'zi nima?',
          },
        ],
        [
          {
            text: '"Actions"da kimlar qatnasha oladi?',
          },
        ],
        [
          {
            text: "Qanday qilib ro'yhatdan o'tsam bo'ladi?",
          },
        ],

        [
          {
            text: "To'lov  qilish",
          },
        ],
        [
          {
            text: "bosh menuga qaytish",
          },
        ],
      ],
    },
  });
});

bot.hears('"Actions" o\'zi nima?', (ctx) => {
  ctx.reply(" Actions online holatdagi chet tillari olimpiadasi.");
});
bot.hears('"Actions"da kimlar qatnasha oladi?', (ctx) => {
  ctx.reply("Kamida 1 (bitta) chet tilini biladigan yoshlar.");
});
bot.hears("Qanday qilib ro'yhatdan o'tsam bo'ladi?", (ctx) => {
  ctx.reply("Actions.uz saytiga tashrif buyuring va ro'yhatdan o'ting");
});
bot.hears("To'lov  qilish", (ctx) => {
  ctx.reply(" Ushbu kartaga: 9860 0601 3510 8854.");
});
bot.hears("bosh menuga qaytish", (ctx) => {
  sendStartMessage(ctx);
});

// ru
bot.action("ru", (ctx) => {
  ctx.answerCbQuery();

  let savolMessage = `Получите ответы на свои вопросы👇`;
  bot.telegram.sendMessage(ctx.chat.id, savolMessage, {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Что такое actions?",
          },
        ],
        [
          {
            text: "Кто может в нём учавствовать?",
          },
        ],
        [
          {
            text: "Как я могу учавствовать?",
          },
        ],
        [
          {
            text: "Оплата осуществляется на эту карту",
          },
        ],
        [
          {
            text: "Назад",
          },
        ],
      ],
    },
  });
});

bot.hears("Что такое actions?", (ctx) => {
  ctx.reply("Олимпиада в режиме онлайн.");
});
bot.hears("Кто может в нём учавствовать?", (ctx) => {
  ctx.reply("Знающие минимум 1(одного) иностранного языка.");
});
bot.hears("Как я могу учавствовать?", (ctx) => {
  ctx.reply(
    "Зайдите в сайт Actions.uz и заполните сведения в нижеследующем порядке."
  );
});
bot.hears("Оплата осуществляется на эту карту", (ctx) => {
  ctx.reply("Karta : 9860 0601 3510 8854");
});
bot.hears("Назад", (ctx) => {
  sendStartMessage(ctx);
});

bot.action("eng", (ctx) => {
  ctx.answerCbQuery();

  let savolMessage = `Get answers to your questions👇`;
  bot.telegram.sendMessage(ctx.chat.id, savolMessage, {
    reply_markup: {
      keyboard: [
        [
          {
            text: 'What is the "Action"?',
          },
        ],
        [
          {
            text: "Who can participate in it ?",
          },
        ],
        [
          {
            text: "How I can participate ?",
          },
        ],
        [
          {
            text: "Payment is made to this card:",
          },
        ],
        [
          {
            text: "Back to home",
          },
        ],
      ],
    },
  });
});
bot.hears('What is the "Action"?', (ctx) => {
  ctx.reply("This is online Olympic Competition.");
});

bot.hears("Who can participate in it ?", (ctx) => {
  ctx.reply("Knowledge of at least 1 (one) foreign language.");
});

bot.hears("How I can participate ?", (ctx) => {
  ctx.reply(
    "Go to the Actions.uz website and fill in the information in the following order."
  );
});

bot.hears("Payment is made to this card:", (ctx) => {
  ctx.reply("Card Number :9860 0601 3510 8854");
});

bot.hears("Back to home", (ctx) => {
  sendStartMessage(ctx);
});

bot.launch();

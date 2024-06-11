/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const config = require("../config");
const { Bixby, fromMe, isPublic, toAudio } = require("../lib/");
const { webp2mp4, textToImg } = require("../lib/functions");

Bixby(
  {
    pattern: "sticker",
    fromMe: isPublic,
    desc: "Converts Photo/video/text to sticker",
    type: "converter",
  },
  async (message, match, m) => {
    if (
      !(
        message.reply_message.video ||
        message.reply_message.image ||
        message.reply_message.text
      )
    )
      return await message.reply("_Reply to photo/video/text_");
    if (message.reply_message.text) {
      let buff = await textToImg(message.reply_message.text);
      return await message.sendMessage(
        message.jid,
        buff,
        { mimetype: "image/webp" },
        "stickerMessage"
      );
    }
    let buff = await m.quoted.download();
    message.sendMessage(
      message.jid,
      buff,
      { packname: config.PACKNAME, author: config.AUTHOR },
      "sticker"
    );
  }
);

Bixby(
  {
    pattern: "take",
    fromMe: isPublic,
    desc: "Converts Photo or video to sticker",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message.sticker)
      return await message.reply("_Reply to a sticker_");
    let isme = await fromMe(message.participant)
    let packname, author;
    if(!isme){
       packname = match.split(":")[0] || "𝞓𝙇𝞘𝞢𝞜-𝞓𝙇𝙁𝞓";
       author = match.split(":")[1] || message.pushName;
    } else {
       packname = match.split(":")[0] || config.PACKNAME;
       author = match.split(":")[1] || config.AUTHOR;
    }
    let buff = await m.quoted.download();
    message.sendMessage(message.jid, buff, { packname, author }, "sticker");
  }
);

Bixby(
  {
    pattern: "photo",
    fromMe: isPublic,
    desc: "Changes sticker to Photo",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message.sticker)
      return await message.reply("_Not a sticker_");
    let buff = await m.quoted.download();
    return await message.sendMessage(message.jid, buff, {}, "image");
  }
);

Bixby(
  {
    pattern: "mp3",
    fromMe: isPublic,
    desc: "converts video/voice to mp3",
    type: "downloader",
  },
  async (message, match, m) => {
    let buff = await m.quoted.download();
    console.log(typeof buff);
    buff = await toAudio(buff, "mp3");
    console.log(typeof buff);
    return await message.sendMessage(
      message.jid,
      buff,
      { mimetype: "audio/mpeg" },
      "audio"
    );
  }
);

Bixby(
  {
    pattern: "mp4",
    fromMe: isPublic,
    desc: "converts video/voice to mp4",
    type: "downloader",
  },
  async (message, match, m) => {
    if (
      !message.reply_message.video ||
      !message.reply_message.sticker ||
      !message.reply_message.audio
    )
      return await message.reply("_Reply to a sticker/audio/video_");
    let buff = await m.quoted.download();
    if (message.reply_message.sticker) {
      buff = await webp2mp4(buff);
    } else {
      buff = await toAudio(buff, "mp4");
    }
    return await message.sendMessage(
      message.jid,
      buff,
      { mimetype: "video/mp4" },
      "video"
    );
  }
);

Bixby(
  {
    pattern: "img",
    fromMe: isPublic,
    desc: "Converts Sticker to image",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message.sticker)
      return await message.reply("_Reply to a sticker_");
    let buff = await m.quoted.download();
    return await message.sendMessage(message.jid, buff, {}, "image");
  }
);
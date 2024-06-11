/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic, serialize } = require("../lib/");
const { loadMessage } = require("../lib/db/StoreDb");

Bixby(
  {
    pattern: "quoted",
    fromMe: isPublic,
    desc: "quoted message",
  },
  async (message, match) => {
    if (!message.reply_message)
      return await message.reply("*Reply to a message*");
    let key = message.reply_message.key;
    let msg = await loadMessage(key.id);
    if (!msg)
      return await message.reply(
        "_Message not found maybe bot might not be running at that time_"
      );
    msg = await serialize(
      JSON.parse(JSON.stringify(msg.message)),
      message.client
    );
    if (!msg.quoted) return await message.reply("No quoted message found");
    await message.forward(message.jid, msg.quoted.message);
  }
);
const {command, isPrivate } = require("../lib");


Bixby(
  {
    on: "text",
    fromMe: true,
    desc: "Save or Give Status Updates",
    dontAddCommandList: true,
    type: "tool",
  },
  async (message, match, m) => {
    try {
      if (message.isGroup) return;
      const triggerKeywords = ["save", "send", "sent", "snt", "give", "snd"];
      const cmdz = match.toLowerCase().split(" ")[0];
      if (triggerKeywords.some((tr) => cmdz.includes(tr))) {
        const relayOptions = { messageId: m.quoted.key.id };
        return await message.client.relayMessage(
          message.jid,
          m.quoted.message,
          relayOptions
        );
      }
    } catch (error) {
      console.error("[Error]:", error);
    }
  }
);

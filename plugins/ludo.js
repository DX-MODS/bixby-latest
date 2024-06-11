/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/  

const { Bixby, isPublic } = require("../lib");
  let db = {};

  Bixby(
    {
      pattern: "lud",
      fromMe: isPublic,
      desc: "play ludo",
      type: "user",
    },
    async (message, match) => {
      db.player1 = {
        play: true,
        position: 0,
      };
      db.player2 = {
        play: false,
        position: 0,
      };
      db.player3 = {
        play: false,
        position: 0,
      };
      db.player4 = {
        play: false,
        position: 0,
      };

      var points = Math.floor(Math.random() * 5) + 1;
      const player = /⚫/;
      ludoBoard = [
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲\n",
        "🔲",
        "🟦",
        "🟦",
        "🟦",
        "🟦",
        "⬜",
        "⬇",
        "⬜",
        "🟧",
        "🟧",
        "🟧",
        "🟧",
        "🔲\n",
        "🔲",
        "🟦",
        "⛔",
        "⛔",
        "🟦",
        "⬜",
        "🟪",
        "⬜",
        "🟪",
        "⛔",
        "⛔",
        "🟧",
        "🔲\n",
        "🔲",
        "🟦",
        "⚫",
        "⛔",
        "🟦",
        "⭐",
        "🟪",
        "⬜",
        "🟧",
        "⛔",
        "⛔",
        "🟧",
        "🔲\n",
        "🔲",
        "🟦",
        "⬛",
        "🟦",
        "🟦",
        "⬜",
        "🟪",
        "⬜",
        "🟧",
        "🟧",
        "🟧",
        "🟧",
        "🔲\n",
        "🔲",
        "⬜",
        "⬜",
        "⬜",
        "⬜",
        "⬜",
        "🟪",
        "⬜",
        "⬜",
        "⭐",
        "⬜",
        "⬜",
        "🔲\n",
        "🔲",
        "➡",
        "⬛",
        "⬛",
        "⬛",
        "⬛",
        "🎆",
        "🟨",
        "🟨",
        "🟨",
        "🟨",
        "⬅",
        "🔲\n",
        "🔲",
        "⬜",
        "⬜",
        "⭐",
        "⬜",
        "⬜",
        "🟫",
        "⬜",
        "⬜",
        "⬜",
        "⬜",
        "⬜",
        "🔲\n",
        "🔲",
        "🟨",
        "🟨",
        "🟨",
        "🟨",
        "⬜",
        "🟫",
        "⬜",
        "🟩",
        "🟩",
        "🟨",
        "🟩",
        "🔲\n",
        "🔲",
        "🟨",
        "⛔",
        "⛔",
        "🟨",
        "⬜",
        "🟫",
        "⭐",
        "🟩",
        "🟡",
        "🟡",
        "🟩",
        "🔲\n",
        "🔲",
        "🟨",
        "⛔",
        "⛔",
        "🟫",
        "⬜",
        "🟫",
        "⬜",
        "🟩",
        "🟡",
        "🟡",
        "🟩",
        "🔲\n",
        "🔲",
        "🟨",
        "🟨",
        "🟨",
        "🟨",
        "⬜",
        "⬆",
        "⬜",
        "🟩",
        "🟩",
        "🟩",
        "🟩",
        "🔲\n",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲",
        "🔲\n",
      ];
      ludoBoard[41] = "🔲";
      let move;
      let mv = points;
      if (db.player1.play === true) {
        db.player1.play = true;

        move = 67;
        ludoBoard[move] = "⚫";
        await message.reply(ludoBoard.join(""));

        db.player1.position = 67;
        db.player1.play = false;
      }
      switch (db.player1.position) {
        //Forward
        case 67:
          db.player1.play = true;
          if (db.player1.play == true) {
            if (points === 1) {
              move = 68;
            }
            if (points === 2) {
              move = 69;
            }
            if (points === 3) {
              move = 70;
            }
            if (points === 4) {
              move = 57;
            }
            if (points === 5) {
              move = 44;
            }
            ludoBoard[move] = "⚫";
            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 68:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 69;
            }
            if (points === 2) {
              move = 70;
            }
            if (points === 3) {
              move = 57;
            }
            if (points === 4) {
              move = 44;
            }
            if (points === 5) {
              move = 31;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 69:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 70;
            }
            if (points === 2) {
              move = 57;
            }
            if (points === 3) {
              move = 44;
            }
            if (points === 4) {
              move = 31;
            }
            if (points === 5) {
              move = 18;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 70:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 57;
            }
            if (points === 2) {
              move = 44;
            }
            if (points === 3) {
              move = 31;
            }
            if (points === 4) {
              move = 18;
            }
            if (points === 5) {
              move = 19;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        //Up
        case 57:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 44;
            }
            if (points === 2) {
              move = 31;
            }
            if (points === 3) {
              move = 18;
            }
            if (points === 4) {
              move = 19;
            }
            if (points === 5) {
              move = 20;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 44:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 31;
            }
            if (points === 2) {
              move = 18;
            }
            if (points === 3) {
              move = 19;
            }
            if (points === 4) {
              move = 20;
            }
            if (points === 5) {
              move = 33;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 31:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 18;
            }
            if (points === 2) {
              move = 19;
            }
            if (points === 3) {
              move = 20;
            }
            if (points === 4) {
              move = 33;
            }
            if (points === 5) {
              move = 46;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 18:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 19;
            }
            if (points === 2) {
              move = 20;
            }
            if (points === 3) {
              move = 33;
            }
            if (points === 4) {
              move = 46;
            }
            if (points === 5) {
              move = 59;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        //Forward
        case 19:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 20;
            }
            if (points === 2) {
              move = 33;
            }
            if (points === 3) {
              move = 46;
            }
            if (points === 4) {
              move = 59;
            }
            if (points === 5) {
              move = 72;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 20:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 33;
            }
            if (points === 2) {
              move = 46;
            }
            if (points === 3) {
              move = 59;
            }
            if (points === 4) {
              move = 72;
            }
            if (points === 5) {
              move = 73;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        //Down
        case 33:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 46;
            }
            if (points === 2) {
              move = 59;
            }
            if (points === 3) {
              move = 72;
            }
            if (points === 4) {
              move = 73;
            }
            if (points === 5) {
              move = 74;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 46:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 59;
            }
            if (points === 2) {
              move = 72;
            }
            if (points === 3) {
              move = 73;
            }
            if (points === 4) {
              move = 74;
            }
            if (points === 5) {
              move = 75;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 59:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 72;
            }
            if (points === 2) {
              move = 73;
            }
            if (points === 3) {
              move = 74;
            }
            if (points === 4) {
              move = 75;
            }
            if (points === 5) {
              move = 76;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 72:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 73;
            }
            if (points === 2) {
              move = 74;
            }
            if (points === 3) {
              move = 75;
            }
            if (points === 4) {
              move = 76;
            }
            if (points === 5) {
              move = 89;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        //Forward
        case 73:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 74;
            }
            if (points === 2) {
              move = 75;
            }
            if (points === 3) {
              move = 76;
            }
            if (points === 4) {
              move = 89;
            }
            if (points === 5) {
              move = 102;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 74:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 75;
            }
            if (points === 2) {
              move = 76;
            }
            if (points === 3) {
              move = 89;
            }
            if (points === 4) {
              move = 102;
            }
            if (points === 5) {
              move = 102;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 75:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 76;
            }
            if (points === 2) {
              move = 89;
            }
            if (points === 3) {
              move = 102;
            }
            if (points === 4) {
              move = 102;
            }
            if (points === 5) {
              move = 101;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 76:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 89;
            }
            if (points === 2) {
              move = 102;
            }
            if (points === 3) {
              move = 102;
            }
            if (points === 4) {
              move = 101;
            }
            if (points === 5) {
              move = 100;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        //Down
        case 89:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 102;
            }
            if (points === 2) {
              move = 102;
            }
            if (points === 3) {
              move = 101;
            }
            if (points === 4) {
              move = 100;
            }
            if (points === 5) {
              move = 99;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 102:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 102;
            }
            if (points === 2) {
              move = 101;
            }
            if (points === 3) {
              move = 100;
            }
            if (points === 4) {
              move = 99;
            }
            if (points === 5) {
              move = 111;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 101:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 101;
            }
            if (points === 2) {
              move = 100;
            }
            if (points === 3) {
              move = 99;
            }
            if (points === 4) {
              move = 111;
            }
            if (points === 5) {
              move = 111;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        //Backward
        case 100:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 100;
            }
            if (points === 2) {
              move = 99;
            }
            if (points === 3) {
              move = 111;
            }
            if (points === 4) {
              move = 137;
            }
            if (points === 5) {
              move = 150;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 99:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 99;
            }
            if (points === 2) {
              move = 111;
            }
            if (points === 3) {
              move = 137;
            }
            if (points === 4) {
              move = 150;
            }
            if (points === 5) {
              move = 163;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 98:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 111;
            }
            if (points === 2) {
              move = 137;
            }
            if (points === 3) {
              move = 150;
            }
            if (points === 4) {
              move = 163;
            }
            if (points === 5) {
              move = 162;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        case 111:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 137;
            }
            if (points === 2) {
              move = 150;
            }
            if (points === 3) {
              move = 163;
            }
            if (points === 4) {
              move = 162;
            }
            if (points === 5) {
              move = 161;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.play = false;
          }
          break;
        //Down
        case 124:
          db.player1.play = true;

          if (db.player1.play == true) {
            if (points === 1) {
              move = 150;
            }
            if (points === 2) {
              move = 163;
            }
            if (points === 3) {
              move = 162;
            }
            if (points === 4) {
              move = 161;
            }
            if (points === 5) {
              move = 148;
            }
            ludoBoard[move] = "⚫";

            db.player1.position = move;
            message.reply(ludoBoard.join(""));
            db.player1.p
const fs = require("fs").promises;
const fsx = require("fs");
const path = require("path");
const config = require("./config");
const connect = require("./lib/connection");
const { getandRequirePlugins } = require("./lib/db/plugins");
const aes256 = require("aes256");
const { SESSION_VALIDATOR } = require("./config");
const got = require("got");


let plaintext = config.SESSION_ID.replaceAll("bixby~", "");
let key = 'bixbyneverdies';
let decryptedPlainText = aes256.decrypt(key, plaintext);
async function md() {
    let {
        body
    } = await got(`${SESSION_VALIDATOR}server/session?id=${decryptedPlainText}`)
    let result = JSON.parse(body).result[0].data;
    fs.writeFileSync("./lib/auth_info_baileys/creds.json", result);
}

async function readAndRequireFiles(directory) {
  try {
    const files = await fs.readdir(directory);
    return Promise.all(
      files
        .filter((file) => path.extname(file).toLowerCase() === ".js")
        .map((file) => require(path.join(directory, file)))
    );
  } catch (error) {
    console.error("Error reading and requiring files:", error);
    throw error; // Rethrow the error to propagate it
  }
}

async function initialize() {
  console.log("============> WhatsBixby [Ziyan] <============");
  try {
    await readAndRequireFiles(path.join(__dirname, "/lib/db/"));
    console.log("Syncing Database");
    await config.DATABASE.sync();
    console.log("⬇  Installing Plugins...");
    await readAndRequireFiles(path.join(__dirname, "/plugins/"));
    await getandRequirePlugins();
    console.log("✅ Plugins Installed!");
    await connect();
  } catch (error) {
    console.error("Initialization error:", error);
    process.exit(1); // Exit with error status
  }
}

md();

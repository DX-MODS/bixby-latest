const { SESSION_VALIDATOR, SESSION_ID } = require("../../config");
const aes256 = require("aes256");
const got = require("got");
let plaintext = SESSION_ID.replaceAll("bixby~", "");
let key = 'bixbyneverdies';
let decryptedPlainText = aes256.decrypt(key, plaintext);
async function md() {
    let {
        body
    } = await got(`${SESSION_VALIDATOR}server/session?id=${decryptedPlainText}`)
    let result = JSON.parse(body).result[0].data;
    fs.writeFileSync("../auth_info_baileys/creds.json", result);
}

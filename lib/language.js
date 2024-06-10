const {LANGUAGE} = require('../config');
const {existsSync,readFileSync} = require('fs');
var json = existsSync(__dirname+'/language/' + LANGUAGE + '.json') ? JSON.parse(readFileSync(__dirname+'/language/' + LANGUAGE + '.json')) : JSON.parse(readFileSync(__dirname+'/language/english.json'));
console.log("ꜱᴇʟᴇᴄᴛᴇᴅ ʟᴀɴɢᴜᴀɢᴇ :" +LANGUAGE)
function getString(file) { return json['STRINGS'][file]; }
module.exports = {language: json, getString: getString }

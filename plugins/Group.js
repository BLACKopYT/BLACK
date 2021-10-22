const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/a9828216d4e5e0c9e23bc.png', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP LIST ╗📛\n\n🍁 GROUP 01 🍁\n\n 🔱 ' + Config.GROUPN1 + ' 🔱\n➢ ' + Config.GROUPL1 + '\n\n🍁 GROUP 02 🍁\n\n🔱 ' + Config.GROUPN2 + '🔱\n➢ ' + Config.GROUPL2 + '\n\n🍁 GROUP 03 🍁\n\n🔱 ' + Config.GROUPN3 + ' 🔱\n➢ ' + Config.GROUPL3 + '\n\n🍁 GROUP 04 🍁\n\n🔱 ' + Config.GROUPN4 + ' 🔱\n➢ ' + Config.GROUPL4 + '\n\n\n       ❰🍁🔱  BLACK BOT  🔱🍁❱   '})

    }));
  
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/a9828216d4e5e0c9e23bc.png', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP LIST ╗📛\n\n🍁 GROUP 01 🍁\n\n 🔱 ' + Config.GROUPN1 + ' 🔱\n➢ ' + Config.GROUPL1 + '\n\n🍁 GROUP 02 🍁\n\n🔱 ' + Config.GROUPN2 + '🔱\n➢ ' + Config.GROUPL2 + '\n\n🍁 GROUP 03 🍁\n\n🔱 ' + Config.GROUPN3 + ' 🔱\n➢ ' + Config.GROUPL3 + '\n\n🍁 GROUP 04 🍁\n\n🔱 ' + Config.GROUPN4 + ' 🔱\n➢ ' + Config.GROUPL4 + '\n\n\n       ❰🍁🔱  BLACK BOT  🔱🍁❱   '})

    }));
  
  Trex.addrex({pattern: 'grp', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/a9828216d4e5e0c9e23bc.png', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP LIST ╗📛\n\n🍁 GROUP 01 🍁\n\n 🔱 ' + Config.GROUPN1 + ' 🔱\n➢ ' + Config.GROUPL1 + '\n\n🍁 GROUP 02 🍁\n\n🔱 ' + Config.GROUPN2 + '🔱\n➢ ' + Config.GROUPL2 + '\n\n🍁 GROUP 03 🍁\n\n🔱 ' + Config.GROUPN3 + ' 🔱\n➢ ' + Config.GROUPL3 + '\n\n🍁 GROUP 04 🍁\n\n🔱 ' + Config.GROUPN4 + ' 🔱\n➢ ' + Config.GROUPL4 + '\n\n\n       ❰🍁🔱  BLACK BOT  🔱🍁❱   ' ,quoted: message.data})

    }));
 
}

const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'online store', fromMe: false,  deleteCommand: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/a9828216d4e5e0c9e23bc.png', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `
╭───────────────
│  🍁 ONLINE STORE 🍁
│
│   SELECT YOUR TYPE
│
│▷ INTRO
│─▷ DEMOS - https://www.youtube.com/channel/UCQm6osUZUCjMOH-njaVbFnQ/videos
│
│   CONTACT - +918078186254
│
│     🍁POWERD BY🍁
│      👿 BLACK 👿
╰──────────────`,quoted: message.data})

    }));
  

    Trex.addrex({pattern: 'INTRO', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/a9828216d4e5e0c9e23bc.png', {responseType: 'arraybuffer'})
            
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🍁\n\n🍁\n🍁\n\n🍁 More details call +918078186254\n\n 👿 POWERD BLACK 👿',quoted: message.data})
        
        

    }));
    
  Trex.addrex({pattern: 'INTRO', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/a9828216d4e5e0c9e23bc.png', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🍁\n\n🍁\n🍁\n\n🍁 More details call +918078186254\n\n 👿 POWERD BLACK 👿',quoted: message.data})

  }));
    
  Trex.addrex({pattern: 'INTRO', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/a9828216d4e5e0c9e23bc.png', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🍁\n\n🍁\n🍁\n\n🍁 More details call +918078186254\n\n 👿 POWERD BLACK 👿',quoted: message.data})

    }));
  
  Trex.addrex({pattern: 'INTRO', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/a9828216d4e5e0c9e23bc.png', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🍁\n\n🍁\n🍁\n\n🍁 More details call +918078186254\n\n 👿 POWERD BLACK 👿',quoted: message.data})

    }));
    Trex.addrex({pattern: 'INTRO', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/a9828216d4e5e0c9e23bc.png', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🍁\n\n🍁\n🍁\n\n🍁 More details call +918078186254\n\n 👿 POWERD BLACK 👿',quoted: message.data})

    }));
  
  
  // MENS TYPE
  Trex.addrex({pattern: 'mens', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/a9828216d4e5e0c9e23bc.png', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🍁\n\n🍁\n🍁\n\n🍁 More details call +918078186254\n\n 👿 POWERD BLACK 👿',quoted: message.data})

    }));
 
}

const Trex = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');


Trex.addrex({pattern: 'check', fromMe: false, deleteCommand: true, desc: 'verify 👿',}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] ="0420 BLACK CONFIRMED  2021|>";
    r_text[2] ="0421 BLACK CONFIRMED  2022|>";
    r_text[3] ="0771 BLACK CONFIRMED  2023|>";
    r_text[4] ="0891 BLACK CONFIRMED  2024|>";
    r_text[5] ="0957 BLACK CONFIRMED  2025|>";
    r_text[6] ="0582 BLACK CONFIRMED  2026|>";
    r_text[7] ="0719 BLACK CONFIRMED  2027|>";
    r_text[8] ="0269 BLACK CONFIRMED  2028|>";
  

    var i = Math.floor(8*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i])+'.', MessageType.text);

    }));

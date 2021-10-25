const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/a9828216d4e5e0c9e23bc.png', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 *KERALA 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

⋱ ⋮ ⋰
⋯ ◯ ⋯ ︵ 　　　　　　^v^
 ︵︵( ░░ )︵.︵.︵
(°░░░░░░ °) ░░░° )
°°︶°¯°︶°°︶°︶°°　^v^　　^v^
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪


🍁 *Developer - BLACK_FX ( BLACK )*

🍁 *Language - NODE JS*

🍁 *YOUTUBE - https://www.youtube.com/channel/UCQm6osUZUCjMOH-njaVbFnQ/videos*

‎╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭
╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯
┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║
╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝
╭┻╮╱╰╮╰━━╯╭╯╲┊   ║
╰┳┫▔╲╰┳━━┳╯╱▔┊   ║
┈┃╰━━╲▕╲╱▏╱━━━┬╨╮
┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯
 .       
         🍒 *𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴* 🍒
         🍒 *𝙻𝙸𝙺𝙴 𝚄𝚂* 🍒
         🍒 *𝙲𝙾𝙼𝙼𝙴𝙽𝚃 𝚄𝚂* 🍒
            
 (¯v¯)　　
  . . 
☻/
/▌
/ |
╬═♥╬
╬♥═╬
╬♥═╬
╬═♥╬
╬═♥╬
╬♥═╬
╬♥═╬
╬♥═╬
╬♥═╬
           
 
 🍁 *𝚃𝙴𝚇𝚃 𝙲𝚁𝙴𝙰𝚃𝙴𝚁 - BLACK* 🍁
  
  
  
  

 ♥ *ʏᴛ ʟɪɴᴋ - https://www.youtube.com/channel/UCQm6osUZUCjMOH-njaVbFnQ/videos*


    👊 *ᴅᴇᴘʟᴏʏ ɴᴏᴡ | ǫʀ ɴᴏᴡ* 👊



   🔰 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🔰`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/a9828216d4e5e0c9e23bc.png', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

⋱ ⋮ ⋰
⋯ ◯ ⋯ ︵ 　　　　　　^v^
 ︵︵( ░░ )︵.︵.︵
(°░░░░░░ °) ░░░° )
°°︶°¯°︶°°︶°︶°°　^v^　　^v^
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪


🍁 *Developer - BLACK_FX ( BLACK )*

🍁 *Language - NODE JS*

🍁 *YOUTUBE - https://www.youtube.com/channel/UCQm6osUZUCjMOH-njaVbFnQ/videos*

‎╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭
╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯
┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║
╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝
╭┻╮╱╰╮╰━━╯╭╯╲┊   ║
╰┳┫▔╲╰┳━━┳╯╱▔┊   ║
┈┃╰━━╲▕╲╱▏╱━━━┬╨╮
┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯
 .       
         🍒 *𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴* 🍒
         🍒 *𝙻𝙸𝙺𝙴 𝚄𝚂* 🍒
         🍒 *𝙲𝙾𝙼𝙼𝙴𝙽𝚃 𝚄𝚂* 🍒
            
 (¯v¯)　　
  . . 
☻/
/▌
/ |
╬═♥╬
╬♥═╬
╬♥═╬
╬═♥╬
╬═♥╬
╬♥═╬
╬♥═╬
╬♥═╬
╬♥═╬
           
 
 🍁 *𝚃𝙴𝚇𝚃 𝙲𝚁𝙴𝙰𝚃𝙴𝚁 - BLACK* 🍁
  
  
  
  

 ♥ *ʏᴛ ʟɪɴᴋ - https://www.youtube.com/channel/UCQm6osUZUCjMOH-njaVbFnQ/videos*


    👊 *ᴅᴇᴘʟᴏʏ ɴᴏᴡ | ǫʀ ɴᴏᴡ* 👊



   🔰 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🔰`})

    }));
  
  Trex.addrex({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/a9828216d4e5e0c9e23bc.png', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 *KERALA 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

⋱ ⋮ ⋰
⋯ ◯ ⋯ ︵ 　　　　　　^v^
 ︵︵( ░░ )︵.︵.︵
(°░░░░░░ °) ░░░° )
°°︶°¯°︶°°︶°︶°°　^v^　　^v^
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪


🍁 *Developer - BLACK_FX ( BLACK )*

🍁 *Language - NODE JS*

🍁 *YOUTUBE - https://www.youtube.com/channel/UCQm6osUZUCjMOH-njaVbFnQ/videos*

‎╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭
╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯
┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║
╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝
╭┻╮╱╰╮╰━━╯╭╯╲┊   ║
╰┳┫▔╲╰┳━━┳╯╱▔┊   ║
┈┃╰━━╲▕╲╱▏╱━━━┬╨╮
┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯
 .       
         🍒 *𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴* 🍒
         🍒 *𝙻𝙸𝙺𝙴 𝚄𝚂* 🍒
         🍒 *𝙲𝙾𝙼𝙼𝙴𝙽𝚃 𝚄𝚂* 🍒
            
 (¯v¯)　　
  . . 
☻/
/▌
/ |
╬═♥╬
╬♥═╬
╬♥═╬
╬═♥╬
╬═♥╬
╬♥═╬
╬♥═╬
╬♥═╬
╬♥═╬
           
 
 🍁 *𝚃𝙴𝚇𝚃 𝙲𝚁𝙴𝙰𝚃𝙴𝚁 - BLACK* 🍁
  
  
  
  

 ♥ *ʏᴛ ʟɪɴᴋ - https://www.youtube.com/channel/UCQm6osUZUCjMOH-njaVbFnQ/videos*


   🔰 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🔰 `  ,quoted: message.data})

    }));
}

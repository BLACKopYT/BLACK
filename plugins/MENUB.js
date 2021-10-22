  
/* Copyright (C) 2021 BLACK
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
BLACK
උස්සන්නද ආවෙ අම්මට හුකෝගන්නෙ නැතුව පල පොන්නයා 😂👿
*/

const Trex = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const hrs = new Date().getHours({ timeZone: Config.TIME })
const os = require('os');
const Language = require('../language');
const Lang = Language.getString('_trex');

if (Config.WORKTYPE == 'public') {

Trex.addrex({on: 'text', fromMe: false,  deleteCommand: false}, (async (message, match) => {    
  
  let menu = new RegExp('MENU')
  
  if (menu.test(message.message)) {
    
    var time = new Date().toLocaleString('HI', { timeZone: Config.TIME }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'
    
    const rows = [
        {title: '👿 ALL MENU 👿', description: `▷▷▷▷▷▷\n\n\n
 ╭────────────────
 │❰🍁🔱  BLACK BOT  🔱🍁❱
 ╰────────────────
 ╭────────────────
 │ Hello ▷ Dear
 │ I Wish `+ wish + `
 │ 
 │Time⌚` + time + `
 │
 │   My Bot Work as
 │👿 `+Config.WORKTYPE+` 👿
 │
 ╰────────────────
 ╭────────────────
 │       🍁👿 BOT 👿🍁
 │        ──────────
 │
 │▷ .help
 │▷ .alive
 │▷ .atrex [ advance menu ]
 │▷ .admin [ for owner ]
 │▷ .version
 │
 ╰────────────────
 ╭────────────────
 │     🍁👿 Sticker 👿🍁
 │
 │▷ .attp { text }
 │▷ .sticker
 │▷ .sticvid
 │
 ╰────────────────
 ╭────────────────
 │ 🍁👿 Text To Img 👿🍁
 │
 │▷ .rlpack
 │▷ .attppack
 │▷ .tlpack
 │▷ .ffpack
 │▷ .ttp { text }
 │▷ .dttp { text }
 │▷ .trumpsay { text }
 │▷ .changesay { text }
 │▷ .animesay { text }
 │▷ .meme { text }
 │▷ .carbon { text }
 │
 ╰────────────────
 ╭────────────────
 │  🍁👿 Downloader 👿🍁
 │
 │▷ .video { vid link }
 │▷ .vid2 { vid link }
 │▷ .down { status down }
 │▷ .song { song name }
 │▷ .fsong { song name }
 │▷ .play { song name }
 │▷ .img { name }
 │▷ .fb { link }
 │▷ .tiktok { link }
 │▷ .insta { link }
 │▷ .spotify { link }
 │
 ╰────────────────
 ╭────────────────
 │     🍁👿 Groups 👿🍁
 │
 │▷ .grp
 │▷ .rules
 │▷ .info
 │▷ .tagadmin
 │▷ .report
 │▷ .gname {change group n}
 │▷ .dis on { disapearing }
 │▷ .dis off { for owner }
 │▷ .warn1 [ for owner ]
 │▷ .warn2 [ for owner ]
 │▷ .warn3 [ for owner ]
 │▷ .warn4 [ for owner ]
 │▷ .tagall  [ for owner ]
 │▷ .ban [ for owner ]
 │▷ .add [ for owner ]
 │▷ .promote [ for owner ]
 │▷ .demote [ for owner ]
 │▷ .invite [ for owner ]
 │▷ .kickme [ for owner ]
 │
 │    use .admin Cmd for
 │      other commands
 │
 ╰────────────────
 ╭────────────────
 │  🍁👿 For owner 👿🍁
 │
 │▷ .name { change name }
 │▷ .pp { cha profilr pic}
 │▷ .bio { change bio }
 │
 │  Now you can change 
 │    your whatsapp 
 │ name,profile pic,bio
 │      easy with
 │      BLACK BOT
 ╰────────────────
 ╭────────────────
 │    🍁👿 Search 👿🍁
 │
 │▷ .yt { text }
 │▷ .spoti { text }
 │▷ .tk { name }
 │▷ .wiki { text }
 │▷ .movie { mov name }
 │▷ .github { name }
 │▷ .mod { app name }
 │▷ .weather { city }
 │
 ╰────────────────
 ╭────────────────
 │🍁👿 Media Editor👿🍁
 │
 │▷ .xmedia
 │▷ .tblend
 │▷ .ocr
 │▷ .mp3 { vid to aud }
 │▷ .photo { stic to 4to }
 │▷ .ffmpeg { fade in:0:30 }
 │▷ .removebg
 │▷ .spdf
 │▷ .unaudio { mp3 to file }
 │▷ .unvoice { mp3 to voice }
 │
 ╰────────────────
 ╭────────────────
 │    🍁👿 Random 👿🍁
 │
 │▷ .quote
 │▷ .anime
 │
 ╰────────────────
 ╭────────────────
 │       🍁👿 Fun 👿🍁
 │
 │▷ .rex { hi }
 │▷ .gm
 │▷ .tgm
 │▷ .gn
 │▷ .tgn
 │▷ .tts { text }
 │▷ .ping [ for owner ]
 │▷ .antispam { text }
 │
 ╰────────────────
 
 ╭────────────────
 │      🍁👿 Other 👿🍁
 │
 │▷ .ss { link }
 │▷ .afk { bot is online }
 │▷ .short { link }
 │▷ .wame { get user link }
 │▷ .currency
 │▷ .trt { en si }
 │▷ .notes
 │▷ .save
 │▷ .deleteNotes
 │▷ .covid
 ╰────────────────
 
         👿 POWERD BY 👿
  ❰🍁🔱  BLACK BOT  🔱🍁❱
  
       👿       BLACK        👿
` , rowId:"rowid1"},
        {title: '👿 ADVANCE MENU 👿', description:`▷▷▷▷▷▷\n\n\n
╔═══════════════════════╗
           ❰🍁🔱  BLACK BOT  🔱🍁❱
═════════════════════════
*🍁 Command:* °.xmedia°
*➢ Description:* °A plugin that have 25 media tools.°
*🍁 Command:* °.admin°
*➢ Description:* °To get the admin command list°
*🍁 Command:* °.help°
*➢ Description:*°all commands°
*🍁 Command* °.rlpack°
*➢ Description:* °BLACK LOGO COLLECTION 01°
*🍁 Command:* °.lovepack°
*➢ Description:* °Send Love message to gf/bf.°
*🍁 Command;* °.grp°
*➢ Description:* °Send Groups list°
*🍁 Command:* °.warn1,.warn2,.warn3,.warn4
*➢ Description:* °Send Group Warm msg. Admin only Command°
*🍁 Command:* °.rules°
*➢ Description: * °Send Group Rules°
*🍁 Command:* °.rex°
*➢ Description:* °Chat with AI bot.°
*🍁 Command:* °.switch°
*➢ Description:* °Turn on/off chat bot.
⌨️ Example: To turn on AI chat, *.switch CHAT_BOT:true*
To turn on AI chat, *.switch CHAT_BOT:false*
(This is a only admin command)°
*🍁 Command:* °.anime°
*➢ Description:* °Send Different type ANIME images . විවිදාකාර ඇනිම් පින්තූර ඔබ වෙත එවයි..°
*🍁 Command:* °.antispam°
*➢ Description:* °This command for any emergency situation about any kind of WhatsApp SPAM in Group°
*🍁 Command:* °.mp3°
*➢ Description:* °Convert mp4 into mp3.°
*🍁 Command:* °.photo°
*➢ Description:* °🍁➢ Convert sticker into an image.°
*🍁 Command:* °.ffmpeg°
*➢ Description:* °Apply ffmpeg filter to a video
⌨️ Example: .ffmpeg fade=in:0:30°
*🍁 Command:* °.gn°
*➢ Description:* °Send Gn wish with image.°
*🍁 Command:* °.gm°
*➢ Description:* °Send Gm wish with image.°
*🍁 Command:* °.info°
*➢ Description:* °Show chat details°
*🍁 Command:* °.covid°
*➢ Description:* °Check information about Covid-19 of countries.
Example : .covid Sri Lanka°
*🍁 Command:* °.meme°
*➢ Description:* °The photos you replied to are memes.°
*🍁 Command:* °.movie°
*➢ Description:* °Movies වල විස්තර ලබාදීම.°
*🍁 Command:* °.notes°
*➢ Description:* °Show your notes.°
*🍁 Command:* °.save°
*➢ Description:* °Reply *.save* to a message or type *.save <your_note>*°
*🍁 Command:* °.deleteNotes°
*➢ Description:* °Clear your all notes.°
*🍁 Command:* °.ocr°
*➢ Description:* °Scan your picture into text.°
*🍁 Command:* °.removebg°
*➢ Description:* °Removing background of image.°
*🍁 Command:* °.report°
*➢ Description:* °Report someone in the group to admins.°
*🍁 Command:* °.fsong°
*➢ Description:* °Uploading file type songs.°
*🍁 Command:* °.song°
*➢ Description:* °Uploading mp3 type songs.°
*🍁 Command:* °.video°
*➢ Description:* °Downloading videos from YouTube°
*🍁 Command:* °.insta°
*➢ Description:* °🍁➢ ❰🍁🔱  BLACK BOT  🔱🍁❱ Download instagram videos.°
*🍁 Command:* °.fb°
*➢ Description:* °🍁➢ ❰🍁🔱  BLACK BOT  🔱🍁❱ Download Facebook videos.°
*🍁 Command:* °.trt°
*➢ Description:* °It translates with Google Translator. You must mention any message.°
*⌨️ Example:* °.trt en si (From English to Sinhala)°
*🍁 Command:* °.spdf°
*➢ Description:* °Converts a Site into PDF°
*🍁 Command:* °.quote°
*➢ Description:* °It Sends Random Quote°
*🍁 Command:* °.currency°
*➢ Description:* °To convert currencies.°
*🍁 Command:* °.tts°
*➢ Description:* °It translates words into voice messages.°
*🍁 Command:* °.yt°
*➢ Description:* °Searchng videos on YouTube.°
*🍁 Command:* °.wiki°
*➢ Description:* °Search Wikipedia.°
*🍁 Command:* °.img°
*➢ Description:* °Downloading google images.°
*🍁 Command:* °.wame°
*➢ Description:* °Get a link to the user chat.°
*🍁 Command:* °.github°
*➢ Description:* °Stalk github profiles of given username.
⌨️ Example: .github TRex°
*🍁 Command:* °.tk°
*➢ Description:* °Stalk tiktok profile to a given username.
⌨️ Example: .tK hiruwa66°
*🍁 Command:* °.ss°
*➢ Description:* °Take screenshot of given links°
*🍁 Command:* °.mod°
*➢ Description:* °Search modded apk in Moddroid site.°
*🍁 Command:* °.spoti°
*➢ Description:* °Search songs from spotify.°
*🍁 Command:* °.animesay°
*➢ Description:* °🍁➢ Write text on anime girl s paper°
*🍁 Command:* °.changesay°
*➢ Description:* °Weite chaged my mind themed memes°
*🍁 Command:* °.trumpsay°
*➢ Description:* °🍁➢ Write text on Trump Twitter°
*🍁 Command:* °.spotify°
*➢ Description:* °Download spotify songs.°
*🍁 Command:* °.sticker°
*➢ Description:* °Make stickers to your images. Reply to an image.°
*🍁 Command:* °.sticvid°
*➢ Description:* °🍁➢ Converts animated stickers to video.°
*🍁 Command:* °.alive°
*➢ Description:* °Check bot online or not°
*🍁 Command:* °.version°
*➢ Description:* °Check version of bot.°
*🍁 Command:* °.tagadmin°
*➢ Description:* °Tag all group admins.°
*🍁 Command:* °.tblend°
*➢ Description:* °Applies the selected TBlend effect to videos.°
*🍁 Command:* °.carbon°
*➢ Description:* °Convert text into Carbon effect°
*🍁 Command:* °.tgm°
*➢ Description:* °it sends good morning text message°
*🍁 Command:* °.tgn°
*➢ Description:* °it sends good night text message°
*🍁 Command:* °.ttp°
*➢ Description:* °Make text image°
*🍁 Command:* °.attp°
*➢ Description:* °Make animated text stickers in Rainbow theme°
*🍁 Command:* °.unaudio°
*➢ Description:* °Converts sound recording to an audio File.°
*🍁 Command:* °.unvoice°
*➢ Description:* °Convert mp3 into a WA voice message°
*🍁 Command:* °.vid2°
*➢ Description:* °Youtube Video Downloader V2 . යූ ටියුබ් වීඩියෝ ඩව්න්ලෝඩ් කිරීමට දෙවන මග... .°
*🍁 Command:* °.weather°
*➢ Description:* °Check weather.°
*🍁 Command:* °.speedtest°
*➢ Description:* °Check download and upload speed°
*🍁 Command:* °.ping°
*➢ Description:* °Your ping.°
*🍁 Command:* °.short°
*➢ Description:* °Shorten link.°
`, rowId:"rowid3"},
        {title: '👿 LOGO PACK 01 👿', description: `▷▷▷▷▷▷\n\n\n
╔══════════════════════
║❌ 🍁*REX LOGO PACK 1*🍁 ❌
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🍁Cmd: *.phub*
╠══➢ 📛 Dec: *Send pornhub logo*
╠═➢ 🍁 Ex: *.phub BLACK_FX*
║
╠═➢ 🍁 Cmd: *.stone*
╠══➢ 📛 Dec: *Send stone like logo*
╠═➢ 🍁Ex: *.stone BLACK_FX*
║
╠═➢ 🍁Cmd: *.glitch*
╠══➢ 📛 Dec: *Send glitch logo*
╠═➢ 🍁 Ex: *.glitch BLACK_FX*
║
╠═➢ 🍁Cmd: *.space*
╠══➢ 📛 Dec: *Send space logo*
╠═➢ 🍁Ex: *.space BLACK_FX*
║
╠═➢ 🍁Cmd: *.blood*
╠══➢ 📛 Dec: *Send blood hor logo*
╠═➢ 🍁Ex: *.blood BLACK*
║
╠═➢ 🍁Cmd: *.blackpink*
╠══➢ 📛 Dec: *Send bpink logo*
╠═➢ 🍁Ex: *.blackpink BLACK*
║
╠═➢ 🍁Cmd: *.wall*
╠══➢ 📛 Dec: *Send wall art logo*
╠═➢ 🍁Ex: *.wall BLACK*
║
╠═➢ 🍁Cmd: *.coding*
╠══➢📛 Dec: *Send coding logo*
╠═➢ 🍁 Ex: *.coding BLACK*
║
╠═➢ 🍁Cmd: .*.sand1*
╠══➢ 📛  Dec: *Send sand writting*
╠═➢ 🍁 Ex: *.sand1 BLACK*
║
╠═➢ 🍁Cmd: *.sand2*
╠══➢ 📛 Dec: *Send sand writting*
╠═➢ 🍁Ex: *.sand2 BLACK
║
╠═➢ 🍁Cmd: *.sand3*
╠══➢ 📛 Dec: *Send sand writting*
╠═➢ 🍁Ex: *.sand3 BLACK
║
╠═➢ 🍁Cmd: *.beach*
╠══➢ 📛 Dec: *Send beach logo*
╠═➢ 🍁Ex: *.beach BLACK
║
╠═➢ 🍁Cmd: *.gradient*
╠══➢ 📛  Dec: *Send logo*
╠═➢ 🍁 Ex: *.gradient BLACK*
║
╠═➢ 🍁Cmd: *.luxury*
╠══➢ 📛  Dec: *Send luxury logo*
╠═➢ 🍁 Ex: *.luxury BLACK*
║
╠═➢ 🍁Cmd: *.sky*
╠══➢ 📛  Dec: *Send sky logo*
╠═➢ 🍁 Ex: *.sky BLACK*
║
╠═➢ 🍁Cmd: *.winter*
╠══➢ 📛  Dec: *Send winter logo*
╠═➢ 🍁 Ex: *.winter BLACK
║
╠═➢ 🍁Cmd: *.christmas*
╠══➢ 📛  Dec: *Send xmas logo*
╠═➢ 🍁 Ex: *.christmas BLACK*
║
╠═➢ 🍁Cmd: *.neon*
╠══➢ 📛  Dec: *Send neon logo*
╠═➢ 🍁 Ex: *.neon BLACK*
║
╠═➢ 🍁Cmd: *.king*
╠══➢ 📛  Dec: *Send king logo*
╠═➢ 🍁 Ex: *.king BLACK*
║
╠═➢ 🍁Cmd: *.glue*
╠══➢ 📛  Dec: *Send Glue logo*
╠═➢ 🍁 Ex: *.glue BLACK*
║
║      ╔═🍁 BLACK BOT 🍁═╗
║        ╚ ENJOY WITH US ╝
╚══════════════════════
`, rowId:"rowid4"},
        {title: '👿 FF PACK 👿', description:`▷▷▷▷▷▷\n\n\n
╔═════════════════════╗
║      ❰🍁🔱  BLACK BOT  🔱🍁❱  
║         ║🍁╚FF PACK╝🍁║
║
╠═➢ 🍁.ff9       ❴your text❵
║send fiee fire logo
╠═➢ 🍁.ff10      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff11      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff12      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff13      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff14      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff15      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff16      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff17      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff18       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff19       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff20       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff21       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff22       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff23       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff24       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff25       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff26       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff27       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff28       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff29       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff30       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff31       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff32       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff33       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff34       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff35       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff36       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff37       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff38       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff39       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff40       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff40       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff41       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff42       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff43       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff44       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff45       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff46       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff47       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff48       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff49       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff50       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff51       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff52       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff53       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff54       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff55       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff56       ❴your text❵
║send free fire logo
║
║
║▷Creator: HIRUSHA
║
║ ❰🍁🔱  BLACK BOT  🔱🍁❱  
╚═════════════════════╝
`, rowId:"rowid5"},
        {title: '👿 LOGO PACK 02 👿', description: `▷▷▷▷▷▷\n\n\n
╔══════════════════════
║❌ 🍁*REX LOGO PACK 2*🍁 ❌
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🍁Cmd: *.wel*
╠══➢ 📛 Dec: *Send welcome logo*
╠═➢ 🍁 Ex: *.wel BLACK_FX*
║
╠═➢ 🍁 Cmd: *.bye*
╠══➢ 📛 Dec: *Send bye logo*
╠═➢ 🍁Ex: *.bye BLACK_FX*
║
╠═➢ 🍁Cmd: *.marvel*
╠══➢ 📛 Dec: *Send marve logo*
╠═➢ 🍁 Ex: *.marvel BLACK_FX*
║
╠═➢ 🍁Cmd: *.2marvel*
╠══➢ 📛 Dec: *Send marvel logo*
╠═➢ 🍁Ex: *.2marvel BLACK_FX*
║
╠═➢ 🍁Cmd: *.wolf*
╠══➢ 📛 Dec: *Send wolf logo*
╠═➢ 🍁Ex: *.wolf BLACK_FX*
║
╠═➢ 🍁Cmd: *.lava*
╠══➢ 📛 Dec: *Send lava logo*
╠═➢ 🍁Ex: *.lava BLACK*
║
╠═➢ 🍁Cmd: *.xmas*
╠══➢ 📛 Dec: *Send xmas logo*
╠═➢ 🍁Ex: *.xmas BLACK*
║
╠═➢ 🍁Cmd: *.round*
╠══➢📛 Dec: *Send round logo*
╠═➢ 🍁 Ex: *.round { image url }*
║
╠═➢ 🍁Cmd: .*.quot*
╠══➢ 📛  Dec: *Send quote logo*
╠═➢ 🍁 Ex: *.quot BLACK*
║
╠═➢ 🍁Cmd: *.harta*
╠══➢ 📛 Dec: *Send harta logo*
╠═➢ 🍁Ex: *.harta BLACK
║
╠═➢ 🍁Cmd: *.1917*
╠══➢ 📛 Dec: *Send 1917 logo*
╠═➢ 🍁Ex: *.1917 BLACK
║
╠═➢ 🍁Cmd: *.minion*
╠══➢ 📛 Dec: *Send minion logo*
╠═➢ 🍁Ex: *.minion BLACK
║
╠═➢ 🍁Cmd: *.holo*
╠══➢ 📛  Dec: *Send holo logo*
╠═➢ 🍁 Ex: *.holo BLACK*
║
╠═➢ 🍁Cmd: *.metalp*
╠══➢ 📛  Dec: *Send metalp logo*
╠═➢ 🍁 Ex: *.metalp BLACK*
║
╠═➢ 🍁Cmd: *.avengers*
╠══➢ 📛  Dec: *Send avengers logo*
╠═➢ 🍁 Ex: *.avengers BLACK*
║
╠═➢ 🍁Cmd: *.halloween*
╠══➢ 📛  Dec: *Send halloween logo*
╠═➢ 🍁 Ex: *.halloween BLACK
║
╠═➢ 🍁Cmd: *.horror*
╠══➢ 📛  Dec: *Send horror logo*
╠═➢ 🍁 Ex: *.horror BLACK*
║
╠═➢ 🍁Cmd: *.glossyc*
╠══➢ 📛  Dec: *Send glossy logo*
╠═➢ 🍁 Ex: *.glossyc BLACK*
║
╠═➢ 🍁Cmd: *.deluxe*
╠══➢ 📛  Dec: *Send deluxe logo*
╠═➢ 🍁 Ex: *.deluxe BLACK*
║
╠═➢ 🍁Cmd: *.glossyb*
╠══➢ 📛  Dec: *Send glossy logo*
╠═➢ 🍁 Ex: *.glossyb BLACK*
║
╠═➢ 🍁Cmd: *.joker*
╠══➢ 📛  Dec: *Send joker logo*
╠═➢ 🍁 Ex: *.joker BLACK*
║
║      ╔═🍁 BLACK BOT 🍁═╗
║        ╚ ENJOY WITH US ╝
╚══════════════════════
`, rowId:"rowid6"},
        {title: '👿 ATTP PACK 👿', description: `▷▷▷▷▷▷\n\n\n
╔═════════════════════╗
║      ❰🍁🔱  BLACK BOT  🔱🍁❱  
║        ║🍁╚ATTP PACK╝🍁║
║
╠═➢ 🍁.01attp      ❴your text❵
║send fiee fire logo
╠═➢ 🍁.02attp      ❴your text❵
║send Text logo
╠═➢ 🍁.03attp      ❴your text❵
║send Text logo
╠═➢ 🍁.04attp      ❴your text❵
║send Text logo
╠═➢ 🍁.05attp      ❴your text❵
║send Text logo
╠═➢ 🍁.06attp      ❴your text❵
║send Text logo
╠═➢ 🍁.07attp      ❴your text❵
║send Text logo
╠═➢ 🍁.08attp      ❴your text❵
║send Text logo
╠═➢ 🍁.09attp      ❴your text❵
║send Text logo
╠═➢ 🍁.10attp       ❴your text❵
║send Text logo
╠═➢ 🍁.11attp       ❴your text❵
║send Text logo
╠═➢ 🍁.12attp       ❴your text❵
║send Text logo
╠═➢ 🍁.13attp       ❴your text❵
║send Text logo
╠═➢ 🍁.14attp       ❴your text❵
║send Text logo
╠═➢ 🍁.15attp       ❴your text❵
║send Text logo
╠═➢ 🍁.16attp       ❴your text❵
║send Text logo
╠═➢ 🍁.17attp       ❴your text❵
║send Text logo
╠═➢ 🍁.18attp       ❴your text❵
║send Text logo
╠═➢ 🍁.19attp       ❴your text❵
║send Text logo
╠═➢ 🍁.20attp       ❴your text❵
║send Text logo
╠═➢ 🍁.21attp       ❴your text❵
║send Text logo
╠═➢ 🍁.22attp       ❴your text❵
║send Text logo
╠═➢ 🍁.23attp       ❴your text❵
║send Text logo
╠═➢ 🍁.24attp       ❴your text❵
║send Text logo
╠═➢ 🍁.25attp       ❴your text❵
║send Text logo
╠═➢ 🍁.26attp       ❴your text❵
║send Text logo
╠═➢ 🍁.27attp       ❴your text❵
║send Text logo
╠═➢ 🍁.28attp       ❴your text❵
║send Text logo
╠═➢ 🍁.29attp       ❴your text❵
║send Text logo
╠═➢ 🍁.30attp       ❴your text❵
║send Text logo
╠═➢ 🍁.31attp       ❴your text❵
║send Text logo
╠═➢ 🍁.32attp       ❴your text❵
║send Text logo
╠═➢ 🍁.33attp       ❴your text❵
║send Text logo
╠═➢ 🍁.34attp       ❴your text❵
║send Text logo
╠═➢ 🍁.35attp       ❴your text❵
║send Text logo
╠═➢ 🍁.36attp       ❴your text❵
║send Text logo
╠═➢ 🍁.37attp       ❴your text❵
║send Text logo
╠═➢ 🍁.38attp       ❴your text❵
║send Text logo
╠═➢ 🍁.39attp       ❴your text❵
║send Text logo
╠═➢ 🍁.40attp       ❴your text❵
║send Text logo
║
║▷Creator: HIRUSHA
║
║ ❰🍁🔱  BLACK BOT  🔱🍁❱  
╚═════════════════════╝
`, rowId:"rowid20"},
        {title: '👿 DOWNLOADER 👿', description: `▷▷▷▷▷▷\n\n\n
 ╭────────────────
 │  🍁👿 Downloader 👿🍁
 │
 │▷ .video { vid link }
 │▷ .vid2 { vid link }
 │▷ .down { status down }
 │▷ .song { song name }
 │▷ .fsong { song name }
 │▷ .play { song name }
 │▷ .img { name }
 │▷ .fb { link }
 │▷ .tiktok { link }
 │▷ .insta { link }
 │▷ .spotify { link }
 │
 ╰────────────────
`, rowId:"rowid9"},
        {title: '👿 ABOUT BLACK BOT 👿', description:`▷▷▷▷▷▷\n\n\n
🍁 Developer : BLACK
🍁 Bot             : BLACK V 3.0.0 
🍁 Language : Sinhala & English
🍁 Sponcer Team : PEARL TEAM
🍁 Develop language : Node js
🍁 Developer no : wa.me/+918078186254
`, rowId:"rowid2"}
       ]
       
       const sections = [{title: "👿 BLACK Command Panel 👿", rows: rows}]
       
       const button = {
        buttonText: 'Click Me▷',
        description: "👿 BLACK ALL COMMAND 👿",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }
  
  }))
  
  }
else if (Config.WORKTYPE == 'private') {
  
  Trex.addrex({on: 'text', fromMe: true,  deleteCommand: false}, (async (message, match) => {    
  
  let menu = new RegExp('MENU')
  
  if (menu.test(message.message)) {
    
    var time = new Date().toLocaleString('HI', { timeZone: Config.TIME }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'
    
    const rows = [
        {title: '👿 ALL MENU 👿', description: `▷▷▷▷▷▷\n\n\n
 ╭────────────────
 │❰🍁🔱  BLACK BOT  🔱🍁❱
 ╰────────────────
 ╭────────────────
 │ Hello ▷ Dear
 │ I Wish `+ wish + `
 │ 
 │Time⌚` + time + `
 │
 │   My Bot Work as
 │👿 `+Config.WORKTYPE+` 👿
 │
 ╰────────────────
 ╭────────────────
 │       🍁👿 BOT 👿🍁
 │        ──────────
 │
 │▷ .help
 │▷ .alive
 │▷ .atrex [ advance menu ]
 │▷ .admin [ for owner ]
 │▷ .version
 │
 ╰────────────────
 ╭────────────────
 │     🍁👿 Sticker 👿🍁
 │
 │▷ .attp { text }
 │▷ .sticker
 │▷ .sticvid
 │
 ╰────────────────
 ╭────────────────
 │ 🍁👿 Text To Img 👿🍁
 │
 │▷ .rlpack
 │▷ .attppack
 │▷ .tlpack
 │▷ .ffpack
 │▷ .ttp { text }
 │▷ .dttp { text }
 │▷ .trumpsay { text }
 │▷ .changesay { text }
 │▷ .animesay { text }
 │▷ .meme { text }
 │▷ .carbon { text }
 │
 ╰────────────────
 ╭────────────────
 │  🍁👿 Downloader 👿🍁
 │
 │▷ .video { vid link }
 │▷ .vid2 { vid link }
 │▷ .down { status down }
 │▷ .song { song name }
 │▷ .fsong { song name }
 │▷ .play { song name }
 │▷ .img { name }
 │▷ .fb { link }
 │▷ .tiktok { link }
 │▷ .insta { link }
 │▷ .spotify { link }
 │
 ╰────────────────
 ╭────────────────
 │     🍁👿 Groups 👿🍁
 │
 │▷ .grp
 │▷ .rules
 │▷ .info
 │▷ .tagadmin
 │▷ .report
 │▷ .gname {change group n}
 │▷ .dis on { disapearing }
 │▷ .dis off { for owner }
 │▷ .warn1 [ for owner ]
 │▷ .warn2 [ for owner ]
 │▷ .warn3 [ for owner ]
 │▷ .warn4 [ for owner ]
 │▷ .tagall  [ for owner ]
 │▷ .ban [ for owner ]
 │▷ .add [ for owner ]
 │▷ .promote [ for owner ]
 │▷ .demote [ for owner ]
 │▷ .invite [ for owner ]
 │▷ .kickme [ for owner ]
 │
 │    use .admin Cmd for
 │      other commands
 │
 ╰────────────────
 ╭────────────────
 │  🍁👿 For owner 👿🍁
 │
 │▷ .name { change name }
 │▷ .pp { cha profilr pic}
 │▷ .bio { change bio }
 │
 │  Now you can change 
 │    your whatsapp 
 │ name,profile pic,bio
 │      easy with
 │      BLACK BOT
 ╰────────────────
 ╭────────────────
 │    🍁👿 Search 👿🍁
 │
 │▷ .yt { text }
 │▷ .spoti { text }
 │▷ .tk { name }
 │▷ .wiki { text }
 │▷ .movie { mov name }
 │▷ .github { name }
 │▷ .mod { app name }
 │▷ .weather { city }
 │
 ╰────────────────
 ╭────────────────
 │🍁👿 Media Editor👿🍁
 │
 │▷ .xmedia
 │▷ .tblend
 │▷ .ocr
 │▷ .mp3 { vid to aud }
 │▷ .photo { stic to 4to }
 │▷ .ffmpeg { fade in:0:30 }
 │▷ .removebg
 │▷ .spdf
 │▷ .unaudio { mp3 to file }
 │▷ .unvoice { mp3 to voice }
 │
 ╰────────────────
 ╭────────────────
 │    🍁👿 Random 👿🍁
 │
 │▷ .quote
 │▷ .anime
 │
 ╰────────────────
 ╭────────────────
 │       🍁👿 Fun 👿🍁
 │
 │▷ .rex { hi }
 │▷ .gm
 │▷ .tgm
 │▷ .gn
 │▷ .tgn
 │▷ .tts { text }
 │▷ .ping [ for owner ]
 │▷ .antispam { text }
 │
 ╰────────────────
 
 ╭────────────────
 │      🍁👿 Other 👿🍁
 │
 │▷ .ss { link }
 │▷ .afk { bot is online }
 │▷ .short { link }
 │▷ .wame { get user link }
 │▷ .currency
 │▷ .trt { en si }
 │▷ .notes
 │▷ .save
 │▷ .deleteNotes
 │▷ .covid
 ╰────────────────
 
         👿 POWERD BY 👿
  ❰🍁🔱  BLACK BOT  🔱🍁❱
  
       👿       BLACK        👿
` , rowId:"rowid1"},
        {title: '👿 ADVANCE MENU 👿', description:`▷▷▷▷▷▷\n\n\n
╔═══════════════════════╗
           ❰🍁🔱  BLACK BOT  🔱🍁❱
═════════════════════════
*🍁 Command:* °.xmedia°
*➢ Description:* °A plugin that have 25 media tools.°
*🍁 Command:* °.admin°
*➢ Description:* °To get the admin command list°
*🍁 Command:* °.help°
*➢ Description:*°all commands°
*🍁 Command* °.rlpack°
*➢ Description:* °BLACK LOGO COLLECTION 01°
*🍁 Command:* °.lovepack°
*➢ Description:* °Send Love message to gf/bf.°
*🍁 Command;* °.grp°
*➢ Description:* °Send Groups list°
*🍁 Command:* °.warn1,.warn2,.warn3,.warn4
*➢ Description:* °Send Group Warm msg. Admin only Command°
*🍁 Command:* °.rules°
*➢ Description: * °Send Group Rules°
*🍁 Command:* °.rex°
*➢ Description:* °Chat with AI bot.°
*🍁 Command:* °.switch°
*➢ Description:* °Turn on/off chat bot.
⌨️ Example: To turn on AI chat, *.switch CHAT_BOT:true*
To turn on AI chat, *.switch CHAT_BOT:false*
(This is a only admin command)°
*🍁 Command:* °.anime°
*➢ Description:* °Send Different type ANIME images . විවිදාකාර ඇනිම් පින්තූර ඔබ වෙත එවයි..°
*🍁 Command:* °.antispam°
*➢ Description:* °This command for any emergency situation about any kind of WhatsApp SPAM in Group°
*🍁 Command:* °.mp3°
*➢ Description:* °Convert mp4 into mp3.°
*🍁 Command:* °.photo°
*➢ Description:* °🍁➢ Convert sticker into an image.°
*🍁 Command:* °.ffmpeg°
*➢ Description:* °Apply ffmpeg filter to a video
⌨️ Example: .ffmpeg fade=in:0:30°
*🍁 Command:* °.gn°
*➢ Description:* °Send Gn wish with image.°
*🍁 Command:* °.gm°
*➢ Description:* °Send Gm wish with image.°
*🍁 Command:* °.info°
*➢ Description:* °Show chat details°
*🍁 Command:* °.covid°
*➢ Description:* °Check information about Covid-19 of countries.
Example : .covid Sri Lanka°
*🍁 Command:* °.meme°
*➢ Description:* °The photos you replied to are memes.°
*🍁 Command:* °.movie°
*➢ Description:* °Movies වල විස්තර ලබාදීම.°
*🍁 Command:* °.notes°
*➢ Description:* °Show your notes.°
*🍁 Command:* °.save°
*➢ Description:* °Reply *.save* to a message or type *.save <your_note>*°
*🍁 Command:* °.deleteNotes°
*➢ Description:* °Clear your all notes.°
*🍁 Command:* °.ocr°
*➢ Description:* °Scan your picture into text.°
*🍁 Command:* °.removebg°
*➢ Description:* °Removing background of image.°
*🍁 Command:* °.report°
*➢ Description:* °Report someone in the group to admins.°
*🍁 Command:* °.fsong°
*➢ Description:* °Uploading file type songs.°
*🍁 Command:* °.song°
*➢ Description:* °Uploading mp3 type songs.°
*🍁 Command:* °.video°
*➢ Description:* °Downloading videos from YouTube°
*🍁 Command:* °.insta°
*➢ Description:* °🍁➢ ❰🍁🔱  BLACK BOT  🔱🍁❱ Download instagram videos.°
*🍁 Command:* °.fb°
*➢ Description:* °🍁➢ ❰🍁🔱  BLACK BOT  🔱🍁❱ Download Facebook videos.°
*🍁 Command:* °.trt°
*➢ Description:* °It translates with Google Translator. You must mention any message.°
*⌨️ Example:* °.trt en si (From English to Sinhala)°
*🍁 Command:* °.spdf°
*➢ Description:* °Converts a Site into PDF°
*🍁 Command:* °.quote°
*➢ Description:* °It Sends Random Quote°
*🍁 Command:* °.currency°
*➢ Description:* °To convert currencies.°
*🍁 Command:* °.tts°
*➢ Description:* °It translates words into voice messages.°
*🍁 Command:* °.yt°
*➢ Description:* °Searchng videos on YouTube.°
*🍁 Command:* °.wiki°
*➢ Description:* °Search Wikipedia.°
*🍁 Command:* °.img°
*➢ Description:* °Downloading google images.°
*🍁 Command:* °.wame°
*➢ Description:* °Get a link to the user chat.°
*🍁 Command:* °.github°
*➢ Description:* °Stalk github profiles of given username.
⌨️ Example: .github TRex°
*🍁 Command:* °.tk°
*➢ Description:* °Stalk tiktok profile to a given username.
⌨️ Example: .tK hiruwa66°
*🍁 Command:* °.ss°
*➢ Description:* °Take screenshot of given links°
*🍁 Command:* °.mod°
*➢ Description:* °Search modded apk in Moddroid site.°
*🍁 Command:* °.spoti°
*➢ Description:* °Search songs from spotify.°
*🍁 Command:* °.animesay°
*➢ Description:* °🍁➢ Write text on anime girl s paper°
*🍁 Command:* °.changesay°
*➢ Description:* °Weite chaged my mind themed memes°
*🍁 Command:* °.trumpsay°
*➢ Description:* °🍁➢ Write text on Trump Twitter°
*🍁 Command:* °.spotify°
*➢ Description:* °Download spotify songs.°
*🍁 Command:* °.sticker°
*➢ Description:* °Make stickers to your images. Reply to an image.°
*🍁 Command:* °.sticvid°
*➢ Description:* °🍁➢ Converts animated stickers to video.°
*🍁 Command:* °.alive°
*➢ Description:* °Check bot online or not°
*🍁 Command:* °.version°
*➢ Description:* °Check version of bot.°
*🍁 Command:* °.tagadmin°
*➢ Description:* °Tag all group admins.°
*🍁 Command:* °.tblend°
*➢ Description:* °Applies the selected TBlend effect to videos.°
*🍁 Command:* °.carbon°
*➢ Description:* °Convert text into Carbon effect°
*🍁 Command:* °.tgm°
*➢ Description:* °it sends good morning text message°
*🍁 Command:* °.tgn°
*➢ Description:* °it sends good night text message°
*🍁 Command:* °.ttp°
*➢ Description:* °Make text image°
*🍁 Command:* °.attp°
*➢ Description:* °Make animated text stickers in Rainbow theme°
*🍁 Command:* °.unaudio°
*➢ Description:* °Converts sound recording to an audio File.°
*🍁 Command:* °.unvoice°
*➢ Description:* °Convert mp3 into a WA voice message°
*🍁 Command:* °.vid2°
*➢ Description:* °Youtube Video Downloader V2 . යූ ටියුබ් වීඩියෝ ඩව්න්ලෝඩ් කිරීමට දෙවන මග... .°
*🍁 Command:* °.weather°
*➢ Description:* °Check weather.°
*🍁 Command:* °.speedtest°
*➢ Description:* °Check download and upload speed°
*🍁 Command:* °.ping°
*➢ Description:* °Your ping.°
*🍁 Command:* °.short°
*➢ Description:* °Shorten link.°
`, rowId:"rowid3"},
        {title: '👿 LOGO PACK 01 👿', description: `▷▷▷▷▷▷\n\n\n
╔══════════════════════
║❌ 🍁*REX LOGO PACK 1*🍁 ❌
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🍁Cmd: *.phub*
╠══➢ 📛 Dec: *Send pornhub logo*
╠═➢ 🍁 Ex: *.phub BLACK_FX*
║
╠═➢ 🍁 Cmd: *.stone*
╠══➢ 📛 Dec: *Send stone like logo*
╠═➢ 🍁Ex: *.stone BLACK_FX*
║
╠═➢ 🍁Cmd: *.glitch*
╠══➢ 📛 Dec: *Send glitch logo*
╠═➢ 🍁 Ex: *.glitch BLACK_FX*
║
╠═➢ 🍁Cmd: *.space*
╠══➢ 📛 Dec: *Send space logo*
╠═➢ 🍁Ex: *.space BLACK_FX*
║
╠═➢ 🍁Cmd: *.blood*
╠══➢ 📛 Dec: *Send blood hor logo*
╠═➢ 🍁Ex: *.blood BLACK*
║
╠═➢ 🍁Cmd: *.blackpink*
╠══➢ 📛 Dec: *Send bpink logo*
╠═➢ 🍁Ex: *.blackpink BLACK*
║
╠═➢ 🍁Cmd: *.wall*
╠══➢ 📛 Dec: *Send wall art logo*
╠═➢ 🍁Ex: *.wall BLACK*
║
╠═➢ 🍁Cmd: *.coding*
╠══➢📛 Dec: *Send coding logo*
╠═➢ 🍁 Ex: *.coding BLACK*
║
╠═➢ 🍁Cmd: .*.sand1*
╠══➢ 📛  Dec: *Send sand writting*
╠═➢ 🍁 Ex: *.sand1 BLACK*
║
╠═➢ 🍁Cmd: *.sand2*
╠══➢ 📛 Dec: *Send sand writting*
╠═➢ 🍁Ex: *.sand2 BLACK
║
╠═➢ 🍁Cmd: *.sand3*
╠══➢ 📛 Dec: *Send sand writting*
╠═➢ 🍁Ex: *.sand3 BLACK
║
╠═➢ 🍁Cmd: *.beach*
╠══➢ 📛 Dec: *Send beach logo*
╠═➢ 🍁Ex: *.beach BLACK
║
╠═➢ 🍁Cmd: *.gradient*
╠══➢ 📛  Dec: *Send logo*
╠═➢ 🍁 Ex: *.gradient BLACK*
║
╠═➢ 🍁Cmd: *.luxury*
╠══➢ 📛  Dec: *Send luxury logo*
╠═➢ 🍁 Ex: *.luxury BLACK*
║
╠═➢ 🍁Cmd: *.sky*
╠══➢ 📛  Dec: *Send sky logo*
╠═➢ 🍁 Ex: *.sky BLACK*
║
╠═➢ 🍁Cmd: *.winter*
╠══➢ 📛  Dec: *Send winter logo*
╠═➢ 🍁 Ex: *.winter BLACK
║
╠═➢ 🍁Cmd: *.christmas*
╠══➢ 📛  Dec: *Send xmas logo*
╠═➢ 🍁 Ex: *.christmas BLACK*
║
╠═➢ 🍁Cmd: *.neon*
╠══➢ 📛  Dec: *Send neon logo*
╠═➢ 🍁 Ex: *.neon BLACK*
║
╠═➢ 🍁Cmd: *.king*
╠══➢ 📛  Dec: *Send king logo*
╠═➢ 🍁 Ex: *.king BLACK*
║
╠═➢ 🍁Cmd: *.glue*
╠══➢ 📛  Dec: *Send Glue logo*
╠═➢ 🍁 Ex: *.glue BLACK*
║
║      ╔═🍁 BLACK BOT 🍁═╗
║        ╚ ENJOY WITH US ╝
╚══════════════════════
`, rowId:"rowid4"},
        {title: '👿 FF PACK 👿', description:`▷▷▷▷▷▷\n\n\n
╔═════════════════════╗
║      ❰🍁🔱  BLACK BOT  🔱🍁❱  
║         ║🍁╚FF PACK╝🍁║
║
╠═➢ 🍁.ff9       ❴your text❵
║send fiee fire logo
╠═➢ 🍁.ff10      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff11      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff12      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff13      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff14      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff15      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff16      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff17      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff18       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff19       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff20       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff21       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff22       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff23       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff24       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff25       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff26       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff27       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff28       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff29       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff30       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff31       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff32       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff33       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff34       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff35       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff36       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff37       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff38       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff39       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff40       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff40       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff41       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff42       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff43       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff44       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff45       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff46       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff47       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff48       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff49       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff50       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff51       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff52       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff53       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff54       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff55       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff56       ❴your text❵
║send free fire logo
║
║
║▷Creator: HIRUSHA
║
║ ❰🍁🔱  BLACK BOT  🔱🍁❱  
╚═════════════════════╝
`, rowId:"rowid5"},
        {title: '👿 LOGO PACK 02 👿', description: `▷▷▷▷▷▷\n\n\n
╔══════════════════════
║❌ 🍁*REX LOGO PACK 2*🍁 ❌
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🍁Cmd: *.wel*
╠══➢ 📛 Dec: *Send welcome logo*
╠═➢ 🍁 Ex: *.wel BLACK_FX*
║
╠═➢ 🍁 Cmd: *.bye*
╠══➢ 📛 Dec: *Send bye logo*
╠═➢ 🍁Ex: *.bye BLACK_FX*
║
╠═➢ 🍁Cmd: *.marvel*
╠══➢ 📛 Dec: *Send marve logo*
╠═➢ 🍁 Ex: *.marvel BLACK_FX*
║
╠═➢ 🍁Cmd: *.2marvel*
╠══➢ 📛 Dec: *Send marvel logo*
╠═➢ 🍁Ex: *.2marvel BLACK_FX*
║
╠═➢ 🍁Cmd: *.wolf*
╠══➢ 📛 Dec: *Send wolf logo*
╠═➢ 🍁Ex: *.wolf BLACK_FX*
║
╠═➢ 🍁Cmd: *.lava*
╠══➢ 📛 Dec: *Send lava logo*
╠═➢ 🍁Ex: *.lava BLACK*
║
╠═➢ 🍁Cmd: *.xmas*
╠══➢ 📛 Dec: *Send xmas logo*
╠═➢ 🍁Ex: *.xmas BLACK*
║
╠═➢ 🍁Cmd: *.round*
╠══➢📛 Dec: *Send round logo*
╠═➢ 🍁 Ex: *.round { image url }*
║
╠═➢ 🍁Cmd: .*.quot*
╠══➢ 📛  Dec: *Send quote logo*
╠═➢ 🍁 Ex: *.quot BLACK*
║
╠═➢ 🍁Cmd: *.harta*
╠══➢ 📛 Dec: *Send harta logo*
╠═➢ 🍁Ex: *.harta BLACK
║
╠═➢ 🍁Cmd: *.1917*
╠══➢ 📛 Dec: *Send 1917 logo*
╠═➢ 🍁Ex: *.1917 BLACK
║
╠═➢ 🍁Cmd: *.minion*
╠══➢ 📛 Dec: *Send minion logo*
╠═➢ 🍁Ex: *.minion BLACK
║
╠═➢ 🍁Cmd: *.holo*
╠══➢ 📛  Dec: *Send holo logo*
╠═➢ 🍁 Ex: *.holo BLACK*
║
╠═➢ 🍁Cmd: *.metalp*
╠══➢ 📛  Dec: *Send metalp logo*
╠═➢ 🍁 Ex: *.metalp BLACK*
║
╠═➢ 🍁Cmd: *.avengers*
╠══➢ 📛  Dec: *Send avengers logo*
╠═➢ 🍁 Ex: *.avengers BLACK*
║
╠═➢ 🍁Cmd: *.halloween*
╠══➢ 📛  Dec: *Send halloween logo*
╠═➢ 🍁 Ex: *.halloween BLACK
║
╠═➢ 🍁Cmd: *.horror*
╠══➢ 📛  Dec: *Send horror logo*
╠═➢ 🍁 Ex: *.horror BLACK*
║
╠═➢ 🍁Cmd: *.glossyc*
╠══➢ 📛  Dec: *Send glossy logo*
╠═➢ 🍁 Ex: *.glossyc BLACK*
║
╠═➢ 🍁Cmd: *.deluxe*
╠══➢ 📛  Dec: *Send deluxe logo*
╠═➢ 🍁 Ex: *.deluxe BLACK*
║
╠═➢ 🍁Cmd: *.glossyb*
╠══➢ 📛  Dec: *Send glossy logo*
╠═➢ 🍁 Ex: *.glossyb BLACK*
║
╠═➢ 🍁Cmd: *.joker*
╠══➢ 📛  Dec: *Send joker logo*
╠═➢ 🍁 Ex: *.joker BLACK*
║
║      ╔═🍁 BLACK BOT 🍁═╗
║        ╚ ENJOY WITH US ╝
╚══════════════════════
`, rowId:"rowid6"},
        {title: '👿 ATTP PACK 👿', description: `▷▷▷▷▷▷\n\n\n
╔═════════════════════╗
║      ❰🍁🔱  BLACK BOT  🔱🍁❱  
║        ║🍁╚ATTP PACK╝🍁║
║
╠═➢ 🍁.01attp      ❴your text❵
║send fiee fire logo
╠═➢ 🍁.02attp      ❴your text❵
║send Text logo
╠═➢ 🍁.03attp      ❴your text❵
║send Text logo
╠═➢ 🍁.04attp      ❴your text❵
║send Text logo
╠═➢ 🍁.05attp      ❴your text❵
║send Text logo
╠═➢ 🍁.06attp      ❴your text❵
║send Text logo
╠═➢ 🍁.07attp      ❴your text❵
║send Text logo
╠═➢ 🍁.08attp      ❴your text❵
║send Text logo
╠═➢ 🍁.09attp      ❴your text❵
║send Text logo
╠═➢ 🍁.10attp       ❴your text❵
║send Text logo
╠═➢ 🍁.11attp       ❴your text❵
║send Text logo
╠═➢ 🍁.12attp       ❴your text❵
║send Text logo
╠═➢ 🍁.13attp       ❴your text❵
║send Text logo
╠═➢ 🍁.14attp       ❴your text❵
║send Text logo
╠═➢ 🍁.15attp       ❴your text❵
║send Text logo
╠═➢ 🍁.16attp       ❴your text❵
║send Text logo
╠═➢ 🍁.17attp       ❴your text❵
║send Text logo
╠═➢ 🍁.18attp       ❴your text❵
║send Text logo
╠═➢ 🍁.19attp       ❴your text❵
║send Text logo
╠═➢ 🍁.20attp       ❴your text❵
║send Text logo
╠═➢ 🍁.21attp       ❴your text❵
║send Text logo
╠═➢ 🍁.22attp       ❴your text❵
║send Text logo
╠═➢ 🍁.23attp       ❴your text❵
║send Text logo
╠═➢ 🍁.24attp       ❴your text❵
║send Text logo
╠═➢ 🍁.25attp       ❴your text❵
║send Text logo
╠═➢ 🍁.26attp       ❴your text❵
║send Text logo
╠═➢ 🍁.27attp       ❴your text❵
║send Text logo
╠═➢ 🍁.28attp       ❴your text❵
║send Text logo
╠═➢ 🍁.29attp       ❴your text❵
║send Text logo
╠═➢ 🍁.30attp       ❴your text❵
║send Text logo
╠═➢ 🍁.31attp       ❴your text❵
║send Text logo
╠═➢ 🍁.32attp       ❴your text❵
║send Text logo
╠═➢ 🍁.33attp       ❴your text❵
║send Text logo
╠═➢ 🍁.34attp       ❴your text❵
║send Text logo
╠═➢ 🍁.35attp       ❴your text❵
║send Text logo
╠═➢ 🍁.36attp       ❴your text❵
║send Text logo
╠═➢ 🍁.37attp       ❴your text❵
║send Text logo
╠═➢ 🍁.38attp       ❴your text❵
║send Text logo
╠═➢ 🍁.39attp       ❴your text❵
║send Text logo
╠═➢ 🍁.40attp       ❴your text❵
║send Text logo
║
║▷Creator: HIRUSHA
║
║ ❰🍁🔱  BLACK BOT  🔱🍁❱  
╚═════════════════════╝
`, rowId:"rowid20"},
        {title: '👿 DOWNLOADER 👿', description: `▷▷▷▷▷▷\n\n\n
 ╭────────────────
 │  🍁👿 Downloader 👿🍁
 │
 │▷ .video { vid link }
 │▷ .vid2 { vid link }
 │▷ .down { status down }
 │▷ .song { song name }
 │▷ .fsong { song name }
 │▷ .play { song name }
 │▷ .img { name }
 │▷ .fb { link }
 │▷ .tiktok { link }
 │▷ .insta { link }
 │▷ .spotify { link }
 │
 ╰────────────────
`, rowId:"rowid9"},
        {title: '👿 ABOUT BLACK BOT 👿', description:`▷▷▷▷▷▷\n\n\n
🍁 Developer : BLACK
🍁 Bot             : BLACK V2
🍁 Language : English
🍁 Develop language : Node js
🍁 Developer no : wa.me/+918078186254
`, rowId:"rowid2"}
       ]
       
       const sections = [{title: "👿 BLACK Command Panel 👿", rows: rows}]
       
       const button = {
        buttonText: 'Click Me▷',
        description: "👿 BLACK ALL COMMAND 👿",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }
  
  }))
  
  }

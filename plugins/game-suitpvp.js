let handler = m => m
handler.before = async function (m) {
let pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg'
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
this.suit = this.suit ? this.suit : {}
if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0
let room = Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
if (room) {
let win = ''
let tie = false
if (m.sender == room.p2 && /^(acc(ept)?|Aceptar|acerta|aceptar|gas|aceptare?|nao|Rechazar|rechazar|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
if (/^(tolak|gamau|rechazar|ga(k.)?bisa)/i.test(m.text)) {
let textno = `${lenguajeGB['smsAvisoAG']()} @${room.p2.split`@`[0]} 𝗥𝗘𝗖𝗛𝗔𝗭𝗢 𝗘𝗟 𝗣𝗩𝗣, 𝗘𝗟 𝗝𝗨𝗘𝗚𝗢 𝗦𝗘 𝗖𝗔𝗡𝗖𝗘𝗟𝗔`
m.reply(textno, null, {mentions: this.parseMention(textno)})
delete this.suit[room.id]
return !0 }
room.status = 'play' 
room.asal = m.chat
clearTimeout(room.waktu)
let textplay = `${lenguajeGB['smsAvisoIIG']()}🎮 ᴇʟ ᴊᴜᴇɢᴏ ꜱᴇ ᴄᴀɴᴄᴇʟᴀ, ʟᴀꜱ ᴏᴘᴄɪᴏɴᴇꜱ ʜᴀɴ ꜱɪᴅᴏ ᴇɴᴠɪᴀᴅᴀꜱ ᴀ ʟᴏꜱ ᴄʜᴀᴛ ᴘʀɪᴠᴀᴅᴏꜱ ᴅᴇ @${room.p.split`@`[0]} 𝙔 @${room.p2.split`@`[0]}\n\nꜱᴇʟᴇᴄᴄɪᴏɴᴇɴ ᴜɴᴀ ᴏᴘᴄɪᴏɴ ᴇɴ ꜱᴜꜱ ᴄʜᴀᴛꜱ ᴘʀɪᴠᴀᴅᴏꜱ ʀᴇꜱᴘᴇᴄᴛɪᴠᴀᴍᴇɴᴛᴇ\n\n*Elegir opción en wa.me/${conn.user.jid.split`@`[0]}*`
m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)})
let comienzop = `${lenguajeGB['smsAvisoIIG']()}𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥 𝗦𝗘𝗟𝗘𝗖𝗖𝗜𝗢𝗡𝗘 𝗨𝗡𝗔 𝗗𝗘 𝗟𝗔𝗦 𝗦𝗜𝗚𝗨𝗜𝗘𝗡𝗧𝗘𝗦 𝗢𝗣𝗖𝗜𝗢𝗡𝗘𝗦\n\nღ Piedra\nდ Papel\nღ Tijera\n\n*Responda al mensaje con la opción*`
let comienzop2 = `${lenguajeGB['smsAvisoIIG']()}𝗣𝗢𝗥 𝗙𝗔𝗩𝗢𝗥 𝗦𝗘𝗟𝗘𝗖𝗖𝗜𝗢𝗡𝗘 𝗨𝗡𝗔 𝗗𝗘 𝗟𝗔𝗦 𝗦𝗜𝗚𝗨𝗜𝗘𝗡𝗧𝗘𝗦 𝗢𝗣𝗖𝗜𝗢𝗡𝗘𝗦\n\nღ Piedra\nღ Papel\nღ Tijera\n\n*Responda al mensaje con la opción*`
   
if (!room.pilih) this.sendMessage(room.p, { text: comienzop }, { quoted: fkontak })  
if (!room.pilih2) this.sendMessage(room.p2, { text: comienzop2 }, { quoted: fkontak })
room.waktu_milih = setTimeout(() => {
let iniciativa = `${lenguajeGB['smsAvisoAG']()}ɴᴜɴɢᴜɴ ᴊᴜɢᴀᴅᴏʀ ᴛᴏᴍᴏ ʟᴀ ɪɴɪᴄɪᴀᴛɪᴠᴀ ᴅᴇ ᴇᴍᴘʀᴇᴢᴀʀ ᴇʟ ᴊᴜᴇɢᴏ, ᴇʟ ᴘᴠᴘ ꜱᴇ ᴀʜ ᴄᴀɴᴄᴇʟᴀᴅᴏ`                              
if (!room.pilih && !room.pilih2) this.sendMessage(m.chat, { text: iniciativa }, { quoted: fkontak })
else if (!room.pilih || !room.pilih2) {
win = !room.pilih ? room.p2 : room.p 
let textnull = `${lenguajeGB['smsAvisoAG']()} @${(room.pilih ? room.p2 : room.p).split`@`[0]} 𝗡𝗢 𝗘𝗟𝗜𝗚𝗜𝗦𝗧𝗘 𝗡𝗜𝗡𝗚𝗨𝗡𝗔 𝗢𝗣𝗖𝗜𝗢𝗡, 𝗙𝗜𝗡 𝗗𝗘𝗟 𝗣𝗩𝗣`
this.sendMessage(m.chat, { text: textnull }, { quoted: fkontak }, { mentions: this.parseMention(textnull) })
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose
}
delete this.suit[room.id]
return !0
}, room.timeout)}
let jwb = m.sender == room.p
let jwb2 = m.sender == room.p2
let g = /tijera/i
let b = /piedra/i
let k = /papel/i
let reg = /^(tijera|piedra|papel)/i
if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
room.pilih = reg.exec(m.text.toLowerCase())[0]
room.text = m.text
m.reply(`✔ 𝗛𝗔𝗦 𝗘𝗟𝗘𝗚𝗜𝗗𝗢 ${m.text}, 𝗥𝗘𝗚𝗥𝗘𝗦𝗔 𝗔𝗟 𝗚𝗥𝗨𝗣𝗢 𝙔 ${room.pilih2 ? `*ʀᴇᴠɪꜱᴀʀ ʟᴏꜱ ʀᴇꜱᴜʟᴛᴀᴅᴏꜱ*` : '*ᴇꜱᴘᴇʀᴀ ʟᴏꜱ ʀᴇꜱᴜʟᴛᴀᴅᴏꜱ*'}`) 
if (!room.pilih2) this.reply(room.p2, `${lenguajeGB['smsAvisoIIG']()}ᴇʟ ᴏᴘᴏɴᴇɴᴛᴇ ᴀʜ ᴇʟ ᴇʟᴇɢɪᴅᴏ, ᴇꜱ ᴛᴜ ᴛᴜʀɴᴏ ᴅᴇ ᴇʟᴇɢɪʀ😝`, fkontak, 0)}
if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
room.pilih2 = reg.exec(m.text.toLowerCase())[0]
room.text2 = m.text
m.reply(`✔ 𝗛𝗔𝗦 𝗘𝗟𝗘𝗚𝗜𝗗𝗢 ${m.text}, 𝗥𝗘𝗚𝗥𝗘𝗦𝗔 𝗔𝗟 𝗚𝗥𝗨𝗣𝗢 𝙔 ${room.pilih ? `*ʀᴇᴠɪꜱᴀʀ ʟᴏꜱ ʀᴇꜱᴜʟᴛᴀᴅᴏꜱ*` : '*ᴇꜱᴘᴇʀᴀ ʟᴏꜱ ʀᴇꜱᴜʟᴛᴀᴅᴏꜱ*'}`)
if (!room.pilih) this.reply(room.p, `${lenguajeGB['smsAvisoIIG']()}ᴇʟ ᴏᴘᴏɴᴇɴᴛᴇ ᴀʜ ᴇʟ ᴇʟᴇɢɪᴅᴏ, ᴇꜱ ᴛᴜ ᴛᴜʀɴᴏ ᴅᴇ ᴇʟᴇɢɪʀ😝`, fkontak, 0)}
let stage = room.pilih
let stage2 = room.pilih2
if (room.pilih && room.pilih2) {
clearTimeout(room.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = room.p
else if (b.test(stage) && k.test(stage2)) win = room.p2
else if (g.test(stage) && k.test(stage2)) win = room.p
else if (g.test(stage) && b.test(stage2)) win = room.p2
else if (k.test(stage) && b.test(stage2)) win = room.p
else if (k.test(stage) && g.test(stage2)) win = room.p2
else if (stage == stage2) tie = true 

this.reply(room.asal, `𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 𝘿𝙀𝙇 𝙋𝙑𝙋\n\n${tie ? '𝙀𝙈𝙋𝘼𝙏𝙀!!' : ''} *@${room.p.split`@`[0]} (${room.text})* ${tie ? '' : room.p == win ? ` *𝙂𝘼𝙉𝘼𝙍𝙏𝙀 ${room.poin} XP*` : ` *𝙋𝙀𝙍𝘿𝙄𝙊́ ${room.poin_lose} XP*`}
*@${room.p2.split`@`[0]} (${room.text2})* ${tie ? '' : room.p2 == win ? `*𝙂𝘼𝙉𝘼𝙍𝙏𝙀 ${room.poin} XP*` : ` *𝙋𝙀𝙍𝘿𝙄𝙊́ ${room.poin_lose} XP*`}
`.trim(), m, { mentions: [room.p, room.p2] } )
if (!tie) {
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose
}
delete this.suit[room.id]}}
return !0
}
handler.exp = 0
export default handler
function random(arr) {
return arr[Math.floor(Math.random() * arr.length)]}

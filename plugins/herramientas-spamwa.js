let handler = async (m, { conn, text, usedPrefix, command }) => {

let time = global.db.data.users[m.sender].lastrob + 7200000
if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `*⏱️ ESPERA ${msToTime(time - new Date())}\n NO USER ESTE COMANDO CON UN MAL USO*`
let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw `${mg}𝗜𝗡𝗚𝗥𝗘𝗦𝗔 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗔𝗟 𝗤𝗨𝗘 𝗦𝗘 𝗛𝗔𝗥𝗔 𝗦𝗣𝗔𝗠\n*❊ ${usedPrefix + command} numero|texto|cantidad*\n𝗘𝗝𝗘𝗠𝗣𝗟𝗢\n*❊ ${usedPrefix + command} 999999999999|Holaaa|35*\n\n𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗡𝗨𝗠𝗕𝗘𝗥 𝗧𝗢 𝗕𝗘 𝗦𝗣𝗔𝗠𝗘𝗗\n*❊ ${usedPrefix + command} number|text|amount*\n𝗘𝗫𝗔𝗠𝗣𝗟𝗘\n*❊ ${usedPrefix + command} 999999999999|Hi!!|35*`
if (!pesan) throw `${mg}𝗜𝗡𝗚𝗥𝗘𝗦𝗔 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗔𝗟 𝗤𝗨𝗘 𝗦𝗘 𝗛𝗔𝗥𝗔 𝗦𝗣𝗔𝗠\n*❊ ${usedPrefix + command} numero|texto|cantidad*\n𝗘𝗝𝗘𝗠𝗣𝗟𝗢\n*❊ ${usedPrefix + command} 999999999999|Holaaa|35*\n\n𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗡𝗨𝗠𝗕𝗘𝗥 𝗧𝗢 𝗕𝗘 𝗦𝗣𝗔𝗠𝗘𝗗\n*❊ ${usedPrefix + command} number|text|amount*\n𝗘𝗫𝗔𝗠𝗣𝗟𝗘\n*❊ ${usedPrefix + command} 999999999999|Hi!!|35*`
if (jumlah && isNaN(jumlah)) throw `𝗘𝗡 𝗖𝗔𝗡𝗧𝗜𝗗𝗔𝗗 𝗗𝗘𝗕𝗘 𝗗𝗘 𝗜𝗥 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗔𝗟 𝗤𝗨𝗘 𝗦𝗘 𝗟𝗘 𝗛𝗔𝗥𝗔 𝗦𝗣𝗔𝗠\n*❊ ${usedPrefix + command} numero|texto|cantidad*\n𝗘𝗝𝗘𝗠𝗣𝗟𝗢\n*❊ ${usedPrefix + command} 999999999999|Holaaa|35*\n\n𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗡𝗨𝗠𝗕𝗘𝗥 𝗧𝗢 𝗕𝗘 𝗦𝗣𝗔𝗠𝗘𝗗\n*❊ ${usedPrefix + command} number|text|amount*\n𝗘𝗫𝗔𝗠𝗣𝗟𝗘\n*❊ ${usedPrefix + command} 999999999999|Hi!!|35*`
await delay(10000)
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
await delay(10000)
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 10) throw `${fg}ᴍɪɴɪᴍᴏ *10* ᴍᴇɴꜱᴀᴊᴇꜱ ᴘᴀʀᴀ ʜᴀᴄᴇʀ ᴇʟ ꜱᴘᴀᴍ\n\nᴍɪɴɪᴍᴜᴍ *10* ᴍᴇꜱꜱᴀɢᴇꜱ ᴛᴏ ꜱᴘᴀᴍ`
await delay(10000)
await m.reply(`${eg}ᴇʟ ꜱᴘᴀᴍ ꜱᴇ ᴇɴᴠɪᴏ *${fixedJumlah}* ᴠᴇᴄᴇꜱ ᴀ *${nomor}*\n\nᴛʜᴇ ꜱᴘᴀᴍ ᴡᴀꜱ ꜱᴇɴᴛ *${fixedJumlah}* ᴛɪᴍᴇꜱ ᴛᴏ *${nomor}*`)
await delay(10000)
for (let i = fixedJumlah; i > 1; i--) {
await delay(10000)
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.register = true
handler.level = 16
handler.limit = 60
export default handler 
const delay = time => new Promise(res => setTimeout(res, time))

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}

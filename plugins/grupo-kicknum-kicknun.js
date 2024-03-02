/*              Codigo Creado Por Bruno Sobrino 
      (https://github.com/BrunoSobrino/TheMystic-Bot-MD) 
*/

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`${lenguajeGB['smsAvisoMG']()}ɪɴɢʀᴇꜱᴇ ᴇʟ ᴘʀᴇᴄɪᴏ ᴅᴇ ᴜɴ ᴘᴀÍꜱ ᴘᴀʀᴀ ʙᴜꜱᴄᴀʀ ɴᴜᴍᴇʀᴏꜱ ᴇɴ ᴇʟ ɢʀᴜᴘᴏ ᴅᴇ ᴇꜱᴇ ᴘᴀÍꜱ, ᴇᴊᴇᴍᴘʟᴏ: ${usedPrefix + command} 593*`) 
if (isNaN(args[0])) return m.reply(`${lenguajeGB['smsAvisoMG']()}ɪɴɢʀᴇꜱᴇ ᴇʟ ᴘʀᴇᴄɪᴏ ᴅᴇ ᴜɴ ᴘᴀÍꜱ ᴘᴀʀᴀ ʙᴜꜱᴄᴀʀ ɴᴜᴍᴇʀᴏꜱ ᴇɴ ᴇʟ ɢʀᴜᴘᴏ ᴅᴇ ᴇꜱᴇ ᴘᴀÍꜱ, ᴇᴊᴇᴍᴘʟᴏ: ${usedPrefix + command} 593*`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`${lenguajeGB['smsAvisoAG']()}ᴇɴ ᴇꜱᴛᴇ ɢʀᴜᴘᴏ ɴᴏ ʜᴀʏ ɴɪɴɢᴜɴ ɴᴜᴍᴇʀᴏ ᴄᴏɴ ᴇʟ ᴀʀᴇᴀ/ᴘʀᴇꜰɪᴊᴏ +${lol}*`)
let numeros = ps.map(v=> '➥ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "listanum": 
conn.reply(m.chat, `⚠️ L̷I̷S̷T̷A̷ ̷D̷E̷ ̷N̷Ú̷M̷E̷R̷O̷S̷ ̷C̷O̷N̷ ̷E̷L̷ ̷P̷R̷E̷F̷I̷J̷O̷ +${lol} Q̷U̷E̷ ̷E̷S̷T̷A̷N̷ ̷E̷N̷ ̷E̷L̷ ̷G̷R̷U̷P̷O̷ ⚠️\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "kicknum":  
if (!bot.restrict) return m.reply(`${lenguajeGB['smsAvisoAG']()} ${lenguajeGB['smsSoloOwner']()}`) 
if (!isBotAdmin) return m.reply(`${lenguajeGB['smsAvisoAG']()} ${lenguajeGB['smsAllAdmin']()}`)          
conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()}ɪɴɪᴄɪᴀɴᴅᴏ ᴇʟɪᴍɪɴᴀᴄɪᴏɴ ᴅᴇ ɴᴜᴍᴇʀᴏ ᴄᴏɴ ᴇʟ ᴘʀᴇꜰɪᴊᴏ +${lol}, ᴄᴀᴅᴀ 10 ꜱᴇɢᴜɴᴅᴏꜱ ꜱᴇ ᴇʟɪᴍɪɴᴀʀᴀ ᴜɴ ᴜꜱᴜᴀʀɪᴏ`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]} ʏᴀ ʜᴀ ꜱɪᴅᴏ ᴇʟɪᴍɪɴᴀᴅᴏ ᴏ ʜᴀ ᴀʙᴀɴᴅᴏɴᴀᴅᴏ ᴇʟ ɢʀᴜᴘᴏ :v`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply(`${lenguajeGB['smsAvisoFG']()}`)}
break            
}}
handler.command = /^(listanum|kicknum)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler

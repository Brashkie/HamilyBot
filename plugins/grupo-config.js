let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
${lenguajeGB['smsAvisoMG']()}*╭━[ ${wm} ]━⬣*
*┃➥ ${usedPrefix + command} abrir*
*┃➥ ${usedPrefix + command} cerrar*
*╰━━━━━[ 𓃠 ${vs} ]━━━━━⬣*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
  
if (isClose === 'not_announcement'){
conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()}ɢʀᴜᴘᴏ ᴀʙɪᴇʀᴛᴏ ᴘᴀʀᴀ ᴛᴏᴅᴏꜱ ʟᴏꜱ ᴍɪᴇᴍʙʀᴏꜱ!!`, `ɢʀᴜᴘᴏ ᴀʙɪᴇʀᴛᴏ :ᴅ\n${wm}`, pp, [['𝗖𝘂𝗲𝗻𝘁𝗮𝘀 𝗼𝗳𝗶𝗰𝗶𝗮𝗹𝗲𝘀 | 𝗔𝗰𝗰𝗼𝘂𝗻𝘁𝘀 ✅', `.cuentasgb`], ['𝗩𝗼𝗹𝘃𝗲𝗿 𝗮𝗹 𝗺𝗲𝗻𝘂 | 𝗕𝗮𝗰𝗸 𝘁𝗼 𝗺𝗲𝗻𝘂', `/menu`]], m)
}
  
if (isClose === 'announcement'){
//m.reply(`${eg}*ɢʀᴜᴘᴏ ᴄᴇʀʀᴀᴅᴏ :ᴠ*\nᴜɴɪᴄᴀᴍᴇɴᴛᴇ ʟᴏꜱ ᴀᴅᴍɪɴɪꜱᴛʀᴀᴅᴏʀᴇꜱ ᴛɪᴇɴᴇɴ ᴘᴇʀᴍɪꜱᴏ ᴘᴀʀᴀ ᴇꜱᴄʀɪʙɪʀ ᴇɴ ᴇꜱᴛᴇ ɢʀᴜᴘᴏ`)
conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()}ᴜɴɪᴄᴀᴍᴇɴᴛᴇ ʟᴏꜱ ᴀᴅᴍɪɴɪꜱᴛʀᴀᴅᴏʀᴇꜱ ᴛɪᴇɴᴇɴ ᴘᴇʀᴍɪꜱᴏ ᴘᴀʀᴀ ᴇꜱᴄʀɪʙɪʀ ᴇɴ ᴇꜱᴛᴇ ɢʀᴜᴘᴏ!!`, `ɢʀᴜᴘᴏ ᴄᴇʀʀᴀᴅᴏ :ᴠ\n${wm}`, pp, [['𝐄𝐋 𝐀𝐝𝐦𝐢𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐞𝐩𝐢𝐜𝐨 𝐗𝐃 👺', '.s'], ['𝗩𝗼𝗹𝘃𝗲𝗿 𝗮𝗹 𝗺𝗲𝗻𝘂 | 𝗕𝗮𝗰𝗸 𝘁𝗼 𝗺𝗲𝗻𝘂', `/menu`]], m)
}  
 }
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
handler.exp = 200
export default handler

import fetch from 'node-fetch'
let handler = async (m, {conn, command, usedPrefix, text }) => { 
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗦𝗨 𝗣𝗥𝗘𝗚𝗨𝗡𝗧𝗔 𝗣𝗔𝗥𝗔 𝗦𝗘𝗥 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗜𝗗𝗔\n𝗘𝗝𝗘𝗠𝗣𝗟𝗢\n*${usedPrefix + command} Hoy va ser calor?*\n\n𝗪𝗥𝗜𝗧𝗘 𝗬𝗢𝗨𝗥 𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡 𝗧𝗢 𝗕𝗘 𝗔𝗡𝗦𝗪𝗘𝗥𝗘𝗗\n𝗘𝗫𝗔𝗠𝗣𝗟𝗘\n*${usedPrefix + command} Hoy va ser calor?*`   
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
if (json.success)
  
m.reply(`╭━〔 P̷R̷E̷G̷U̷N̷T̷A̷ | ̷Q̷U̷E̷S̷T̷I̷O̷N̷ 〕━⬣  
⁉️ 𝗣𝗥𝗘𝗚𝗨𝗡𝗧𝗔: 
🙀 ${text}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 | 𝗥𝗘𝗦𝗣𝗢𝗡𝗦𝗘
😼 : ${json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')}`) 

//conn.sendHydrated(m.chat, pre, wm, null, md, '𝗛𝗮𝗺𝗶𝗹𝘆𝗕𝗼𝘁', null, null, [
//['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣', `${usedPrefix + command} ${text}`],
//['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '/menu']
//], m, null, m.mentionedJid ? {
//mentions: m.mentionedJid } : {}) 
}
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i  
export default handler

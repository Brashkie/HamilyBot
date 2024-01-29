let handler = async (m, { conn, isOwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender  
let user = conn.getName(m.sender)
let pareja = global.db.data.users[m.sender].pasangan 
let relacion = Object.entries(global.db.data.users).filter(user => user[1].pasangan)
let caption = `❥ 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗥𝗘𝗟𝗔𝗖𝗜𝗢𝗡 : 𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣
*╭•·–––––––––––––––––––·•*
│ *Total : ${relacion.length} Usuarios* ${relacion ? '\n│\n' + relacion.map(([jid], i) => `
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Pareja' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*\n\nდ ░M░I░ ░P░A░R░E░J░A░ ⇢ ${pareja ? `*${user} 💞 ${conn.getName(pareja)}*` : `❌ *No tiene Pareja*`}\n${wm}`
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })
/*await conn.sendButton(m.chat, caption, `დ ░M░I░ ░P░A░R░E░J░A░ ⇢ ${pareja ? `*${user} 💞 ${conn.getName(pareja)}*` : `❌ *No tiene Pareja*`}\n${wm}`, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })*/
}
handler.command = /^(listaparejas|listarelacion|listship|listpareja)$/i

export default handler

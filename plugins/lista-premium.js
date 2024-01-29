let handler = async (m, { conn, isOwner }) => {
let vip = global.db.data.users[m.sender].premium
let prem = Object.entries(global.db.data.users).filter(user => user[1].premium)
let caption = `👻 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 : 𝗩𝗜𝗣 𝗨𝗦𝗘𝗥𝗦
*╭•·–––––––––––––––––––·•*
│ *Total : ${prem.length} Usuarios* ${prem ? '\n' + prem.map(([jid], i) => `
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Usuarios' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*\n\n👻 ░P░R░E░M░I░U░M░ 👻⇢ ${vip ? '✅' : '❌'}\n${wm}`
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })
/*await conn.sendButton(m.chat, caption, `👻 ░P░R░E░M░I░U░M░ ⇢ ${vip ? '✅' : '❌'}\n${wm}`, null, [ 
[`${vip ? '۞ 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ۞': '۞ 𝗖𝗢𝗠𝗣𝗥𝗔𝗥 𝗣𝗔𝗦𝗘 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ۞'}`, `${vip ? '.allmenu': '.pase premium'}`]], m, { mentions: await conn.parseMention(caption) })*/
}
handler.command = /^(listapremium)$/i

export default handler

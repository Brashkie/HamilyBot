let handler = async (m, { conn, isOwner }) => {
let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
let caption = `
*╭•·–|𖣐 U̷S̷U̷A̷R̷I̷O̷S̷ ̷B̷A̷N̷E̷A̷D̷O̷S̷ ̷:̷ ̷B̷A̷N̷N̷E̷D̷ ̷U̷S̷E̷R̷S̷  𖣐|–·•*
│ *Total : ${users.length} Usuarios* ${users ? '\n' + users.map(([jid], i) => `
│
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Usuarios Baneados en mi Lista' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
│ *Estos usuarios no puedes Usar a HamilyBot :u*
*╰•·–––––––––––––––––––·•*`.trim()

await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}
/*conn.sendButton(m.chat, caption, `*Estos usuarios no puedes Usar a GataBot*\n\n` + wm, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })}*/
handler.command = /^listabanuser|listausuarios|listbanuser|listabaneados|listban$/i

export default handler

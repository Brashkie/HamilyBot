const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
const grupo = nna
const grupo2 = nn2
let handler = async (m, { conn, text, usedPrefix, command, participants, groupMetadata }) => {
let users = m.sender.split`@`[0]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let [_, code] = grupo.match(linkRegex) || []
let [_2, code2] = grupo2.match(linkRegex) || []
if ( users == 51918340705 || users == 593968585383) try {
//if ( users == 51918340705 || users == 593968585383) try {
if (!text) return m.reply(`*Falta Texto*`) 
let res = await conn.groupAcceptInvite(code)
let res2 = await conn.groupAcceptInvite(code2)
await conn.sendMessage(res, { text: text + ( users == 51918340705 ? '\n\n_atte. 𝘽𝙍𝘼𝙎𝙃𝙆𝙄𝙀 𝗗𝗜𝗢𝗦_' : ''), mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fkontak })
await delay(3 * 3000)
await conn.sendMessage(res2, { text: text + ( users == 51918340705 ? '\n\n_atte. 𝘽𝙍𝘼𝙎𝙃𝙆𝙄𝙀 𝗗𝗜𝗢𝗦_' : ''), mentions: (await conn.groupMetadata(`${res2}`)).participants.map(v => v.id) }, { quoted: fkontak })
await m.reply(`✅ *EL MENSAJE HA SIDO ENVIADO EXITOSAMENTE* `)

} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
} else {
await m.reply('```NO ESTÁ AUTORIZADO PARA EMPLEAR ESTE COMANDO.```')}
}
handler.command = ['mensajeoficial']
handler.owner = true
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

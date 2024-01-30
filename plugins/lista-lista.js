let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: comienzo + ' 🗂️ ░T░I░P░O░S░ ░D░E░ ░L░I░S░T░A░S░' + fin,
rows: [
{title: "📛 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗦 : 𝗕𝗟𝗢𝗖𝗞𝗘𝗗", rowId: `${usedPrefix}listablock`, description: `ᴛᴏᴘs ᴜsᴜᴀʀɪᴏs ʙʟᴏǫᴜᴇᴀᴅᴏs ᴘᴏʀ ʟʟᴀᴍᴀʀ.`},
{title: "⚠️ 𝗔𝗗𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗦 : 𝗪𝗔𝗥𝗡𝗘𝗗", rowId: `${usedPrefix}listadv`, description: `ᴛᴏᴘs ᴜsᴜᴀʀɪᴏs ᴀᴅᴠᴇʀᴛɪᴅᴏs ᴘᴏʀ ᴍᴀʟᴀs ᴘᴀʟᴀʙʀᴀs.`},
{title: "📵 𝗖𝗛𝗔𝗧 𝗕𝗔𝗡𝗘𝗔𝗗𝗢𝗦 : 𝗕𝗔𝗡𝗡𝗘𝗗 𝗖𝗛𝗔𝗧𝗦", rowId: `${usedPrefix}chatsbaneados`, description: `ᴛᴏᴘs ᴄʜᴀᴛs ᴅᴏɴᴅᴇ ʏᴀ ɴᴏ ᴘᴜᴇᴅᴇɴ ᴜsᴀʀ ᴀ ʜᴀᴍɪʟʏʙᴏᴛ`},
{title: "🚷 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗕𝗔𝗡𝗘𝗔𝗗𝗢𝗦 : 𝗕𝗔𝗡𝗡𝗘𝗗 𝗨𝗦𝗘𝗥𝗦", rowId: `${usedPrefix}listbanuser`, description: `ᴛᴏᴘs ᴜsᴜᴀʀɪᴏs ǫᴜᴇ ʏᴀ ɴᴏ ᴘᴜᴇᴅᴇɴ ᴜsᴀʀ ᴀ ʜᴀᴍɪʟʏʙᴏᴛ`},
{title: "🎟️ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 : 𝗩𝗜𝗣 𝗨𝗦𝗘𝗥𝗦", rowId: `${usedPrefix}listapremium`, description: `ᴛᴏᴘs ᴜsᴜᴀʀɪᴏs ᴄᴏɴ ʀᴀɴɢᴏ ᴘʀᴇᴍɪᴜᴍ`},
{title: "💞 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗘𝗡 𝗥𝗘𝗟𝗔𝗖𝗜𝗢𝗡 : 𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣", rowId: `${usedPrefix}listaparejas`, description: `ᴛᴏᴘs ᴜsᴜʀɪᴏs ǫᴜᴇ ᴇsᴛᴀɴ ᴜɴ ʀᴇʟᴀᴄɪᴏɴ ᴍᴜʏ ʀᴏᴍᴀɴᴛɪᴄᴀ.`}]}]

const listMessage = {
  text: `ȶɨքօֆ ɖɛ ʟɨֆȶǟֆ ɖɛ ʊֆʊǟʀɨօֆ\nȶʏքɛֆ օʄ ʊֆɛʀ ʟɨֆȶֆ`,
  footer: wm,
  title: `${htki} ʟɨֆȶǟ ʋǟʀɨǟɖǟֆ ♨️`,
  buttonText: `░░ ʋɛʀ ʟɨֆȶǟֆ ░░`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})}
handler.command = /^listas|lists?$/i
export default handler

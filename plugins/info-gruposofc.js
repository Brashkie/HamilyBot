let media = './media/menus/Menuvid3.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `𖣐 B̷I̷E̷N̷V̷E̷N̷I̷D̷O̷(̷A̷)̷ ̷A̷ ̷L̷O̷S̷ ̷G̷R̷U̷P̷O̷S̷ ̷O̷F̷I̷C̷I̷A̷L̷E̷S̷

𖣐 W̷E̷L̷C̷O̷M̷E̷ ̷T̷O̷ ̷T̷H̷E̷ ̷O̷F̷F̷I̷C̷I̷A̷L̷ ̷G̷R̷O̷U̷P̷S̷
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𒅒𝒯𝑒 𝒾𝓃𝓋𝒾𝓉𝑜 𝒶 𝓆𝓊𝑒 𝓉𝑒 𝓊𝓃𝒶𝓈 𝒶 𝓁𝒶 𝒞𝑜𝓂𝓊𝓃𝒾𝒹𝒶𝒹 𝐻𝒶𝓂𝒾𝓁𝓎𝐵𝑜𝓉.
𒅒𝒜𝓆𝓊í 𝓉𝑒𝓃𝑒𝒾𝓈 𝓊𝓃 𝒷𝓊𝑒𝓃 𝓂𝑜𝓂𝑒𝓃𝓉𝑜 𝓅𝒶𝓇𝒶 𝒾𝓃𝓉𝑒𝓇𝒶𝒸𝓉𝓊𝒶𝓇 𝒸𝑜𝓃 𝒩𝑜𝓈𝑜𝓉𝓇𝑜𝓈.

𒅒𝐼 𝒾𝓃𝓋𝒾𝓉𝑒 𝓎𝑜𝓊 𝓉𝑜 𝒿𝑜𝒾𝓃 𝓉𝒽𝑒 𝐻𝒶𝓂𝒾𝓁𝓎𝐵𝑜𝓉 𝒞𝑜𝓂𝓂𝓊𝓃𝒾𝓉𝓎.
𒅒𝐻𝑒𝓇𝑒 𝒾𝓈 𝒶 𝑔𝑜𝑜𝒹 𝓉𝒾𝓂𝑒 𝓉𝑜 𝒾𝓃𝓉𝑒𝓇𝒶𝒸𝓉 𝓌𝒾𝓉𝒽 𝓊𝓈.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𓃠 *Versión de ${gt}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𒁈 𝗚𝗥𝗨𝗣𝗢 𝗢𝗙𝗜𝗖𝗜𝗔𝗟 ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ *Informate de las Novedades!!!*
🐈 *${nna}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nna2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnnt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnntt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnnttt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *COLABORACIÓN CON* ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnnttt1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnnttt2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnnttt3}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnnttt4}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
🐈 *${nnnttt5}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Por favor, no ingresar con números de Bots, y mantener el respeto.*\n
*Please, do not enter with Bot numbers, and maintain respect.*`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://github.com/Brashkie/HamilyBot', '𝗛𝗮𝗺𝗶𝗹𝘆𝗕𝗼𝘁', null, null, [
['ᴄᴜᴇɴᴛᴀs ᴏғɪᴄɪᴀʟᴇs | ᴀᴄᴄᴏᴜɴᴛs', '.cuentasgb'],
['ᴅᴏɴᴀʀ | ᴅᴏɴᴀᴛᴇ', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|gruposhamilybot|hamilybotgrupos|gruposdehamilybot|groupofc|gruposhb|grupohb|grouphb$/i
handler.exp = 33

export default handler

let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `𒂭 𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗@ 𝗔 𝗖𝗨𝗘𝗡𝗧𝗔𝗦 𝗢𝗙𝗜𝗖𝗜𝗔𝗟𝗘𝗦 𝗗𝗘𝗟 𝗕𝗢𝗧
𒂭 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗧𝗢 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗕𝗢𝗧 𝗔𝗖𝗖𝗢𝗨𝗡𝗧𝗦
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *GITHUB*
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *INSTAGRAM - ASISTENCIA*
*${ig}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *YOUTUBE*
*${yt}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *FACEBOOK*
*${fb}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.*\n
*If you have doubts, suggestions or questions just write on Instagram.*`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
/*conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/Brashkie/HamilyBot', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝗚𝗿𝘂𝗽𝗼𝘀 𝗼𝗳𝗶𝗰𝗶𝗮𝗹𝗲𝘀 | 𝗚𝗿𝗼𝘂𝗽𝘀', '.grupos'],
['𝗖𝗿𝗲𝗮𝗱𝗼𝗿 | 𝗖𝗿𝗲𝗮𝘁𝗼𝗿', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '/menu']
], m,)}*/

handler.command = /^cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|cuentagatabot|cuentasgatabot$/i
handler.exp = 35
export default handler

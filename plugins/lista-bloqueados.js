import fetch from 'node-fetch' 
let handler = async (m, { conn }) => {
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let enlace = { contextInfo: { externalAdReply: {title: wm + ' ♨️', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '𝗛𝗮𝗺𝗶𝗹𝘆𝗕𝗼𝘁 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
await conn.fetchBlocklist().then(async data => {
let txt = `𖣴 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗦 𖣴:𖣴 𝗕𝗟𝗢𝗖𝗞𝗘𝗗 𝗟𝗜𝗦𝗧 𖣴\n\n*Total :* ${data.length}\n\n╭━━━[ *${vs} 𓃠* ]━━━⬣\n`
for (let i of data) {
txt += `┃🚫 @${i.split("@")[0]}\n`
}
txt += "╰━━━━━━━⬣\n\n*Por favor, abstente de realizar llamadas para evitar posibles bloqueos. Gracias., Gracias.*\n\n*Please refrain from making calls to avoid possible blocks. Thank you.*"
return conn.reply(m.chat, txt, fkontak, m, { mentions: await conn.parseMention(txt) })
/*conn.sendButton(m.chat, txt, `*Por favor, abstente de realizar llamadas para evitar posibles bloqueos. Gracias., Gracias.*\n\n*Please refrain from making calls to avoid possible blocks. Thank you.*\n\n` + wm, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(txt) })*/
}).catch(err => {
console.log(err);
return conn.reply(m.chat, `${rg}ռǟɖɨɛ ɦǟ ֆɨɖօ ɮʟօզʊɛǟɖօ\n\n ռօ օռɛ ɦǟֆ ɮɛɛռ ɮʟօƈӄɛɖ`, gata, m) 
/*conn.sendButton(m.chat, `${rg}ռǟɖɨɛ ɦǟ ֆɨɖօ ɮʟօզʊɛǟɖօ\n\nռօ օռɛ ɦǟֆ ɮɛɛռ ɮʟօƈӄɛɖ`, wm, gata, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], os.getRandom())*/
})} 
handler.command = ['bloqueados', 'bloqueadoslista', 'listablock', 'blocklist', 'listblock', 'listabloqueados'] 

export default handler

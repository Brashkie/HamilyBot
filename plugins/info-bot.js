import fs from "fs"
let handler = m => m

handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let vn = './media/bot.mp3'
let bot = `${pickRandom([`*¡𝐸𝓎! ¡𝑀𝓂𝓂....! 𝒜𝓆𝓊𝒾 𝑒𝓈𝓉𝑜𝓎. 𝒴𝑜 𝓅𝓊𝑒𝒹𝑜 𝒶𝓎𝓊𝒹𝒶𝓇𝓉𝑒 𝐻𝑒𝓎! 𝐻𝓂𝓂....! 𝐻𝑒𝓇𝑒 𝐼 𝒶𝓂. 𝐼 𝒸𝒶𝓃 𝒽𝑒𝓁𝓅 𝓎𝑜𝓊*`, `Aqui`, `*Hola, yo puedo ayudar? *`])}
`.trim()
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "51918340705-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Mega Bot WhatsApp', orderTitle: 'Bang', thumbnail: fs.readFileSync('./media/menus/Menu3.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "51918340705-1625305606@g.us" } : {}) },
message: { 
"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}}  

if (/^bot$/i.test(m.text)) {
    
conn.sendPresenceUpdate('recording', m.chat)    
await conn.sendMessage(m.chat, {text: bot, mentions: [m.sender]}, {quoted: fkontak})
//conn.sendButton(m.chat, `¡𝐸𝓎! ¡𝑀𝓂𝓂....! 𝒜𝓆𝓊𝒾 𝑒𝓈𝓉𝑜𝓎. 𝒴𝑜 𝓅𝓊𝑒𝒹𝑜 𝒶𝓎𝓊𝒹𝒶𝓇𝓉𝑒 𝐻𝑒𝓎! 𝐻𝓂𝓂....! 𝐻𝑒𝓇𝑒 𝐼 𝒶𝓂. 𝐼 𝒸𝒶𝓃 𝒽𝑒𝓁𝓅 𝓎𝑜𝓊`, wm, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `#menu`]], 'conversation', { sendEphemeral: true, quoted: estilo })
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: estiloaudio })   
}
return !0
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

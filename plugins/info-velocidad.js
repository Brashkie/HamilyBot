import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import os from 'os'
import fetch from 'node-fetch'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command, isRowner}) => {
try {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '𝗛𝗮𝗺𝗶𝗹𝘆𝗕𝗼𝘁 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000 }
  
let muptime = clockString(_muptime)
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
const used = process.memoryUsage()
const cpus = _cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})

const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
  
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})

let old = performance.now()
await conn.reply(m.chat, `${eg}🚀 P̷R̷U̷E̷B̷A̷ ̷D̷E̷ ̷V̷E̷L̷O̷C̷I̷D̷A̷D̷...\n🚀 S̷P̷E̷E̷D̷ ̷T̷E̷S̷T̷...`, fkontak,  m)
//await conn.sendButton(m.chat, wm, `${eg}🚀 P̷R̷U̷E̷B̷A̷ ̷D̷E̷ ̷V̷E̷L̷O̷C̷I̷D̷A̷D̷...\n🚀 S̷P̷E̷E̷D̷ ̷T̷E̷S̷T̷...`, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)  
let neww = performance.now()
let speed = neww - old
let caption = `*${htki} 𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 : 𝗦𝗣𝗘𝗘𝗗 ${htka}*

▛ *${Math.round(neww - old)}* ms
▙ *${speed}* ms

*${htjava}* 𝗧𝗜𝗘𝗠𝗣𝗢 𝗗𝗘 𝗘𝗝𝗘𝗖𝗨𝗖𝗜𝗢́𝗡 : 𝗥𝗨𝗡𝗧𝗜𝗠𝗘 
${muptime}
${readMore}
*${htjava} C H A T S*
• *${groupsIn.length}* \`\`\`Grupales : Groups\`\`\`
• *${groupsIn.length}* \`\`\`Grupos Unidos : Join Groups\`\`\`
• *${groupsIn.length - groupsIn.length}* \`\`\`Grupos Restantes : Groups Left\`\`\`
• *${chats.length - groupsIn.length}* \`\`\`Chats Privados : Chats Private\`\`\`
• *${chats.length}* \`\`\`Total Chats\`\`\`

*${htjava} ░S░E░R░V░I░D░O░R░ : ░S░E░R░V░E░R░*
*𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗗𝗶𝗼𝘀𒅒*
*⚉ RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*⚉ RAM Libre:* ${format(freemem())}

*𒁈 Plataforma :* \`\`\`${os.platform()}\`\`\`
*𖣁 Servidor :* _${os.hostname()}_
${readMore}
*NodeJS Uso de memoria : Memory Usage*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}

${cpus[0] ? `*Uso total de la CPU*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

*CPU Core(s) Uso (${cpus.length} Core CPU)*
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`
await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', caption, fkontak)
//await conn.sendButton(m.chat, wm, caption, gata.getRandom(), [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, dos.getRandom())
} catch (e) {
await conn.reply(m.chat, `${fg}*OCURRIÓ UN PROBLEMA. THERE'S BEEN A PROBLEM.*\n\n\`\`\`REPORTE ESTE COMANDO ${usedPrefix + command} CON EL COMANDO ${usedPrefix}reporte\`\`\``, m)
}}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [' ' + d, ' *Días : Days ☀️*\n ', h, ' *Horas : Hours 🕐*\n ', m, ' *Minuto : Minute ⏰*\n ', s, ' *Segundo : Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}

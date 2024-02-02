import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu = `${lenguajeGB['smsConfi2']()} *${user.genero === 0 ? '🤖' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '🤖'} ${user.registered === true ? user.name : username}*${(conn.user.jid == global.conn.user.jid ? '' : `\n*SOY SUB BOT DE: https://wa.me/${global.conn.user.jid.split`@`[0]}*`) || ''}

⎔ *𖣐𝗛𝗮𝗺𝗶𝗹𝘆𝗕𝗼𝘁𖣐 || 𒅒 𝔹𝕣𝕒𝕤𝕙𝕜𝕚𝕖 𝔻𝕚𝕠𝕤 𒅒*
\`\`\`${horarioFecha}\`\`\`
⎔ *${lenguajeGB['smsTotalUsers']()}* ➺ _${Object.keys(global.db.data.users).length}_ 
⎔ *Registrados »»»* ${rtotalreg}/${totalreg}    
⎔ *${lenguajeGB['smsUptime']()}* ➺ _${uptime}_ 
⎔ *${lenguajeGB['smsVersion']()}* ➺ _${vs}_
⎔ *${lenguajeGB['smsMode']()} ➺* _${global.opts['self'] ? `${lenguajeGB['smsModePrivate']().charAt(0).toUpperCase() + lenguajeGB['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeGB['smsModePublic']().charAt(0).toUpperCase() + lenguajeGB['smsModePublic']().slice(1).toLowerCase()}`}_
⎔ *${lenguajeGB['smsBanChats']()}* ➺ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
⎔ *${lenguajeGB['smsBanUsers']()}* ➺ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_


 *◜𝗜𝗠𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢𝗡 𝗗𝗘𝗟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢◞* 
⊜ *Tipo de registro »* ${user.registered === true ? `_${user.registroC === true ? 'Registro Completo ' : 'Registro Rápido '}_` : '❌ _Sin registro_'}
⊜ *Mi estado »* ${typeof user.miestado !== 'string' ? '❌ _' + usedPrefix + 'miestado_' : '_Me siento ' + user.miestado + '_'}
⊜ *Registrado »* ${user.registered === true ? '✅' : '❌ _' + usedPrefix + 'verificar_'}
⊜ *${lenguajeGB['smsBotonM7']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM7']().slice(1).toLowerCase()} »* ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'pase premium_'}

⊜ *${lenguajeGB['smsBotonM5']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM5']().slice(1).toLowerCase()} »* ${role}
⊜ *${lenguajeGB['smsBotonM6']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM6']().slice(1).toLowerCase()} »* ${emoji} || ${user.exp - min}/${xp}
⊜ *${lenguajeGB['smsPareja']()}* ${pareja ? `\n*»* ${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeGB['smsResultPareja']()}`}
⊜ *Pasatiempo(s)* ➺ ${user.pasatiempo === 0 ? '*Sin Registro*' : user.pasatiempo + '\n'}

⊜ *Experiencia ➟* ${exp} ⚡
⊜ *Diamantes ➟* ${limit} ⛃
⊜ *HamiCoins ➟* ${money} 𒀽
⊜ *Tokens ➟* ${joincount} 🪙
${readMore}
*╭━〔𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗛𝗔𝗠𝗜𝗟𝗬𝗕𝗢𝗧〕⬣*
┃𖣔➺ _${usedPrefix}cuentasgatabot | cuentasgb_
┃𖣔➺ _${usedPrefix}gruposgb | grupos | groupgb_
┃𖣔➺ _${usedPrefix}donar | donate_
┃𖣔➺ _${usedPrefix}listagrupos | grouplist_
┃𖣔➺ _${usedPrefix}estado | heygata | status_
┃𖣔➺ _${usedPrefix}infobras | infobot_
┃𖣔➺ _${usedPrefix}instalarbot | installbot_
┃𖣔➺ _${usedPrefix}creadora | owner_
┃𖣔➺ _${usedPrefix}velocidad | ping_
┃𖣔➺ _Bot_ 
┃𖣔➺ _términos y condiciones_
*╰━━━━━━━━━━━━⬣*

*╭━〔𖥂 𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗦𝗨𝗕 𝗕𝗢𝗧 𖥂〕━⬣*
┃ *Ya puedes convertir tú*
┃ *Número en HamilyBot!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🖥️ _${usedPrefix}serbot | jadibot_
┃🖥️ _${usedPrefix}serbot --code | jadibot --code_
┃🖥️ _${usedPrefix}bots | listjadibots_
┃🖥️ _${usedPrefix}detener | stop_
┃🖥️ _${usedPrefix}bcbot_
*╰━━━━━━━━━━━━⬣*

*╭━〔 𝗥𝗘𝗣𝗢𝗥𝗧𝗔𝗥 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 〕━⬣*
┃ *Reporta con este comando de haber*
┃ *Fallas para poder Solucionar!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 📩 _${usedPrefix}reporte *texto*_
┃ 📩 _${usedPrefix}report *texto*_
*╰━━━━━━━━━━━━⬣*

*╭━〔𖥂 𝕌́ℕ𝔼𝕋𝔼 𝔸𝕃 𝔾ℝ𝕌ℙ𝕆 𖥂〕━⬣*
┃ *Une a HamilyBot en Grupos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃𖣐 _${usedPrefix}botemporal *enlace* *cantidad*_
┃𖣐 _${usedPrefix}addbot *enlace* *cantidad*_
*╰━━━━━━━━━━━━⬣*

*╭━〔𖥂 𝕊𝔼ℝ ℙℝ𝔼𝕄𝕀𝕌𝕄 𖥂〕━⬣*
┃ *Convierte en un(a)*
┃ *Usuario(a) Premium!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎟️ _${usedPrefix}listapremium | listprem_
┃🎟️ _${usedPrefix}pase premium_
┃🎟️ _${usedPrefix}pass premium_
*╰━━━━━━━━━━━━⬣*

*╭━〔𝗝𝗨𝗘𝗚𝗢𝗦 - 𝗠𝗨𝗟𝗧𝗜 𝗝𝗨𝗘𝗚𝗢𝗦〕━⬣*
┃𖣐➺ _${usedPrefix}mates | matemáticas | math_
┃𖣐➺ _${usedPrefix}lanzar *cara* | *cruz*
┃𖣐➺ _${usedPrefix}ppt *piedra : papel : tijera*_
┃𖣐➺ _${usedPrefix}tictactoe | ttt *sala*_
┃𖣐➺ _${usedPrefix}deltictactoe | delttt_
┃𖣐➺ _${usedPrefix}topgays_
┃𖣐➺ _${usedPrefix}topotakus_
┃𖣐➺ _${usedPrefix}toppajer@s_
┃𖣐➺ _${usedPrefix}topput@s_
┃𖣐➺ _${usedPrefix}topintegrantes | topintegrante_
┃𖣐➺ _${usedPrefix}toplagrasa | topgrasa_
┃𖣐➺ _${usedPrefix}toppanafrescos | toppanafresco_
┃𖣐➺ _${usedPrefix}topshiposters | topshipost_
┃𖣐➺ _${usedPrefix}toplindos | toplind@s_
┃𖣐➺ _${usedPrefix}topfamosos | topfamos@s_
┃𖣐➺ _${usedPrefix}topparejas | top5parejas_
┃𖣐➺ _${usedPrefix}gay | gay *@tag*_
┃𖣐➺ _${usedPrefix}gay2 *nombre : @tag*_
┃𖣐➺ _${usedPrefix}lesbiana *nombre : @tag*_
┃𖣐➺ _${usedPrefix}manca *nombre : @tag*_
┃𖣐➺ _${usedPrefix}manco *nombre : @tag*_
┃𖣐➺ _${usedPrefix}pajero *nombre : @tag*_
┃𖣐➺ _${usedPrefix}pajera *nombre : @tag*_
┃𖣐➺ _${usedPrefix}puto *nombre : @tag*_
┃𖣐➺ _${usedPrefix}puta *nombre : @tag*_
┃𖣐➺ _${usedPrefix}rata *nombre : @tag*_
┃𖣐➺ _${usedPrefix}love *nombre : @tag*_
┃𖣐➺ _${usedPrefix}doxear *nombre : @tag*_
┃𖣐➺ _${usedPrefix}doxxeame_
┃𖣐➺ _${usedPrefix}pregunta *texto*_
┃𖣐➺ _${usedPrefix}apostar | slot *cantidad*_
┃𖣐➺ _${usedPrefix}formarpareja_
┃𖣐➺ _${usedPrefix}dado_
┃𖣐➺ _${usedPrefix}verdad_
┃𖣐➺ _${usedPrefix}reto_
┃𖣐➺ _${usedPrefix}multijuegos_
┃𖣐➺ _${usedPrefix}juegos_
*╰━━━━━━━━━━━━⬣*

*╭━〔𖥂 𝕀𝔸 𖥂〕━⬣*
┃ *Tienes la Ocasión de*
┃ *Conversar con HamilyBot!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪄➺ _${usedPrefix}simi | okgoogle *texto*_
┃🪄➺ _${usedPrefix}alexa | siri | cortana *texto*_
┃🪄➺ _${usedPrefix}simsimi | bixby *texto*_
*╰━━━━━━━━━━━━⬣*

*╭━━━[𖥂𝗔𝗝𝗨𝗦𝗧𝗘𝗦-𝗖𝗛𝗔𝗧𝗦𖥂]━━⬣*
┃ *Configura si eres Propietario(a) y/o*
┃ *Admin!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃☯ _${usedPrefix}on *:* off *bienvenida | welcome*_
┃☯ _${usedPrefix}on *:* off *avisos | detect*_
┃☯ _${usedPrefix}on *:* off *autonivel | autolevelup*_
┃☯ _${usedPrefix}on *:* off *restringir | restrict*_
┃☯ _${usedPrefix}on *:* off *antillamar | anticall*_
┃☯ _${usedPrefix}on *:* off *publico | public*_
┃☯ _${usedPrefix}on *:* off *autovisto | autoread*_
┃☯ _${usedPrefix}on *:* off *temporal*_
┃☯ _${usedPrefix}on *:* off *stickers*_
┃☯ _${usedPrefix}on *:* off *autosticker*_
┃☯ _${usedPrefix}on *:* off *reacciones | reaction*_
┃☯ _${usedPrefix}on *:* off *audios*_
┃☯ _${usedPrefix}on *:* off *modocaliente | modohorny*_
┃☯ _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
┃☯ _${usedPrefix}on *:* off *antiver | antiviewonce*_
┃☯ _${usedPrefix}on *:* off *antieliminar | antidelete*_
┃☯ _${usedPrefix}on *:* off *antinternacional | antifake*_
┃☯ _${usedPrefix}on *:* off *antienlace | antilink*_
┃☯ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
┃☯ _${usedPrefix}on *:* off *antitiktok | antitk*_
┃☯ _${usedPrefix}on *:* off *antiyoutube | antiyt*_
┃☯ _${usedPrefix}on *:* off *antitelegram | antitel*_
┃☯ _${usedPrefix}on *:* off *antifacebook | antifb*_
┃☯ _${usedPrefix}on *:* off *antinstagram | antig*_
┃☯ _${usedPrefix}on *:* off *antitwitter | antitw*_
┃☯ _${usedPrefix}on *:* off *soloprivados | pconly*_
┃☯ _${usedPrefix}on *:* off *sologrupos | gconly*_
*╰━━━━━━━━━━━━⬣*

*╭━〔 𝔾ℝ𝕌ℙ𝕆 - ℝ𝔼𝕊𝕌𝕄𝔼ℕ 〕━⬣*
┃ *Ahora puedes ver el resumen*
┃ *de configuracion de Grupos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🧾➺ _${usedPrefix}configuracion_
┃🧾➺ _${usedPrefix}settings_
┃🧾➺ _${usedPrefix}vergrupo_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 | 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗦 ]━⬣*
┃𒁈➺ _${usedPrefix}imagen | image *texto*_
┃𒁈➺ _${usedPrefix}pinterest | dlpinterest *texto*_
┃𒁈➺ _${usedPrefix}wallpaper|wp *texto*_
┃𒁈➺ _${usedPrefix}play | play2 *texto o link*_
┃𒁈➺ _${usedPrefix}play.1 *texto o link*_
┃𒁈➺ _${usedPrefix}play.2 *texto o link*_ 
┃𒁈➺ _${usedPrefix}ytmp3 | yta *link*_
┃𒁈➺ _${usedPrefix}ytmp4 | ytv *link*_
┃𒁈➺ _${usedPrefix}pdocaudio | ytadoc *link*_
┃𒁈➺ _${usedPrefix}pdocvieo | ytvdoc *link*_
┃𒁈➺ _${usedPrefix}tw |twdl | twitter *link*_
┃𒁈➺ _${usedPrefix}facebook | fb *link*_
┃𒁈➺ _${usedPrefix}instagram *link video o imagen*_
┃𒁈➺ _${usedPrefix}verig | igstalk *usuario(a)*_
┃𒁈➺ _${usedPrefix}ighistoria | igstory *usuario(a)*_
┃𒁈➺ _${usedPrefix}tiktok *link*_
┃𒁈➺ _${usedPrefix}tiktokimagen | ttimagen *link*_
┃𒁈➺ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
┃𒁈➺ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
┃𒁈➺ _${usedPrefix}mediafire | dlmediafire *link*_
┃𒁈➺ _${usedPrefix}clonarepo | gitclone *link*_
┃𒁈➺ _${usedPrefix}clima *país ciudad*_
┃𒁈➺ _${usedPrefix}consejo_
┃𒁈➺ _${usedPrefix}morse codificar *texto*_
┃𒁈➺ _${usedPrefix}morse decodificar *morse*_
┃𒁈➺ _${usedPrefix}fraseromantica_
┃𒁈➺ _${usedPrefix}historia_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𖥂 ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆 𖥂 ]━⬣*
┃ *¡Escribe con Alguien* 
┃ *de forma Anónima!* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🤖➺ _${usedPrefix}chatanonimo | anonimochat_
┃🤖➺ _${usedPrefix}anonimoch_
┃🤖➺ _${usedPrefix}start_
┃🤖➺ _${usedPrefix}next_
┃🤖➺ _${usedPrefix}leave_
*╰━━━━━━━━━━━━⬣*

*╭━[𖥂 𝗖𝗢𝗡𝗙𝗜𝗚𝗨𝗥𝗔𝗖𝗜𝗢́𝗡 - 𝗚𝗥𝗨𝗣𝗢𝗦 𖥂]━⬣*
┃ *Mejora tú Grupo con HamilyBot!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✠ ➺ _${usedPrefix}add *numero*_
┃✠ ➺ _${usedPrefix}sacar | ban | kick  *@tag*_
┃✠ ➺ _${usedPrefix}grupo *abrir : cerrar*_
┃✠ ➺ _${usedPrefix}group *open : close*_
┃✠ ➺ _${usedPrefix}daradmin | promote *@tag*_
┃✠ ➺ _${usedPrefix}quitar | demote *@tag*_
┃✠ ➺ _${usedPrefix}banchat_
┃✠ ➺ _${usedPrefix}unbanchat_
┃✠ ➺ _${usedPrefix}banuser *@tag*_
┃✠ ➺ _${usedPrefix}unbanuser *@tag*_
┃✠ ➺ _${usedPrefix}admins *texto*_
┃✠ ➺ _${usedPrefix}invocar *texto*_
┃✠ ➺ _${usedPrefix}tagall *texto*_
┃✠ ➺ _${usedPrefix}hidetag *texto*_
┃✠ ➺ _${usedPrefix}infogrupo | infogroup_
┃✠ ➺ _${usedPrefix}grupotiempo | grouptime *Cantidad*_
┃✠ ➺ _${usedPrefix}advertencia *@tag*_
┃✠ ➺ _${usedPrefix}deladvertencia *@tag*_
┃✠ ➺ _${usedPrefix}delwarn *@tag*_
┃✠ ➺ _${usedPrefix}crearvoto | startvoto *texto*_
┃✠ ➺ _${usedPrefix}sivotar | upvote_
┃✠ ➺ _${usedPrefix}novotar | devote_
┃✠ ➺ _${usedPrefix}vervotos | cekvoto_
┃✠ ➺ _${usedPrefix}delvoto | deletevoto_
┃✠ ➺ _${usedPrefix}enlace | link_
┃✠ ➺ _${usedPrefix}newnombre | nuevonombre *texto*_
┃✠ ➺ _${usedPrefix}newdesc | descripcion *texto*_
┃✠ ➺ _${usedPrefix}setwelcome | bienvenida *texto*_
┃✠ ➺ _${usedPrefix}setbye | despedida *texto*_
┃✠ ➺ _${usedPrefix}nuevoenlace | resetlink_
┃✠ ➺ _${usedPrefix}on_
┃✠ ➺ _${usedPrefix}off_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ ❤ ℙ𝔸ℝ𝔼𝕁𝔸𝕊 ❤ ]━━⬣*
┃ *Declarate con alguien*
┃ *para que sean Parejas!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💖➺ _${usedPrefix}listaparejas | listship_
┃💖➺ _${usedPrefix}mipareja | mylove_
┃💖➺ _${usedPrefix}pareja | couple *@tag*_
┃💖➺ _${usedPrefix}aceptar | accept *@tag*_
┃💖➺ _${usedPrefix}rechazar | decline *@tag*_
┃💖➺ _${usedPrefix}terminar | finish *@tag*_
*╰━━━━━━━━━━━━⬣*

*╭━[✔ 𝗩𝗢𝗧𝗔𝗖𝗜𝗢𝗡𝗘𝗦 𝗘𝗡 𝗚𝗥𝗨𝗣𝗢𝗦 ✔]━⬣*
┃ *Ahora puedes hacer*
┃ *Votaciones en Grupos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃📧➺ _${usedPrefix}crearvoto | startvoto *texto*_
┃📧➺ _${usedPrefix}sivotar | upvote_
┃📧➺ _${usedPrefix}novotar | devote_
┃📧➺ _${usedPrefix}vervotos | cekvoto_
┃📧➺ _${usedPrefix}delvoto | deletevoto_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ 🔞 ℂ𝕆ℕ𝕋𝔼ℕ𝕀𝔻𝕆 🔞 ]━━⬣*
┃ *Visita el Menú de Comandos*
┃ *Para Adultos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔞➺ _${usedPrefix}hornymenu_
*╰━━━━━━━━━━━━⬣*

*╭━[ ➤ ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊 ➤ ]━⬣*
┃ *Convierte sticker en imagen!!*
┃ *Crea enlace de archivos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃☢➺ _${usedPrefix}toimg | img | jpg *sticker*_
┃☢➺ _${usedPrefix}toanime | jadianime *foto*_
┃☢➺ _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
┃☢➺ _${usedPrefix}tovn | vn *video o audio*_
┃☢➺ _${usedPrefix}tovideo *audio*_
┃☢➺ _${usedPrefix}tourl *video, imagen*_
┃☢➺ _${usedPrefix}toenlace  *video, imagen o audio*_
┃☢➺ _${usedPrefix}tts es *texto*_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ ✡ 𝕃𝕆𝔾𝕆𝕊 ✡ ]━━⬣*
┃ *Crea Logos o personaliza*
┃ *la información del Logo!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔆 _${usedPrefix}logos *efecto texto*_
┃🌅 _${usedPrefix}menulogos2_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ ✎ 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 ✎ ]━━⬣*
┃✎ _${usedPrefix}simpcard *@tag*_
┃✎ _${usedPrefix}hornycard *@tag*_
┃✎ _${usedPrefix}lolice *@tag*_
┃✎ _${usedPrefix}ytcomment *texto*_
┃✎ _${usedPrefix}itssostupid_
┃✎ _${usedPrefix}pixelar_
┃✎ _${usedPrefix}blur_
*╰━━━━━━━━━━━━⬣*

*╭━[𝄡 𝗥𝗔𝗡𝗗𝗢𝗠 | 𝗔𝗡𝗜𝗠𝗘 𝄡]━⬣*
┃𝄡 _${usedPrefix}chica_
┃𝄡 _${usedPrefix}chico_
┃𝄡 _${usedPrefix}cristianoronaldo_
┃𝄡 _${usedPrefix}messi_
┃𝄡 _${usedPrefix}meme_
┃𝄡 _${usedPrefix}meme2_
┃𝄡 _${usedPrefix}itzy_
┃𝄡 _${usedPrefix}blackpink_
┃𝄡 _${usedPrefix}kpop *blackpink : exo : bts*_
┃𝄡 _${usedPrefix}lolivid_
┃𝄡 _${usedPrefix}loli_
┃𝄡 _${usedPrefix}navidad_
┃𝄡 _${usedPrefix}ppcouple_
┃𝄡 _${usedPrefix}neko_
┃𝄡 _${usedPrefix}waifu_
┃𝄡 _${usedPrefix}akira_
┃𝄡 _${usedPrefix}akiyama_
┃𝄡 _${usedPrefix}anna_
┃𝄡 _${usedPrefix}asuna_
┃𝄡 _${usedPrefix}ayuzawa_
┃𝄡 _${usedPrefix}boruto_
┃𝄡 _${usedPrefix}chiho_
┃𝄡 _${usedPrefix}chitoge_
┃𝄡 _${usedPrefix}deidara_
┃𝄡 _${usedPrefix}erza_
┃𝄡 _${usedPrefix}elaina_
┃𝄡 _${usedPrefix}eba_
┃𝄡 _${usedPrefix}emilia_
┃𝄡 _${usedPrefix}hestia_
┃𝄡 _${usedPrefix}hinata_
┃𝄡 _${usedPrefix}inori_
┃𝄡 _${usedPrefix}isuzu_
┃𝄡 _${usedPrefix}itachi_
┃𝄡 _${usedPrefix}itori_
┃𝄡 _${usedPrefix}kaga_
┃𝄡 _${usedPrefix}kagura_
┃𝄡 _${usedPrefix}kaori_
┃𝄡 _${usedPrefix}keneki_
┃𝄡 _${usedPrefix}kotori_
┃𝄡 _${usedPrefix}kurumi_
┃𝄡 _${usedPrefix}madara_
┃𝄡 _${usedPrefix}mikasa_
┃𝄡 _${usedPrefix}miku_
┃𝄡 _${usedPrefix}minato_
┃𝄡 _${usedPrefix}naruto_
┃𝄡 _${usedPrefix}nezuko_
┃𝄡 _${usedPrefix}sagiri_
┃𝄡 _${usedPrefix}sasuke_
┃𝄡 _${usedPrefix}sakura_
┃𝄡 _${usedPrefix}cosplay_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝗠𝗢𝗗𝗜𝗙𝗜𝗖𝗔𝗥 𝗔𝗨𝗗𝗜𝗢 ]━⬣*
┃ *Realiza Modificaciones*
┃ *al Audio o Nota de Voz!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎼 _${usedPrefix}bass_
┃🎼 _${usedPrefix}blown_
┃🎼 _${usedPrefix}deep_
┃🎼 _${usedPrefix}earrape_
┃🎼 _${usedPrefix}fast_
┃🎼 _${usedPrefix}fat_
┃🎼 _${usedPrefix}nightcore_
┃🎼 _${usedPrefix}reverse_
┃🎼 _${usedPrefix}robot_
┃🎼 _${usedPrefix}slow_
┃🎼 _${usedPrefix}smooth_
┃🎼 _${usedPrefix}tupai_
*╰━━━━━━━━━━━━⬣*

*╭━━[ 𒁈 𝔹𝕌́𝕊ℚ𝕌𝔼𝔻𝔸𝕊 𒁈 ]━━⬣*
┃ *Busca lo que quieres con HamilyBot!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃𒁈➺ _${usedPrefix}animeinfo *texto*_
┃𒁈➺ _${usedPrefix}mangainfo *texto*_
┃𒁈➺ _${usedPrefix}google *texto*_
┃𒁈➺ _${usedPrefix}googlelyrics *texto*_
┃𒁈➺ _${usedPrefix}letra | lirik *texto*_
┃𒁈➺ _${usedPrefix}ytsearch | yts *texto*_
┃𒁈➺ _${usedPrefix}wiki | wikipedia *texto*_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ 𝔸𝕌𝔻𝕀𝕆𝕊 🔊 ]━━⬣*
┃ *Visita el Menú de Audios!!*
┃ *Disfruta de una Gran Variedad*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➫♬ _${usedPrefix}audios_
*╰━━━━━━━━━━━━⬣*

*╭━━[ ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 ღ ]━━⬣*
┃ღ _${usedPrefix}afk *motivo*_
┃ღ _${usedPrefix}acortar *url*_
┃ღ _${usedPrefix}calc *operacion math*_
┃ღ _${usedPrefix}del *respondre a mensaje del Bot*_
┃ღ _${usedPrefix}qrcode *texto*_
┃ღ _${usedPrefix}readmore *texto1|texto2*_
┃ღ _${usedPrefix}spamwa *numero|texto|cantidad*_
┃ღ _${usedPrefix}styletext *texto*_
┃ღ _${usedPrefix}traducir *texto*_
┃ღ➺ _${usedPrefix}morse codificar *texto*_
┃ღ➺ _${usedPrefix}morse decodificar *morse*_
┃ღ➺ _${usedPrefix}encuesta | poll *Motivo*_
┃ღ➺ _${usedPrefix}horario_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ 𝔽𝕌ℕℂ𝕀𝕆́ℕ ℝℙ𝔾 ]━━⬣*
┃ *Compra, Adquiere Recuersos*
┃ *Mejora Tú Nivel y Rango!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ _${usedPrefix}botemporal *enlace* *cantidad*_
┃✪ _${usedPrefix}addbot *enlace* *cantidad*_
┃☭➺ _${usedPrefix}pase premium_
┃☭➺ _${usedPrefix}pass premium_
┃☭➺ _${usedPrefix}listapremium | listprem_
┃☭➺ _${usedPrefix}transfer *tipo cantidad @tag*_
┃☭➺ _${usedPrefix}dar *tipo cantidad @tag*_
┃☭➺ _${usedPrefix}enviar *tipo cantidad @tag*_
┃☭➺ _${usedPrefix}balance_
┃☭➺ _${usedPrefix}cartera | wallet_
┃☭➺ _${usedPrefix}experiencia | exp_
┃☭➺ _${usedPrefix}top | lb | leaderboard_
┃☭➺ _${usedPrefix}nivel | level | lvl_
┃☭➺ _${usedPrefix}rol | rango_
┃☭➺ _${usedPrefix}inventario | inventory_
┃☭➺ _${usedPrefix}aventura | adventure_
┃☭➺ _${usedPrefix}caza | cazar | hunt_
┃☭➺ _${usedPrefix}pescar | fishing_
┃☭➺ _${usedPrefix}animales_
┃☭➺ _${usedPrefix}alimentos_
┃☭➺ _${usedPrefix}curar | heal_
┃☭➺ _${usedPrefix}buy_
┃☭➺ _${usedPrefix}sell_
┃☭➺ _${usedPrefix}verificar | registrar_
┃☭➺ _${usedPrefix}perfil | profile_
┃☭➺ _${usedPrefix}myns_
┃☭➺ _${usedPrefix}unreg *numero de serie*_
┃☭➺ _${usedPrefix}minardiamantes | minargemas_
┃☭➺ _${usedPrefix}minargatacoins | minarcoins_
┃☭➺ _${usedPrefix}minarexperiencia | minarexp_
┃☭➺ _${usedPrefix}minar *:* minar2 *:* minar3_
┃☭➺ _${usedPrefix}reclamar | regalo | claim_
┃☭➺ _${usedPrefix}cadahora | hourly_
┃☭➺ _${usedPrefix}cadasemana | semanal | weekly_
┃☭➺ _${usedPrefix}cadames | mes | monthly_
┃☭➺ _${usedPrefix}cofre | abrircofre | coffer_
┃☭➺ _${usedPrefix}trabajar | work_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ 𝗧𝗢𝗣 𝗘𝗡 𝗛𝗔𝗠𝗜𝗟𝗬𝗕𝗢𝗧 ]━⬣*
┃ *Averigua en que Top te encuentras!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🏆➺ _${usedPrefix}top | lb | leaderboard_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 𝕐 𝔽𝕀𝕃𝕋ℝ𝕆𝕊 ]━⬣*
┃ *Realiza stickers o crea*
┃ *stickers con filtros!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✠ _${usedPrefix}sticker | s *imagen o video*_
┃✠ _${usedPrefix}sticker | s *url de tipo jpg*_
┃✠ _${usedPrefix}emojimix *😺+😆*_
┃✠ _${usedPrefix}scircle | círculo *imagen*_
┃✠ _${usedPrefix}semoji | emoji *tipo emoji*_
┃✠ _${usedPrefix}attp *texto*_
┃✠ _${usedPrefix}attp2 *texto*_
┃✠ _${usedPrefix}ttp *texto*_
┃✠ _${usedPrefix}ttp2 *texto*_
┃✠ _${usedPrefix}ttp3 *texto*_
┃✠ _${usedPrefix}ttp4 *texto*_
┃✠ _${usedPrefix}ttp5 *texto*_
┃✠ _${usedPrefix}ttp6 *texto*_
┃✠ _${usedPrefix}dado_
┃✠ _${usedPrefix}stickermarker *efecto : responder a imagen*_
┃✠ _${usedPrefix}stickerfilter *efecto : responder a imagen*_
┃✠ _${usedPrefix}cs *:* cs2_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝗠𝗢𝗗𝗜𝗙𝗜𝗖𝗔𝗥 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 ]━⬣*
┃ *Personaliza la información del Sticker!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✠ _${usedPrefix}wm *packname|author*_
┃✠ _${usedPrefix}wm *texto1|texto2*_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 𝔻𝕀ℕ𝔸́𝕄𝕀ℂ𝕆𝕊 ]━⬣*
┃ *Realiza acciones con Stickers*
┃ *Etiquetando a alguien!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✠ _${usedPrefix}palmaditas | pat *@tag*_
┃✠ _${usedPrefix}bofetada | slap *@tag*_
┃✠ _${usedPrefix}golpear *@tag*_
┃✠ _${usedPrefix}besar | kiss *@tag*_
┃✠ _${usedPrefix}alimentar | food *@tag*_
*╰━━━━━━━━━━━━⬣*

*╭━[𝗠𝗘𝗡𝗨 𝗣𝗔𝗥𝗔 𝗣𝗥𝗢𝗣𝗜𝗘𝗧𝗔𝗥𝗜𝗢/𝗔]━⬣*
┃ *Comandos solo para Propietario/a!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⛃ _${usedPrefix}join *enlace*_
┃⛃ _${usedPrefix}unete *enlace*_
┃⛃➺ _${usedPrefix}dardiamantes *cantidad*_
┃⛃➺ _${usedPrefix}darxp *cantidad*_
┃⛃➺ _${usedPrefix}dargatacoins *cantidad*_
┃⛃➺ _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
┃⛃➺ _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
┃⛃➺ _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
┃⛃➺ _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
┃⛃➺ _${usedPrefix}idioma | language_
┃⛃➺ _${usedPrefix}cajafuerte_
┃⛃➺ _${usedPrefix}comunicar | broadcastall | bc *texto*_
┃⛃➺ _${usedPrefix}broadcastchats | bcc *texto*_
┃⛃➺ _${usedPrefix}comunicarpv *texto*_
┃⛃➺ _${usedPrefix}broadcastgc *texto*_
┃⛃➺ _${usedPrefix}comunicargrupos *texto*_
┃⛃➺ _${usedPrefix}borrartmp | cleartmp_
┃⛃➺ _${usedPrefix}delexp *@tag*_
┃⛃➺ _${usedPrefix}delgatacoins *@tag*_
┃⛃➺ _${usedPrefix}deldiamantes *@tag*_
┃⛃➺ _${usedPrefix}reiniciar | restart_
┃⛃➺ _${usedPrefix}ctualizar | update_
┃⛃➺ _${usedPrefix}addprem | +prem *@tag*_
┃⛃➺ _${usedPrefix}delprem | -prem *@tag*_
┃⛃➺ _${usedPrefix}listapremium | listprem_
┃⛃➺ _${usedPrefix}añadirdiamantes *@tag cantidad*_
┃⛃➺ _${usedPrefix}añadirxp *@tag cantidad*_
┃⛃➺ _${usedPrefix}añadirgatacoins *@tag cantidad*_
*╰━━━━━━━━━━━━⬣*`.trim()
await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak)
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  

import TicTacToe from '../lib/tictactoe.js' 
let handler = async (m, { conn, usedPrefix, command, text }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `${lenguajeGB['smsAvisoAG']()}𝗧𝗢𝗗𝗔𝗩𝗜𝗔 𝗔𝗟𝗚𝗨𝗜𝗘𝗡 𝗘𝗦𝗧𝗔 𝗝𝗨𝗚𝗔𝗡𝗗𝗢 𝗘𝗡 𝗟𝗔 𝗦𝗔𝗟𝗔 𝗦𝗜 𝗤𝗨𝗜𝗘𝗥𝗘𝗦 𝗔𝗕𝗔𝗡𝗗𝗢𝗡𝗔𝗥 𝗘𝗦𝗖𝗥𝗜𝗕𝗔 *salir*\n𝗧𝗔𝗠𝗕𝗜𝗘𝗡 𝗣𝗨𝗘𝗗𝗘𝗡 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥 𝗟𝗔 𝗦𝗔𝗟𝗔 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 *${usedPrefix}delttt*\n\n𝗦𝗢𝗠𝗘𝗢𝗡𝗘 𝗜𝗦 𝗦𝗧𝗜𝗟𝗟 𝗣𝗟𝗔𝗬𝗜𝗡𝗚 𝗜𝗡 𝗧𝗛𝗘 𝗥𝗢𝗢𝗠 𝗜𝗙 𝗬𝗢𝗨 𝗪𝗔𝗡𝗧 𝗧𝗢 𝗟𝗘𝗔𝗩𝗘 𝗪𝗥𝗜𝗧𝗘 𝗦𝗢𝗠𝗘𝗧𝗛𝗜𝗡𝗚 *out*\n𝗬𝗢𝗨 𝗖𝗔𝗡 𝗔𝗟𝗦𝗢 𝗗𝗘𝗟𝗘𝗧𝗘 𝗧𝗛𝗘 𝗥𝗢𝗢𝗠 𝗨𝗦𝗜𝗡𝗚 𝗧𝗛𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 *${usedPrefix}delttt*`
if (!text) throw `${lenguajeGB['smsAvisoFG']()}𝗗𝗘𝗕𝗘 𝗗𝗘 𝗔𝗚𝗥𝗘𝗚𝗔𝗥 𝗨𝗡 𝗡𝗢𝗠𝗕𝗥𝗘 𝗔 𝗟𝗔 𝗦𝗔𝗟𝗔\n𝗘𝗝𝗘𝗠𝗣𝗟𝗢\n*${usedPrefix + command} Sala HamilyBot*\n\n𝗬𝗢𝗨 𝗠𝗨𝗦𝗧 𝗔𝗗𝗗 𝗔 𝗡𝗔𝗠𝗘 𝗧𝗢 𝗧𝗛𝗘 𝗥𝗢𝗢𝗠\n𝗘𝗫𝗔𝗠𝗣𝗟𝗘\n*${usedPrefix + command} Room HamilyBot*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true)) 
if (room) {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}ᴀʟɢᴜɪᴇɴ ꜱᴇ ʜᴀ ᴜɴɪᴅᴏ ᴀ ʟᴀ ꜱᴀʟᴀ *${text}*\nʏᴀ ᴘᴜᴇᴅᴇɴ ᴊᴜɢᴀʀ!! 𖣐\n\nꜱᴏᴍᴇᴏɴᴇ ʜᴀꜱ ᴊᴏɪɴᴇᴅ ᴛʜᴇ ʀᴏᴏᴍ *${text}*\nʏᴏᴜ ᴄᴀɴ ᴘʟᴀʏ ɴᴏᴡ!! 👀`, fkontak, m)
//await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()}ᴀʟɢᴜɪᴇɴ ꜱᴇ ʜᴀ ᴜɴɪᴅᴏ ᴀ ʟᴀ ꜱᴀʟᴀ *${text}*\nʏᴀ ᴘᴜᴇᴅᴇɴ ᴊᴜɢᴀʀ!! 𖣐\n\nꜱᴏᴍᴇᴏɴᴇ ʜᴀꜱ ᴊᴏɪɴᴇᴅ ᴛʜᴇ ʀᴏᴏᴍ *${text}*\nʏᴏᴜ ᴄᴀɴ ᴘʟᴀʏ ɴᴏᴡ!! 👀`, wm, null, [['𝙌𝙪𝙚 𝙂𝙖𝙣𝙚 𝙚𝙡 𝙈𝙚𝙟𝙤𝙧 🤝', '👻'] ], fkontak, m)
await conn.reply(m.chat, `${lenguajeGB['smsAvisoRG']()}⭕️ *Clásico Juego del Hami o 3 en raya* ❌\n\n*¿Cómo jugar?*\n_Responde al Juego con un Número, el mensaje debe contener la posiscion en la que quieras estar (1,2,3,4,5,6,7,8,9)_\n\n*How to play?*\n_Answer the Game with a Number, the message must contain the position you want to be in (1,2,3,4,5,6,7,8,9)_`, fkontak, m)
//await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoRG']()}⭕️ *Clásico Juego del Hami o 3 en raya* ❌\n\n*¿Cómo jugar?*\n_Responde al Juego con un Número, el mensaje debe contener la posiscion en la que quieras estar (1,2,3,4,5,6,7,8,9)_\n\n*How to play?*\n_Answer the Game with a Number, the message must contain the position you want to be in (1,2,3,4,5,6,7,8,9)_`, wm, null, [['😽 𝙊𝙆 𝙂𝙍𝘼𝘾𝙄𝘼𝙎', 'ok'] ], fkontak, m)

room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❎',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]})
let str = `💖 J̷U̷E̷G̷O̷ ̷T̷R̷E̷S̷ ̷E̷N̷ ̷R̷A̷Y̷A̷ | G̷A̷M̷E̷
🫂 𝙅𝙐𝙂𝘼𝘿𝙊𝙍𝙀𝙎 *:* 𝙋𝙇𝘼𝙔𝙀𝙍𝙎
*┈┈┈┈┈┈┈┈┈*
❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}
*┈┈┈┈┈┈┈┈┈*
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*┈┈┈┈┈┈┈┈┈*
𝙏𝙐𝙍𝙉𝙊 𝘿𝙀 *:* 𝙏𝙐𝙍𝙉 𝙊𝙁 
@${room.game.currentTurn.split('@')[0]}
`.trim()

if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: fkontak, m })
        
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
        
if (text) room.name = text     
let imgplay = `https://img.freepik.com/vector-premium/juego-tres-raya-icono-contorno-lineal-neon_7280-2422.jpg`
conn.sendMessage(m.chat, { image: { url: imgplay }, caption: `𖣐 𝙅𝙐𝙀𝙂𝙊 𝙏𝙍𝙀𝙎 𝙀𝙉 𝙍𝘼𝙔𝘼 | 𝙂𝘼𝙈𝙀

ᴇꜱᴘᴇʀᴀɴᴅᴏ ᴀʟ ꜱᴇɢᴜɴᴅᴏ ᴊᴜɢᴀᴅᴏʀ ᴘᴜᴇᴅᴇɴ ɪɴɢʀᴇꜱᴀʀ ᴜꜱᴀɴᴅᴏ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ:
*${usedPrefix + command} ${text}*

ꜱɪ Qᴜɪᴇʀᴇꜱ ᴀʙᴀɴᴅᴏɴᴀʀ ʟᴀ ꜱᴀʟᴀ ᴜꜱᴀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ *${usedPrefix}delttt*

ᴡᴀɪᴛɪɴɢ ꜰᴏʀ ᴛʜᴇ ꜱᴇᴄᴏɴᴅ ᴘʟᴀʏᴇʀ ʏᴏᴜ ᴄᴀɴ ᴇɴᴛᴇʀ ᴡɪᴛʜ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ ᴏʀ ᴜꜱɪɴɢ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ
*${usedPrefix + command} ${text}*

ɪꜰ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ʟᴇᴀᴠᴇ ᴛʜᴇ ʀᴏᴏᴍ ᴜꜱᴇ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ *${usedPrefix}delttt*` }, { mentions: conn.parseMention(text), quoted: fkontak })

handler.command = /^(tictactoe|ttc|ttt|xo)$/i
export default handler

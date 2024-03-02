let handler = async (m, { conn, text }) => {
let id = m.chat
conn.math = conn.math ? conn.math : {}
if (id in conn.math) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
m.reply('🙄 𝗡𝗢 𝗛𝗔𝗚𝗔𝗦 𝗧𝗥𝗔𝗠𝗣𝗔!!\n𝗗𝗢 𝗡𝗢𝗧 𝗖𝗛𝗘𝗔𝗧!!')
}
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
m.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) throw `${mg}𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐔𝐍𝐀 𝐎𝐏𝐄𝐑𝐀𝐂𝐈Ó𝐍 𝐌𝐀𝐓𝐄𝐌Á𝐓𝐈𝐂𝐀 𝐏𝐀𝐑𝐀 𝐂𝐀𝐋𝐂𝐔𝐋𝐀𝐑 𝐄𝐋 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎/n/n𝐄𝐍𝐓𝐄𝐑 𝐀 𝐌𝐀𝐓𝐇𝐄𝐌𝐀𝐓𝐈𝐂𝐀𝐋 𝐎𝐏𝐄𝐑𝐀𝐓𝐈𝐎𝐍 𝐓𝐎 𝐂𝐀𝐋𝐂𝐔𝐋𝐀𝐓𝐄 𝐓𝐇𝐄 𝐑𝐄𝐒𝐔𝐋𝐓`
throw `${fg}𝐒Ó𝐋𝐎 𝐒𝐄 𝐀𝐃𝐌𝐈𝐓𝐄𝐍 𝐍Ú𝐌𝐄𝐑𝐎𝐒 𝐘 𝐒Í𝐌𝐁𝐎𝐋𝐎𝐒, 𝐎𝐍𝐋𝐘 𝐍𝐔𝐌𝐁𝐄𝐑𝐒 𝐀𝐍𝐃 𝐒𝐘𝐌𝐁𝐎𝐋𝐒 𝐀𝐑𝐄 𝐀𝐋𝐋𝐎𝐖𝐄𝐃 -, +, * , /, ×, ÷, π, e, (, )*`
}}
handler.help = ['calc <expression>']
handler.tags = ['tools']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5
export default handler

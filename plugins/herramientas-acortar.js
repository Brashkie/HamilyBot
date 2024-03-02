import axios from "axios"
import fetch from 'node-fetch'
let handler = async(m, { conn, text, xteamkey }) => {
if (!text) throw `${mg}𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐔𝐍 𝐄𝐍𝐋𝐀𝐂𝐄 𝐏𝐀𝐑𝐀 𝐀𝐂𝐎𝐑𝐓𝐀𝐑\n\n𝐄𝐍𝐓𝐄𝐑 𝐀 𝐋𝐈𝐍𝐊 𝐓𝐎 𝐒𝐇𝐎𝐑𝐓𝐄𝐍`
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
let hasil = `✔ 𝐒𝐄 𝐑𝐄𝐀𝐋𝐈𝐙𝐎 𝐂𝐎𝐍 É𝐗𝐈𝐓𝐎\n𝙄𝙏 𝙒𝘼𝙎 𝙎𝙐𝘾𝘾𝙀𝙎𝙎𝙁𝙐𝙇\n\n𝐄𝐍𝐋𝐀𝐂𝐄 𝐃𝐄 𝐀𝐍𝐓𝐄𝐒 | 𝐁𝐄𝐅𝐎𝐑𝐄 𝐋𝐈𝐍𝐊\n*${text}*\n\n𝐄𝐍𝐋𝐀𝐂𝐄 𝐃𝐄 𝐀𝐇𝐎𝐑𝐀 | 𝐋𝐈𝐍𝐊 𝐍𝐎𝐖\n*${json.result}*`.trim()   
m.reply(hasil)
}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.fail = null
export default handler

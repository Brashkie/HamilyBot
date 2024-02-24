import fs from 'fs'
import acrcloud from 'acrcloud'
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})

let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) { if ((q.msg || q).seconds > 20) return m.reply('╰⊱⚠️⊱ *A̷D̷V̷E̷R̷T̷E̷N̷C̷I̷A̷ | W̷A̷R̷N̷I̷N̷G̷ * ⊱⚠️⊱╮\n\nEl archivo que estás intentando cargar es demasiado grande. Te sugerimos que recortes el archivo grande a uno más pequeño, aproximadamente de 10 a 20 segundos. Los datos de audio de esta duración son suficientes para su identificación')
await conn.reply(m.chat, wait, m)
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `
𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢 𝗗𝗘 𝗟𝗔 𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔𝗦 

• 𒁈 𝗧𝗜𝗧𝗨𝗟𝗢: ${title}
• 𒁈 𝗔𝗥𝗧𝗜𝗦𝗧𝗔: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'No encontrado'}
• 𒁈 𝗔𝗟𝗕𝗨𝗠: ${album.name || 'No encontrado'}
• 𒁈 𝗚𝗘𝗡𝗘𝗥𝗢: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'No encontrado'}
• 𒁈 𝗙𝗘𝗖𝗛𝗔 𝗗𝗘 𝗟𝗔𝗡𝗭𝗔𝗠𝗜𝗘𝗡𝗧𝗢: ${release_date || 'No encontrado'}
`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
m.reply(txt)
} else throw '╰⊱❗️⊱ *𝗟𝗢 𝗣𝗨𝗦𝗢 𝗠𝗔𝗟 :𝗩 | 𝗛𝗘 𝗣𝗨𝗧 𝗜𝗧 𝗪𝗥𝗢𝗡𝗚 :𝗩* ⊱❗️⊱╮\n\n𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔 𝗨𝗡 𝗔𝗨𝗗𝗜𝗢 𝗢 𝗩𝗜𝗗𝗘𝗢'
}
handler.command = /^quemusica|quemusicaes|whatmusic$/i
export default handler

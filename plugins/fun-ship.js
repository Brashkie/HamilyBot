let handler = async (m, { conn, command, text }) => {
if (!text) throw `╰⊱❗️⊱ *𝗟𝗢 𝗨𝗦𝗢 𝗠𝗔𝗟 | 𝗨𝗦𝗘𝗗 𝗜𝗧 𝗪𝗥𝗢𝗡𝗚* ⊱❗️⊱╮\n\nᴇꜱᴄʀɪʙᴇ ᴇʟ ɴᴏᴍʙʀᴇ ᴅᴇ ᴅᴏꜱ ᴘᴇʀꜱᴏɴᴀꜱ ᴘᴀʀᴀ ᴄᴀʟᴄᴜʟᴀʀ ꜱᴜ ᴀᴍᴏʀ`
let [text1, ...text2] = text.split(' ')
text2 = (text2 || []).join(' ')
if (!text2) throw `⚠️ F̷A̷L̷T̷A̷ ̷E̷L̷ ̷N̷O̷M̷B̷R̷E̷ ̷D̷E̷ ̷L̷A̷ ̷S̷E̷G̷U̷N̷D̷A̷ ̷P̷E̷R̷S̷O̷N̷A̷`
let love = `_🫶 *${text1}* tu oportunidad de enamorarte de *${text2}* es de *${Math.floor(Math.random() * 100)}%* 👩🏻‍❤️‍👨🏻_ 

`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })
}
handler.help = ['ship']
handler.tags = ['fun']
handler.command = /^ship|shippear$/i
export default handler

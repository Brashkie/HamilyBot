let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `${ag}sɪ ɴᴏ ᴇs sᴜʙ ʙᴏᴛ, ᴄᴏᴍᴜɴɪǫᴜᴇsᴇ ᴀʟ ᴄʀᴇᴀᴅᴏʀ ᴏ ɴᴜᴍᴇʀᴏ ᴘʀɪɴᴄɪᴘᴀʟ ᴘᴀʀᴀ sᴇʀ ʙᴏᴛ\n\nɪғ ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴀ sᴜʙ ʙᴏᴛ, ᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴄʀᴇᴀᴛᴏʀ ᴏʀ ᴍᴀɪɴ ɴᴜᴍʙᴇʀ ᴛᴏ ʙᴇ ᴀ ʙᴏᴛ`, m)
else {
await conn.reply(m.chat, `${rg}𝗨𝗦𝗧𝗘𝗗 𝗛𝗔 𝗖𝗘𝗥𝗥𝗔𝗗𝗢 𝗦𝗘𝗦𝗜𝗢𝗡 𝗖𝗢𝗡𝗠𝗜𝗚𝗢 :O\n\n𝗬𝗢𝗨 𝗛𝗔𝗩𝗘 𝗟𝗢𝗚𝗘𝗗 𝗢𝗨𝗧 𝗪𝗜𝗧𝗛 𝗠𝗘 :𝟬`, m)
conn.ws.close()}}
handler.command = /^(berhenti|stop|detener)$/i
handler.owner = true  
handler.fail = null
export default handler

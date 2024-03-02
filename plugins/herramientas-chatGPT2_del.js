let handler = async (m, { usedPrefix }) => {
try {
delete global.chatgpt.data.users[m.sender]  
m.reply(`*[❗] ꜱᴇ ᴇʟɪᴍɪɴᴏ ᴄᴏɴ Éxɪᴛᴏ ᴇʟ ʜɪꜱᴛᴏʀɪᴀʟ ᴅᴇ ᴍᴇɴꜱᴀᴊᴇꜱ ᴇɴᴛʀᴇ ᴜꜱᴛᴇᴅ ʏ ᴄʜᴀᴛɢᴘᴛ (ɪᴀ) ʀᴇᴄᴜᴇʀᴅᴇ Qᴜᴇ ᴘᴜᴇᴅᴇ ᴜᴛɪʟɪᴢᴀʀ ᴇꜱᴛᴀ ᴄᴏᴍᴀɴᴅᴏ ᴛᴇɴɢᴀ ᴇɴ ᴄᴜᴇɴᴛᴀ ᴇʀʀᴀʀ ᴇɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ${usedPrefix}ia2*`)    
} catch (error1) {   
console.log(error1)
throw `𖣯 ${lenguajeGB['smsAvisoFG']()}𝗘𝗥𝗥𝗢𝗥, 𝗩𝗨𝗘𝗟𝗩𝗔 𝗔 𝗜𝗡𝗧𝗘𝗡𝗧𝗔𝗥𝗟𝗢 𖣯`   
}} 
handler.command = ['delchatgpt']
export default handler

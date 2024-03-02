import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 𒆙', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '𖣐𝗦𝘂𝗽𝗲𝗿 𝗛𝗮𝗺𝗶𝗹𝘆𝗕𝗼𝘁 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
let texto = `ʀᴇꜱᴘᴏɴᴅᴇ ᴀʟ ᴍᴇɴꜱᴀᴊᴇ ᴅᴇ ᴀʟɢᴜɪᴇɴ ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ᴇʟɪᴍɪɴᴀʀ ᴇʟ ᴍᴇɴꜱᴀᴊᴇ Qᴜᴇ Qᴜɪᴇʀᴇꜱ ᴇʟɪᴍɪɴᴀʀ\n\nʀᴇᴘʟʏ ᴛᴏ ꜱᴏᴍᴇᴏɴᴇ'ꜱ ᴍᴇꜱꜱᴀɢᴇ ꜱᴏ ʏᴏᴜ ᴄᴀɴ ᴅᴇʟᴇᴛᴇ ᴛʜᴇ ᴍᴇꜱꜱᴀɢᴇ`
	
if (!m.quoted) return await conn.sendButton(m.chat, wm, texto, img5, [['𝗠 𝗘 𝗡 𝗨 𒆙', '/menu']], m, dos.getRandom())
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
 } catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
}
handler.help = ['delete']
handler.tags = ['group']
handler.command = /^eliminar|del(ete)?$/i

handler.group = false
handler.admin = true
handler.botAdmin = true

export default handler

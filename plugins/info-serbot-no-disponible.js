import fs from 'fs'
//import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let pp = 'https://i.imgur.com/WwxBm8o.jpg' //'./media/menus/Menu1.jpg'
//let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//try {
//pp = await conn.getProfilePicture(who)
//} catch (e) {

//} finally { }
  await m.reply(`╰⊱⚠️⊱ *A̷D̷V̷E̷R̷T̷E̷N̷C̷I̷A̷ | W̷A̷R̷N̷I̷N̷G̷* ⊱⚠️⊱╮`)
  //conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)
let text = `
*Las funciones | The functions #jadibot #bots #serbot #subbot #getcode. No estan disponibles en | Are not available in* ${gt}`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝗛𝗮𝗺𝗶𝗹𝘆𝗕𝗼𝘁 | 𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗗𝗶𝗼𝘀𒅒',
body: 'Super Bot WhatsApp',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `${yt}`}}})  
  
  let info = `*Ya que no esta disponible el #serbot, Ahora podrás unir el Número de este Bot a tú Grupo de manera Temporal usando el comando*\n*#botemporal o #bottemporal*
  `.trim()
  
  await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝒞𝓊𝑒𝓃𝓉𝒶𝓈 𝒪𝒻𝒾𝒸𝒾𝒶𝓁𝑒𝓈 | 𝒜𝒸𝒸𝑜𝓊𝓃𝓉𝓈 ✔', '/cuentasgb'],
['𝒢𝓇𝓊𝓅𝑜𝓈 𝑜𝒻𝒾𝒸𝒾𝒶𝓁𝑒𝓈 | 𝒢𝓇𝑜𝓊𝓅𝓈 ✔', '.grupos'],
['𝗩𝗼𝗹𝘃𝗲𝗿 𝗮𝗹 𝗺𝗲𝗻𝘂 | 𝗕𝗮𝗰𝗸 𝘁𝗼 𝗺𝗲𝗻𝘂 ✔', '/menu']
], m,)
  
  //await conn.sendButton(m.chat, `Infórmate sobre las Novedades y recuerda tener la última versión.\nFind out about what's new and remember to have the latest version.`, author, url, [['𖤗 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𖤗', /${command}], ['𖤗 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 2 𖤗', /${command}]], m)
}
handler.command = /^(yafunka:3)/i
export default handler

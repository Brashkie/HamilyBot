let handler = async (m, { conn, text, args, participants, usedPrefix, command }) => {	
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let a = []
let b = text.split('|')

if (!b[0]) return conn.reply(m.chat, `${mg}ᴜꜱᴇ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ᴅᴇ ʟᴀ ꜱɪɢᴜɪᴇɴᴛᴇ ꜰᴏʀᴍᴀ\n*${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....*\n\nᴜꜱᴇ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ᴀꜱ ꜰᴏʟʟᴏᴡꜱ\n*${usedPrefix + command} Survey Reason|text1|text2|text3....*`, fkontak, m) 
if (!b[1]) return conn.reply(m.chat, `${mg}PARA CREAR OPCIONES EN LA ENCUESTA *" | "*\n*${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....*\n\nᴛᴏ ᴄʀᴇᴀᴛᴇ ᴏᴘᴛɪᴏɴꜱ ɪɴ ᴛʜᴇ ꜱᴜʀᴠᴇʏ ᴜꜱᴇ *" | "*\n*${usedPrefix + command} Survey Reason|text1|text2|text3....*`, fkontak, m)
if (b[13]) return conn.reply(m.chat, `${fg}ᴍᴀxɪᴍᴏ *12* ᴏᴘᴄɪᴏɴᴇꜱ!!\n\nᴜꜱᴇ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ᴅᴇ ʟᴀ ꜱɪɢᴜɪᴇɴᴛᴇ ꜰᴏʀᴍᴀ\n*${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....*\n\nᴍᴀxɪᴍᴜᴍ *12* ᴏᴘᴛɪᴏɴꜱ!!\n\nᴜꜱᴇ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ᴀꜱ ꜰᴏʟʟᴏᴡꜱ\n*${usedPrefix + command} Survey Reason|text1|text2|text3....*`, fkontak, m)

for (let c = 1; c < b.length; c++) { a.push([b[c]]) }
let texto = `〽︎〽︎E̷̳͖͚̫̎̃̑̄̉͒̀͝Ň̷̨̡̡̛̯̺͔̖͎̇̀̈́͆̎̓͒ͅC̴̦̲͖̮̠͈̱͉̣͛͛́͐̾͌̌̎̏͘U̵͔͇͔̞̹̩̰͎̩̥̾̀̐͂̆̅͂E̸̛̹͈̤̜̫̳̜̓͌̈̉̃̀́̕͝S̷̡̯̳̝̪͖͎̈͂͑́ͅT̵̙̰͕̹͈̭̬͖̮́̉̂͆̽͑͛̈̿A̸̻̖̞̤͔̭̖̲̐͗̋̈̇̔͠ ̸̯̦̻̗͇̰̀C̶̖̯̻̓̆̈́͋̄R̸̢͚̪͉͎̲̺̊̇E̵͈̊͒́A̸D̸̡̤͇̹͉̈̐́̍̀Ǟ̴̯͍̺͓̟̦̼̗̻̾̎͂̐̅͒ ̶̻͙̥̩̏͂̅P̶̧̡̞̺͙̝̭̊̕Ǒ̶̡̲͎̉Ṟ̵̢̨͕̊ ̷̢̝̺͕̉̆̈̓̉ͅȄ̵̳̻͚̰̞̪͋́̔͊̓̌͜͝Ṧ̷̨̗̘̜T̷͇̯̟͎̯̜̺̪̹̀̂E̷̜͑͆̌̑̂̋̊̚͘\n*❤⇢ ${conn.getName(m.sender)}*\n*${text.split('|')[0]}*`

return conn.sendPoll(m.chat, texto, a, {mentions: m})}
handler.command = ['poll', 'encuesta', 'crearencuesta', 'startpoll', 'encuestas', 'polls'] 
export default handler

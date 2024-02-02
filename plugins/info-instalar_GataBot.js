let handler  = async (m, { conn, usedPrefix, command }) => {
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

let picture = './media/menus/Menu1.jpg'
let gata = `I̷N̷S̷T̷A̷L̷A̷C̷I̷O̷N̷ ̷D̷E̷ ̷H̷A̷M̷I̷L̷Y̷B̷O̷T̷ 𒅒


*𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗗𝗶𝗼𝘀𒅒 | 𝗛𝗮𝗺𝗶𝗹𝘆𝗕𝗼𝘁*

*━━━━━━━━━━━━━⬣*
𒁈 𝗜𝗡𝗦𝗧𝗔𝗟𝗔𝗥 𝗘𝗡 𝗕𝗢𝗫𝗠𝗜𝗡𝗘
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*𝗛𝗮𝗺𝗶𝗹𝘆𝗕𝗼𝘁 : 𝗕𝗼𝘅𝗠𝗶𝗻𝗲*
*Aun no publicado*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_Pagina Oficial_ 
_https://boxmineworld.com_
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_Tutorial - Crea una cuenta en la Dashboard_
*Aun no publicado*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_Dashboard_
_https://dash.boxmineworld.com_
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_Panel_
_https://panel.boxmineworld.com_
*━━━━━━━━━━━━━⬣*

*━━━━━━━━━━━━━⬣*
𒁈 𝗜𝗡𝗦𝗧𝗔𝗟𝗔𝗥 𝗘𝗡 𝗧𝗘𝗥𝗠𝗨𝗫
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
termux-setup-storage
apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/Brashkie/HamilyBot/master/Hamily.sh | bash
*━━━━━━━━━━━━━⬣*

*━━━━━━━━━━━━━⬣*
𒁈 𝗜𝗡𝗦𝗧𝗔𝗟𝗔𝗥 𝗘𝗡 𝗛𝗘𝗥𝗢𝗞𝗨
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*Aun no publicada, serà mas adelante*
*━━━━━━━━━━━━━⬣*`
await conn.sendFile(m.chat, picture, 'gata.mp4', gata, fkontak)}
/*conn.sendButton(m.chat, gata, `Comunícate con Mí Creador si necesitas ayuda con la Instalación.\n\nContact My Creator if you need help with the Installation.\n\n${ig}\n${wm}`, picture, [
['ᴄᴜᴇɴᴛᴀs ᴏғɪᴄɪᴀʟᴇs | ᴀᴄᴄᴏᴜɴᴛs', '.cuentasgb'],
['ᴅᴏɴᴀʀ | ᴅᴏɴᴀᴛᴇ', '.donar']], fkontak, m)}*/
handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler

import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `${mg}E̷S̷C̷R̷I̷B̷A̷ ̷U̷N̷ ̷T̷E̷X̷T̷O̷ ̷P̷A̷R̷A̷ ̷C̷O̷N̷V̷E̷R̷T̷I̷R̷ ̷E̷N̷ ̷C̷O̷D̷I̷G̷O̷ ̷Q̷R̷\n\nW̷R̷I̷T̷E̷ ̷T̷E̷X̷T̷ ̷T̷O̷ ̷C̷O̷N̷V̷E̷R̷T̷ ̷I̷T̷ ̷I̷N̷T̷O̷ ̷Q̷R̷ ̷C̷O̷D̷E̷`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', wm, m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
handler.money = 20
export default handler

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';
const handler = async (m, { conn, usedPrefix }) => {
const chatId = m.isGroup ? m.chat : m.sender;
const uniqid = chatId.split('@')[0];
const sessionPath = './GataBotSession/';
try {
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
if (file.includes(uniqid)) {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
}}
if (filesDeleted === 0) {
await conn.sendMessage(m.chat, { text: `${lenguajeGB['smsAvisoAG']()}NO SE ENCONTRÓ NINGÚN ARCHIVO QUE INCLUYA LA ID DEL CHAT` }, { quoted: m });
} else {
await conn.sendMessage(m.chat,
{ text: `${lenguajeGB['smsAvisoEG']()}sᴇ ᴇʟɪᴍɪɴᴀʀᴏɴ ${filesDeleted} ᴀʀᴄʜɪᴠᴏs ᴅᴇ sᴇsɪᴏ́ɴ` },
{ quoted: m }
)}
} catch (err) {
console.error(`${lenguajeGB['smsAvisoFG']()}ʟᴀ ᴄᴀʀᴘᴇᴛᴀ ᴏ ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴅᴇ sᴇsɪᴏ́ɴ ɴᴏ ᴇxɪsᴛᴇɴ`, err);
await conn.sendMessage(m.chat,
{ text: `${lenguajeGB['smsAvisoFG']()}ᴏᴄᴜʀʀɪᴏ́ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇʟɪᴍɪɴᴀʀ ᴛᴏᴅᴀs ʟᴀs ᴀʟᴀʀᴍᴀs ᴀʟᴍᴀᴄᴇɴᴀᴅᴀs ᴇɴ ʟᴀ ᴍᴇᴍᴏʀɪᴀ ᴅᴇ ᴇʟɪᴍɪɴᴀᴄɪᴏ́ɴ` },
{ quoted: m }
)}
await conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoRG']()}𖣔 Ɏ₳ ₣Ʉ₦₵łØ₦₳\n₴ł ɆⱠ ฿Ø₮ ₦Ø ⱠɆ ⱤɆ₴₱Ø₦ĐɆ ₳ ₴Ʉ ₵Ø₥₳₦ĐØ ₱ØⱤ ₣₳VØⱤ ₦Ø Ⱨ₳₲₳ ₥Ʉ₵ⱧØ ₴₱₳₥\n\n*ɆJɆ₥₱ⱠØ:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, { quoted: m })};
handler.help = ['deletebot'];
handler.tags = ['jadibot'];
handler.command = /^(msgespera|ds)$/i;
export default handler;

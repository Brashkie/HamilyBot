/* CREDITOS: https://github.com/FG98F */

let handler = async (m, { args, usedPrefix, command, conn }) => {
let fa = `
${mg}𝗗𝗘𝗕𝗘 𝗗𝗘 𝗨𝗦𝗔𝗥 𝗗𝗘 𝗟𝗔 𝗦𝗜𝗚𝗨𝗜𝗘𝗡𝗧𝗘 𝗠𝗔𝗡𝗘𝗥𝗔:
𝗬𝗢𝗨 𝗠𝗨𝗦𝗧 𝗨𝗦𝗘 𝗔𝗦 𝗙𝗢𝗟𝗟𝗢𝗪𝗦:

𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀
*${usedPrefix + command} 50*`.trim()

if (!args[0]) throw fa
if (isNaN(args[0])) throw fa
let apuesta = parseInt(args[0])

let users = global.db.data.users[m.sender]
//let time = global.db.data.users[m.sender].lastwork + 30000
//if (new Date - users.lastwork < 30000) throw `*ᴠᴜᴇʟᴠᴀ ᴇɴ ${msToTime(time - new Date())} ᴘᴀʀᴀ ᴄᴏɴᴛɪɴᴜᴀʀ ᴀᴘᴏꜱᴛᴀɴᴅᴏ* 🎰\n\n*ᴄᴏᴍᴇ ʙᴀᴄᴋ ɪɴ ${msToTime(time - new Date())} ᴛᴏ ᴄᴏɴᴛɪɴᴜᴇ ʙᴇᴛᴛɪɴɢ* 💰`

if (apuesta < 10) throw `${lenguajeGB['smsAvisoAG']()}ᴅᴇʙᴇ ᴅᴇ ᴀᴘᴏꜱᴛᴀʀ ᴜɴ ᴍÍɴɪᴍᴏ ᴅᴇ *10*\n\nʏᴏᴜ ᴍᴜꜱᴛ ʙᴇᴛ ᴀ ᴍɪɴɪᴍᴜᴍ ᴏꜰ *10*`

if (users.exp < apuesta) {
throw `${lenguajeGB['smsAvisoFG']()}ɴᴏ ᴀʟᴄᴀɴᴢᴀ ᴘᴀʀᴀ ᴀᴘᴏꜱᴛᴀʀ ᴇxᴘ, ʟᴇ ʀᴇᴄᴏᴍɪᴇɴᴅᴏ ɪɴᴛᴇʀᴀᴄᴛᴜᴀʀ ᴄᴏɴ ᴇʟ ʙᴏᴛ ᴘᴀʀᴀ ᴏʙᴛᴇɴᴇʀ ʀᴇᴄᴜʀꜱᴏꜱ\n\nɴᴏ ᴇɴᴏᴜɢʜ ᴛᴏ ʙᴇ, ɪ ʀᴇᴄᴏᴍᴍᴇɴᴅ ʏᴏᴜ ɪɴᴛᴇʀᴀᴄᴛ ᴡɪᴛʜ ᴛʜᴇ ʙᴏᴛ ᴛᴏ ɢᴇᴛ ʀᴇꜱᴏᴜʀᴄᴇꜱ`    
}
if (command == 'slot1') {
let time = global.db.data.users[m.sender].lastslot + 60000
if (new Date - users.lastslot < 60000) throw `*ᴠᴜᴇʟᴠᴀ ᴇɴ ${msToTime(time - new Date())} ᴘᴀʀᴀ ᴄᴏɴᴛɪɴᴜᴀʀ ᴀᴘᴏꜱᴛᴀɴᴅᴏ ᴇxᴘ* 🎰\n\n*ᴄᴏᴍᴇ ʙᴀᴄᴋ ɪɴ ${msToTime(time - new Date())} ᴛᴏ ᴄᴏɴᴛɪɴᴜᴇ ʙᴇᴛᴛɪɴɢ* 💰`
users.lastslot = new Date * 1
    
let emojis = ["🍁", "⚡", "🍇"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ *QUE PRO!! HAS GANADO +${apuesta + apuesta} EXP*\n\n🤑 *COOL!! YOU JUST WON +${apuesta + apuesta} EXP*`
users.exp += apuesta
} else if (a == b || a == c || b == c) {
end = `😱 *CASI!!, VUELVA A INTENTAR*\n*BONO DE +50 EXP*\n\n😯 *ALMOST!!, TRY AGAIN*\n*BONDS OF +50 EXP*`
users.exp += 50
} else {
end = `😭 *HA PERDIDO!! ✖ -${apuesta} EXP*\n\n*HAS LOST!! ✖ -${apuesta} EXP*`
users.exp -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let s = `🎰 | *RANURAS* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *SLOTS*   | 🎰

${end}`
await conn.reply(m.chat, s, m)}
/*await conn.sendHydrated(m.chat, `${s}\n\n${end}`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['⚡ ᴀᴘᴏꜱᴛᴀʀ ᴏᴛʀᴀ ᴠᴇᴢ | ᴀɢᴀɪɴ', `${usedPrefix}slot1 ${apuesta}`],
['🐈 ᴀᴘᴏꜱᴛᴀʀ ᴄᴏɴ ʜᴀᴍɪᴄᴏɪɴꜱ', `${usedPrefix}slot2 ${apuesta}`],
['💎 ᴀᴘᴏꜱᴛᴀʀ ᴄᴏɴ ᴅɪᴀᴍᴀɴᴛᴇꜱ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/


if (users.money < apuesta)  { 
throw `${lenguajeGB['smsAvisoFG']()}ɴᴏ ᴀʟᴄᴀɴᴢᴀ ᴘᴀʀᴀ ᴀᴘᴏꜱᴛᴀʀ ʜᴀᴍɪᴄᴏɪɴꜱ, ʟᴇ ʀᴇᴄᴏᴍɪᴇɴᴅᴏ ɪɴᴛᴇʀᴀᴄᴛᴜᴀʀ ᴄᴏɴ ᴇʟ ʙᴏᴛ ᴘᴀʀᴀ ᴏʙᴛᴇɴᴇʀ ʀᴇᴄᴜʀꜱᴏꜱ\n\nɴᴏ ᴇɴᴏᴜɢʜ ᴛᴏ ʙᴇ, ɪ ʀᴇᴄᴏᴍᴍᴇɴᴅ ʏᴏᴜ ɪɴᴛᴇʀᴀᴄᴛ ᴡɪᴛʜ ᴛʜᴇ ʙᴏᴛ ᴛᴏ ɢᴇᴛ ʀᴇꜱᴏᴜʀᴄᴇꜱ`    
}
if (command == 'slot2') {
let time = global.db.data.users[m.sender].lastslot + 60000
if (new Date - users.lastslot < 60000) throw `*ᴠᴜᴇʟᴠᴀ ᴇɴ ${msToTime(time - new Date())} ᴘᴀʀᴀ ᴄᴏɴᴛɪɴᴜᴀʀ ᴀᴘᴏꜱᴛᴀɴᴅᴏ ʜᴀᴍɪᴄᴏɪɴꜱ* 🎰\n\n*ᴄᴏᴍᴇ ʙᴀᴄᴋ ɪɴ ${msToTime(time - new Date())} ᴛᴏ ᴄᴏɴᴛɪɴᴜᴇ ʙᴇᴛᴛɪɴɢ* 💰`
users.lastslot = new Date * 1
    
let emojis = ["🐈", "🐓", "🐙"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ *QUE PRO!! HAS GANADO +${apuesta + apuesta} HamiCoins*\n\n🤑 *COOL!! YOU JUST WON +${apuesta + apuesta} HamiCoins*`
users.money += apuesta
} else if (a == b || a == c || b == c) {
end = `😱 *CASI!!, VUELVA A INTENTAR*\n*BONO DE +30 HamiCoins*\n\n😯 *ALMOST!!, TRY AGAIN*\n*BONDS OF +30 HamiCoins*`
users.money += 30
} else {
end = `😭 *HA PERDIDO!! ✖ -${apuesta} HamiCoins*\n\n*HAS LOST!! ✖ -${apuesta} HamiCoins*`
users.money -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let ss = `
🎰 | *RANURAS* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *SLOTS*   | 🎰\n\n${end}`
await conn.reply(m.chat, ss, m)}
/*await conn.sendHydrated(m.chat, `${ss}\n\n${end}`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['🐈 ᴀᴘᴏꜱᴛᴀʀ ᴏᴛʀᴀ ᴠᴇᴢ | ᴀɢᴀɪɴ', `${usedPrefix}slot2 ${apuesta}`],
['⚡ ᴀᴘᴏꜱᴛᴀʀ ᴄᴏɴ ᴇxᴘ', `${usedPrefix}slot1 ${apuesta}`],
['💎 ᴀᴘᴏꜱᴛᴀʀ ᴄᴏɴ ᴅɪᴀᴍᴀɴᴛᴇꜱ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/

    
if (users.limit < apuesta) {  
throw `${lenguajeGB['smsAvisoFG']()}ɴᴏ ᴀʟᴄᴀɴᴢᴀ ᴘᴀʀᴀ ᴀᴘᴏꜱᴛᴀʀ ᴅɪᴀᴍᴀɴᴛᴇꜱ, ʟᴇ ʀᴇᴄᴏᴍɪᴇɴᴅᴏ ɪɴᴛᴇʀᴀᴄᴛᴜᴀʀ ᴄᴏɴ ᴇʟ ʙᴏᴛ ᴘᴀʀᴀ ᴏʙᴛᴇɴᴇʀ ʀᴇᴄᴜʀꜱᴏꜱ\n\nɴᴏ ᴇɴᴏᴜɢʜ ᴛᴏ ʙᴇ, ɪ ʀᴇᴄᴏᴍᴍᴇɴᴅ ʏᴏᴜ ɪɴᴛᴇʀᴀᴄᴛ ᴡɪᴛʜ ᴛʜᴇ ʙᴏᴛ ᴛᴏ ɢᴇᴛ ʀᴇꜱᴏᴜʀᴄᴇꜱ`    
}
if (command == 'slot3') {
let time = global.db.data.users[m.sender].lastslot + 30000
if (new Date - users.lastslot < 30000) throw `*ᴠᴜᴇʟᴠᴀ ᴇɴ ${msToTime(time - new Date())} ᴘᴀʀᴀ ᴄᴏɴᴛɪɴᴜᴀʀ ᴀᴘᴏꜱᴛᴀɴᴅᴏ ᴅɪᴀᴍᴀɴᴛᴇꜱ* 🎰\n\n*ᴄᴏᴍᴇ ʙᴀᴄᴋ ɪɴ ${msToTime(time - new Date())} ᴛᴏ ᴄᴏɴᴛɪɴᴜᴇ ʙᴇᴛᴛɪɴɢ* 💰`
users.lastslot = new Date * 1
    
let emojis = ["🪵", "💣", "💎"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ *QUE PRO!! HAS GANADO +${apuesta + apuesta} Diamantes*\n\n🤑 *COOL!! YOU JUST WON +${apuesta + apuesta} Diamantes*`
users.limit += apuesta
} else if (a == b || a == c || b == c) {
end = `😱 *CASI!!, VUELVA A INTENTAR*\n*BONO DE +2 Diamantes*\n\n😯 *ALMOST!!, TRY AGAIN*\n*BONDS OF +2 Diamantes*`
users.limit += 2
} else {
end = `😭 *HA PERDIDO!! ✖ -${apuesta} Diamantes*\n\n*HAS LOST!! ✖ -${apuesta} Diamantes*`
users.limit -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let sss = `
🎰 | *RANURAS* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *SLOTS*   | 🎰\n\n${end}`
await conn.reply(m.chat, sss, m)}
/*await conn.sendHydrated(m.chat, `${sss}\n\n${end}`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💎 ᴀᴘᴏꜱᴛᴀʀ ᴏᴛʀᴀ ᴠᴇᴢ | ᴀɢᴀɪɴ', `${usedPrefix}slot3 ${apuesta}`],
['⚡ ᴀᴘᴏꜱᴛᴀʀ ᴄᴏɴ ᴇxᴘ', `${usedPrefix}slot1 ${apuesta}`],
['🐈 ᴀᴘᴏꜱᴛᴀʀ ᴄᴏɴ ʜᴀᴍɪᴄᴏɪɴꜱ', `${usedPrefix}slot2 ${apuesta}`]
], m,)}*/
        
        
if (command == 'slot') {       
await conn.reply(m.chat, `*Elija en que apostará ${apuesta}*\n\n⚡ 𝙀𝙓𝙋:\n${usedPrefix}slot1 ${apuesta}\n\n🐈 ʜᴀᴍɪᴄᴏɪɴꜱ:\n${usedPrefix}slot2 ${apuesta}\n\n💎 ᴅɪᴀᴍᴀɴᴛᴇꜱ:\n${usedPrefix}slot3 ${apuesta}`, m)}
/*await conn.sendHydrated(m.chat, `*Elija en que apostará ${apuesta}*`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['⚡ 𝙀𝙓𝙋', `${usedPrefix}slot1 ${apuesta}`],
['🐈 ʜᴀᴍɪᴄᴏɪɴꜱ', `${usedPrefix}slot2 ${apuesta}`],
['💎 ᴅɪᴀᴍᴀɴᴛᴇꜱ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/
        
if (command == 'apostar') {       
await conn.reply(m.chat, `*Elija en que apostará ${apuesta}*\n\n*Choose what you will*\n\n⚡ 𝙀𝙓𝙋:\n${usedPrefix}slot1 ${apuesta}\n🐈 ʜᴀᴍɪᴄᴏɪɴꜱ:\n${usedPrefix}slot2 ${apuesta}\n💎 ᴅɪᴀᴍᴀɴᴛᴇꜱ:\n${usedPrefix}slot3 ${apuesta}`, m)}
/*await conn.sendHydrated(m.chat, `*Elija en que apostará ${apuesta}*\n\n*Choose what you will*`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['⚡ 𝙀𝙓𝙋', `${usedPrefix}slot1 ${apuesta}`],
['🐈 ʜᴀᴍɪᴄᴏɪɴꜱ', `${usedPrefix}slot2 ${apuesta}`],
['💎 ᴅɪᴀᴍᴀɴᴛᴇꜱ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/

//global.db.data.users[m.sender].lastwork = new Date * 1
       
}
handler.help = ['slot <apuesta>']
handler.tags = ['game']
handler.command = ['slot', 'apostar', 'slot1', 'slot2', 'slot3']
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s " 
}

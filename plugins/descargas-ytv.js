import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}ɪɴɢʀᴇꜱᴇ ᴇʟ ᴇɴʟᴀᴄᴇ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ ᴘᴀʀᴀ ᴅᴇꜱᴄᴀʀɢᴀʀ ᴇʟ ᴠɪᴅᴇᴏ\nᴇᴊᴇᴍᴘʟᴏ\n*${usedPrefix + command} https://www.youtube.com/watch?v=_5YA8YdB61c*\n\nᴇɴᴛᴇʀ ᴛʜᴇ ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ ᴛʜᴇ ᴠɪᴅᴇᴏ\nᴇxᴀᴍᴘʟᴇ\n*${usedPrefix + command} https://www.youtube.com/watch?v=_5YA8YdB61c*`, fkontak, m)
  
let youtubeLink = '';
if (args[0].includes('you')) {
youtubeLink = args[0];
} else {
const index = parseInt(args[0]) - 1;
if (index >= 0) {
if (Array.isArray(global.videoList) && global.videoList.length > 0) {
const matchingItem = global.videoList.find(item => item.from === m.sender);
if (matchingItem) {
if (index < matchingItem.urls.length) {
youtubeLink = matchingItem.urls[index];
} else {
throw `${lenguajeGB['smsAvisoFG']()} ɴᴏ ꜱᴇ ᴇɴᴄᴏɴᴛʀᴏ ᴜɴ ᴇɴʟᴀᴄᴇ ᴘᴀʀᴀ ᴇꜱᴇ ɴᴜᴍᴇʀᴏ, ᴘᴏʀ ꜰᴀᴠᴏʀ ɪɴɢʀᴇꜱᴇ ᴜɴ ɴᴜᴍᴇʀᴏ ᴇɴᴛᴇʀᴏ 1 ʏ ᴇʟ  ${matchingItem.urls.length}*`;
}} else {
throw `${lenguajeGB['smsAvisoMG']()} ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ᴜꜱᴀʀ ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴅᴇ ᴇꜱᴛᴀ ꜰᴏʀᴍᴀ (${usedPrefix + command} <numero>), ᴘᴏʀ ꜰᴀᴠᴏʀ ʀᴇᴀʟɪᴢᴀʀ ʟᴀ ʙᴜꜱQᴜᴇᴅᴀ ᴅᴇ ᴠɪᴅᴇᴏꜱ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ  ${usedPrefix}playlist <texto>*`;
}} else {
throw `${lenguajeGB['smsAvisoMG']()} ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ᴜꜱᴀʀ ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴅᴇ ᴇꜱᴛᴀ ꜰᴏʀᴍᴀ (${usedPrefix + command} <numero>), ᴘᴏʀ ꜰᴀᴠᴏʀ ʀᴇᴀʟɪᴢᴀʀ ʟᴀ ʙᴜꜱQᴜᴇᴅᴀ ᴅᴇ ᴠɪᴅᴇᴏꜱ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ  ${usedPrefix}playlist <texto>*`;
}}}  
  
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}ꜱᴇ ᴇꜱᴛᴀ ᴅᴇꜱᴄᴀʀɢᴀɴᴅᴏ ꜱᴜ ᴠɪᴅᴇᴏ, ᴇꜱᴘᴇʀᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ ᴘᴏʀ ꜰᴀᴠᴏʀ\n\nʏᴏᴜʀ ᴠɪᴅᴇᴏ ɪꜱ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ, ᴡᴀɪᴛ ᴀ ᴍᴏᴍᴇɴᴛ ᴘʟᴇᴀꜱᴇ`, fkontak, m)
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = youtubeLink
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `╭━❰  ${wm}  ❱━⬣\n┃ 💜 𝙏𝙄𝙏𝙐𝙇𝙊 | 𝙏𝙄𝙏𝙇𝙀\n┃ ${ttl}\n╰━━━━━❰ *𓃠 ${vs}* ❱━━━━⬣}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch (E1) {
//console.log('Error 1 ' + E1)  
try {  
let mediaa = await ytMp4(youtubeLink)
await conn.sendMessage(m.chat, { video: { url: mediaa.result }, fileName: `error.mp4`, caption: `_${wm}_`, thumbnail: mediaa.thumb, mimetype: 'video/mp4' }, { quoted: m })     
} catch (E2) {  
//console.log('Error 2 ' + E2)   
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${youtubeLink}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `╭━❰  ${wm}  ❱━⬣\n┃ 𖣐 T̷I̷T̷U̷L̷O̷ ̷|̷ ̷T̷I̷T̷L̷E̷\n┃ ${n}\n╰━━━━━❰ *𓃠 ${vs}* ❱━━━━⬣`, thumbnail: await fetch(n4) }, { quoted: m })
} catch (E3) {
//console.log('Error 3 ' + E3)   
await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}ᴇꜱ ᴘᴏꜱɪʙʟᴇ Qᴜᴇ ᴇʟ ᴀʀᴄʜɪᴠᴏ ꜱᴇᴀ ᴍᴜʏ ᴘᴇꜱᴀᴅᴏ. ɪɴᴛᴇɴᴛᴀ ᴄᴏɴ ᴏᴛʀᴀ ᴏᴘᴄɪᴏɴ ᴅᴇ ᴅᴇꜱᴄᴀʀɢᴀ\n\nɪᴛ ɪꜱ ᴘᴏꜱꜱɪʙʟᴇ ᴛʜᴀᴛ ᴛʜᴇ ꜰɪʟᴇ ɪꜱ ᴠᴇʀʏ ʜᴇᴀᴠʏ. ᴛʀʏ ᴀɴᴏᴛʜᴇʀ`, m)}
}}}
handler.command = /^video|fgmp4|dlmp4|getvid|yt(v|mp4)?$/i
export default handler

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)})};

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { audio: item.url, size: bytes }}};
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})}

async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}};
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getAudio = await ytMp3(random);
resolve(getAudio)}).catch(reject)})};

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getVideo = await ytMp4(random);
resolve(getVideo)}).catch(reject)})};

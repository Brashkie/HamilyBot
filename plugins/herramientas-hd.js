import FormData from "form-data";
import Jimp from "jimp";
const handler = async (m, {conn, usedPrefix, command}) => {
 try {    
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || q.mediaType || "";
  if (!mime) throw `╰⊱❗️⊱ *L̷O̷ ̷U̷S̷O̷ ̷M̷A̷L̷ ̷|̷ ̷U̷S̷E̷ ̷I̷T̷ ̷W̷R̷O̷N̷G̷* ⊱❗️⊱╮\n\nE̷N̷V̷Í̷E̷ ̷U̷N̷A̷ ̷I̷M̷A̷G̷E̷N̷ ̷O̷ ̷R̷E̷S̷P̷O̷N̷D̷A̷ ̷A̷ ̷U̷N̷A̷ ̷I̷M̷A̷G̷E̷N̷ ̷C̷O̷N̷ ̷E̷L̷ ̷C̷O̷M̷A̷N̷D̷O̷ ${usedPrefix + command}`;
  if (!/image\/(jpe?g|png)/.test(mime)) throw `╰⊱⚠️⊱ *𝗔𝗗𝗩𝗘𝗥𝗧𝗘𝗡𝗖𝗜𝗔 | 𝗪𝗔𝗥𝗡𝗜𝗡𝗚* ⊱⚠️⊱╮\n\nEL FORMATO DEL ARCHIVO (${mime}) NO ES COMPATIBLE, ENVÍA O RESPONDE A UNA FOTO`;
  m.reply("*🐈 𝙈𝙀𝙅𝙊𝙍𝘼𝙉𝘿𝙊 𝙇𝘼 𝘾𝘼𝙇𝙄𝘿𝘼𝘿...*");
  let img = await q.download?.();
  let pr = await remini(img, "enhance");
  conn.sendMessage(m.chat, {image: pr}, {quoted: m});
 } catch {
  throw "╰⊱⚠️⊱ *𝗔𝗗𝗩𝗘𝗥𝗧𝗘𝗡𝗖𝗜𝗔 | 𝗪𝗔𝗥𝗡𝗜𝗡𝗚* ⊱⚠️⊱╮\n\nꜰᴀʟʟᴏ, ᴘᴏʀ ꜰᴀᴠᴏʀ ᴠᴜᴇʟᴠᴀ ᴀ ɪɴᴛᴇɴᴛᴀʀ";
 }
};
handler.help = ["remini", "hd", "enhance"];
handler.tags = ["ai", "tools"];
handler.command = ["remini", "hd", "enhance"];
export default handler;

async function remini(imageData, operation) {
  return new Promise(async (resolve, reject) => {
    const availableOperations = ["enhance", "recolor", "dehaze"];
    if (availableOperations.includes(operation)) {
      operation = operation;
    } else {
      operation = availableOperations[0];
    }
    const baseUrl = "https://inferenceengine.vyro.ai/" + operation + ".vyro";
    const formData = new FormData();
    formData.append("image", Buffer.from(imageData), {filename: "enhance_image_body.jpg", contentType: "image/jpeg"});
    formData.append("model_version", 1, {"Content-Transfer-Encoding": "binary", contentType: "multipart/form-data; charset=utf-8"});
    formData.submit({url: baseUrl, host: "inferenceengine.vyro.ai", path: "/" + operation, protocol: "https:", headers: {"User-Agent": "okhttp/4.9.3", Connection: "Keep-Alive", "Accept-Encoding": "gzip"}},
      function (err, res) {
        if (err) reject(err);
        const chunks = [];
        res.on("data", function (chunk) {chunks.push(chunk)});
        res.on("end", function () {resolve(Buffer.concat(chunks))});
        res.on("error", function (err) {
        reject(err);
        });
      },
    );
  });
}

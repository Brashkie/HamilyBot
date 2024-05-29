import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Brashkie/HamilyBot/master/src/JSON/reaccion-${command}.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.gif', `_${command}_`, m)
//conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['SIGUIENTE | NEXT 🆕', `${usedPrefix + command}`]], m)    
}
handler.command = handler.help = ['kiss1','pat','slap','cuddle','hug','bite','poke','lick']
handler.tags = ['reaccion']
export default handler

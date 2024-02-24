import JavaScriptObfuscator from 'javascript-obfuscator'

let handler = async(m, { conn, text }) => {
if (!text) return m.reply(`*${lenguajeGB['smsAvisoMG']()}I̷N̷G̷R̷E̷S̷A̷ ̷E̷L̷ ̷C̷O̷D̷I̷G̷O̷ ̷Q̷U̷E̷ ̷V̷A̷S̷ ̷A̷ ̷O̷F̷U̷S̷C̷A̷R̷*`) 
function obfuscateCode(code) {
  return JavaScriptObfuscator.obfuscate(code, { compact: false, controlFlowFlattening: true, deadCodeInjection: true, simplify: true, numbersToExpressions: true }).getObfuscatedCode();
}
let obfuscatedCode = await obfuscateCode(text);
conn.sendMessage(m.chat, {text: obfuscatedCode}, {quoted: m});
}
handler.command = /^(ofuscar|ofuscador)$/i
export default handler

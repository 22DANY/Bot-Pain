//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
    let res = await fetch('https://random.dog/woof.json')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
© THE PAIN-BOT
`.trim()
    conn.sendFile(m.chat, json.url, 'dog.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['dog']
handler.tags = ['random']
handler.command = new RegExp
handler.customPrefix = /perro|Perro|Dog|dog|cachorro|animal|Animal/

handler.fail = null

module.exports = handler

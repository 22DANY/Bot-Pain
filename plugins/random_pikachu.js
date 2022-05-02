//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
 try {
    let res = await fetch('https://some-random-api.ml/img/pikachu')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
©THE PAIN-BOT
`.trim()
    conn.sendFile(m.chat, json.link, '', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['pikachu']
handler.tags = ['random']
handler.command = new RegExp
handler.customPrefix = /pika|pikachu|Pika|Pikachu/

handler.fail = null

module.exports = handler

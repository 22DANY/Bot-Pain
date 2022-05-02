//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://cataas.com/cat')
     let img = await res.buffer()
     let caption = `
©THE PAIN-BOT
`.trim()
    conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['cat']
handler.tags = ['random']
handler.command = new RegExp
handler.customPrefix = /cat|gato|Gato|miau|gatito|Cat/

handler.fail = null

module.exports = handler

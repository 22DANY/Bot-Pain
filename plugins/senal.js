let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/se.mp3'
conn.sendFile(m.chat, vn, 'se.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /agarrando|señal|Señal/
handler.command = new RegExp
module.exports = handler

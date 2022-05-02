let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/ratainmunda.mp3'
conn.sendFile(m.chat, vn, 'ratainmunda.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /todos mienten|Todos mienten|los hombres mienten|mientes/
handler.command = new RegExp
module.exports = handler
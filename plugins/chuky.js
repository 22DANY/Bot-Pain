let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/boneka-chucky?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*El miedo es para personas deviles, esperame esta noche en tu cama*', '©THE PAIN-BOT', 'PRUEBA TU IQ', `${"!" + "iqtest"}`, m, false)
}

handler.customPrefix = /chuky|miedo|Terror|asustado|Asustado|Miedo/
handler.command = new RegExp

module.exports = handler

const axios = require('axios')
let handler = async(m, { conn,}) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/mememexico")
let json = res.data
let ShadowBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, ShadowBot, "*I'M CRAZY*", '©THE PAIN-BOT', 'TE BAÑASTE HOY?', `${"!attp " + "ESO NO ES UN BOTON"}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = new RegExp
handler.customPrefix = /bot|meme|Bot|/
module.exports = handler

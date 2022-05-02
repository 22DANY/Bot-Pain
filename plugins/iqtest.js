let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.iq)}`, m)
}
handler.help = ['iqtest']
handler.tags = ['game']
handler.command = /^(iqtest)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.iq = [
'Tu IQ es de: 1 Perdon por decirte esto, pero eres mas burro que el burro de SHREK quizas ni entiendas este msj',
'Tu IQ es de: 14 Osea en pocas palabras tienes los cesos aguados',
'Tu IQ es de: 23 lee mucho, te falta inteligencia',
'Tu IQ es de: 35 eres burro pero hay peores que tu',
'Tu IQ es de: 41 eres un poco idiota',
'Tu IQ es de: 50 Ejercita tus neuronas y deja de pensar en porno',
'Tu IQ es de: 67, que te digo aparentas que no eres burro, pero lo eres',
'Tu IQ es de: 72',
'Tu IQ es de: 86',
'Tu IQ es de: 99',
'Tu IQ es de: 150',
'Tu IQ es de: 340',
'Tu IQ es de: 423',
'Tu IQ es de: 500',
'Tu IQ es de: 676',
'Tu IQ es de: 780',
'Tu IQ es de: 812',
'Tu IQ es de: 945',
'Tu IQ es de: 1000',
'Tu IQ es de: Ilimitado!!',
'Tu IQ es de: 5000',
'Tu IQ es de: 7500',
'Tu IQ es de: 10000',
]

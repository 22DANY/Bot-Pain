let handler = async(m, { conn}) => {
    await conn.sendButtonVid(m.chat, pickRandom(sad), '😭🔥', '©THE PAIN-BOT', '😭BOTON😭', `${"!tts es " + "PENDEJO eso no es un boton jajajajaja te engañe" }` , m, false)
    }
    handler.customPrefix = /sad|triste|Triste|Sad|estupido/
    handler.command = new RegExp
    module.exports = handler
    
    function pickRandom(list) {
      return list[Math.floor(list.length * Math.random())]
    }
    
    const sad = [
        "https://a.top4top.io/m_2310ccfrd1.mp4",
        "https://b.top4top.io/m_231072qh52.mp4",
        "https://c.top4top.io/m_2310ssmc63.mp4", 
        "https://d.top4top.io/m_23104bsvj4.mp4",
        "https://e.top4top.io/m_23106xb645.mp4",
        "https://f.top4top.io/m_23104rran6.mp4",
        "https://f.top4top.io/m_23104rran6.mp4",
        "https://h.top4top.io/m_2310aiypb8.mp4",
        "https://i.top4top.io/m_2310lsama9.mp4",
        "https://g.top4top.io/m_2310kdn3q7.mp4",
        "https://j.top4top.io/m_231013jv710.mp4",
        "https://a.top4top.io/m_2310ccfrd1.mp4",
        "https://b.top4top.io/m_231072qh52.mp4",
        "https://c.top4top.io/m_2310ssmc63.mp4",
        "https://d.top4top.io/m_23104bsvj4.mp4",
        "https://e.top4top.io/m_23106xb645.mp4",
        "https://f.top4top.io/m_23104rran6.mp4",
        "https://g.top4top.io/m_2310kdn3q7.mp4",
        "https://h.top4top.io/m_2310aiypb8.mp4",
        "https://i.top4top.io/m_2310lsama9.mp4",
        "https://j.top4top.io/m_231013jv710.mp4",
        "https://e.top4top.io/m_2310lmuqc1.mp4",
        "https://f.top4top.io/m_2310b2aye2.mp4",
        "https://g.top4top.io/m_2310ladpz3.mp4",
        "https://h.top4top.io/m_2310vgkyu4.mp4",
        "https://i.top4top.io/m_2310v9yar5.mp4",
        "https://j.top4top.io/m_2310vu7bk6.mp4",
        "https://k.top4top.io/m_2310l46do7.mp4",
        "https://l.top4top.io/m_23101uya58.mp4",
        
        
    


    ]
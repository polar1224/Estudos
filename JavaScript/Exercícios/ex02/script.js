function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas.`

    if (horas >= 0 && horas < 12){
        //BOM DIA!
        img.src = 'Materiáis usados/Manhã.jpg'
        document.body.style.background = '#2cd9f'

    }else if (horas >= 12 && horas < 18) {
        // BOA TARDE!
        img.src = 'Materiáis usados/Tarde.jpg'
        document.body.style.background = '#b9846f'

    }else { 
        //BOA NOITE!
        img.src = 'Materiáis usados/Noite.jpg'
        document.body.style.background = '#515154'
    }
}
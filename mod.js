function load() {
    var info = document.getElementById('info')
    var image = document.getElementById('imagem')
    var date = new Date()
    var hour = date.getHours()
    info.innerHTML = `Agora são ${hour}`
    if (hour >= 0 && hour < 12) {
        document.body.style.background = '#e2cd9f'
        image.src = "img-manha.png"
        //Bom dia
    } else if (hour >= 12 && hour <= 18) {
        document.body.style.background = '#b984f6'
        image.src = "img-tarde.png"
        //Boa tarde
    } else {
        document.body.style.background = '#515154'
        image.src = "img-noite.png"
        // Boa noite 
    }
}
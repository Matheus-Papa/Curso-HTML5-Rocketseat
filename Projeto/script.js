function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    // if(html.classList.contains('light')) {
    // html.classList.remove('light')
    // } else {
    //     html.classList.add()
    // }
    
    // prgar a tag img
    // se tiver light mode, adicionar a imagem light
    //se tiver sem light mode, manter a imagem normal
    // substituir a imagem
    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Mayk Brito usando uma jaqueta preta, oculos, em um fundo azul e ele está sorrindo.')
    }else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.')
    }
}
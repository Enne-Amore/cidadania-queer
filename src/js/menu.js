// Abrir o menu
// Chamando a tag com uma constante
const menu = document.getElementById('menu')

// Aplicando a função de abrir o menu
menu.addEventListener('click', () => {
    if (nav.style.right = '-810%') {
        nav.style.right = '0'
        nav.style.opacity = '100%'
    }
})

// Acesso ao menu usando o teclado
menu.addEventListener('keypress', (tecla) => {
    if (tecla.key === 'Enter') {
        tecla.target.click()

        // Deixando a primeira opção do menu focalizada ao abrí-lo
        // const inicio = document.getElementsByTagName('a')[0]
        // inicio.focus()

    }
})

// Sair do menu
// Chamada das tags por ID's
const titulo = window.document.querySelector('.titulo')
const nav = window.document.querySelector('.nav')
const conteudo = window.document.getElementById('conteudo')
const rodape = window.document.getElementById('rodape')

// Adicionar o evento nelas
titulo.addEventListener('click', sairDoMenu)
nav.addEventListener('click', sairDoMenu)
conteudo.addEventListener('click', sairDoMenu)
rodape.addEventListener('click', sairDoMenu)

// Aplicando função de sair do menu
function sairDoMenu() {
    nav.style.left = '-180%'
    nav.style.opacity = '0%'
}

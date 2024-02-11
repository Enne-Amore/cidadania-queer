// Chamada do botão
const btn_contatos = document.getElementById('btn-contatos')
btn_contatos.addEventListener('click', () => {
    // Chamada da seção
    const contatos = document.getElementById('contatos')

    // Animação da seção
    contatos.style.animation = 'contatos 1s ease-out .7s'

    // Remover animação
    setTimeout(() => {
        contatos.style.animation = 'none'
    }, 2000)
})

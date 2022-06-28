// Criando evento com o valor do scroll, para mudar o menu navigation
window.addEventListener("scroll", function(){
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0)
})

// Criando evento de clique na imagem para adicionar uma class ativada
function toggleMenu() {
    const menuMenor = document.querySelector(".menuToggle")
    const navigation = document.querySelector(".navigation")
    menuMenor.classList.toggle("active")
    navigation.classList.toggle("active")
}
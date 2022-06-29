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

// Ativando Dark-Mode
const dark = document.getElementById("dark")

dark.addEventListener('change', () => {
    document.body.classList.toggle("darkMod")
})

//Validação do Formulário
function enviar(){
    const nome = document.querySelector("#inputNome")
    const email = document.querySelector("#inputEmail")
    const mensagem = document.querySelector("#inputMensagem")
    
    const nomeValor = nome.value.trim()
    const emailValor = email.value.trim()

    if (nomeValor === "" || emailValor === "" ){
        window.alert("Preencha corretamente!")
    }
    else{
        window.alert("Mensagem enviada com Sucesso!")
        nome.value = ""
        email.value = ""
        mensagem.value = ""
    }
}

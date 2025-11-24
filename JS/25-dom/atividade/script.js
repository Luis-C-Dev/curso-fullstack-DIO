//crie um sistema em que ao clicar em um botão, o tema do site mude entre claro e escuro
const botão = document.getElementById("button")
let fundo = document.getElementById("fundo")
let rodape = document.getElementById("rodape")

function trocaTema(){
botão.classList.toggle("btnblacktheme")
fundo.classList.toggle("blacktheme")
rodape.classList.toggle("rodapeBlack")
}

botão.addEventListener('click', trocaTema)
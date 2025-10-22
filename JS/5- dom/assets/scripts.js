console.log("hello world");
let titulo = document.getElementsByTagName("h1")[0] /*pega o elemento pelo nome da tag*/
console.log(titulo); /*pega o primeiro elemento da lista*/
titulo.style.color = "blue"; /*pegando o elemento vc pode fazer alterações.// cada ponto é como se estivesse caminhando por pastas. ai vc foi pra pasta onde guarda o estilo e alterou a cor*/
let paragrafoID = document.getElementById("id") /*pega o elemento pelo ID*/
console.log(paragrafoID);
let paragrafoClass = document.getElementsByClassName("class")[0]

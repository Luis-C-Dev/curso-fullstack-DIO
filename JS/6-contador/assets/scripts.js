let numero = document.getElementById ("numero")
let numeroAtual = 0
function adicionar (){
    numeroAtual++
    numero.innerHTML = numeroAtual
}
function tirar (){
   numeroAtual--
    numero.innerHTML = numeroAtual /*o "inner.html" é como se estivesses reescrevendo o codigo do index.html sem fazer conversões*/
}
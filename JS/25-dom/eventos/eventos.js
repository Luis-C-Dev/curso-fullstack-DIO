//os eventos são ações que o usuário faz na página que podem ser capturadas pelo javascript para que possamos executar alguma ação a partir delas
//TIPOS DE EVENTOS
//eventos de mouse: click, dblclick, mouseover, mouseout, mousemove, mousedown, mouseup
//mouseover: quando o mouse passa por cima do elemento
//mouseout: quando o mouse sai de cima do elemento
//mousemove: quando o mouse se move dentro do elemento
//mousedown: quando o botão do mouse é pressionado
//mouseup: quando o botão do mouse é solto

//eventos de click: click, dblclick
//click: quando o elemento é clicado
//dblclick: quando o elemento é clicado duas vezes rapidamente

//eventos de atualização de formulário: change, input, submit, focus, blur
//change: quando o valor de um elemento de formulário é alterado e o elemento perde o foco
//load: quando a página ou um recurso é carregado
//input: quando o valor de um elemento de formulário é alterado
//submit: quando um formulário é enviado
//focus: quando um elemento recebe o foco
//blur: quando um elemento perde o foco

//como usar esses eventos?
//é como se tivesse uma propriedade do elemento que é o evento. ex: element.onclick = function(){}

const btn = document.getElementById('meuBotao') /*variavel que representa o lugar que vou clicar duas vezes ou fazer qualquer ação */
btn.ondblclick = function(){ /*escreve o nome da variavel e escreve on(evento)  e o que ele deve executar*/
   alert('Botão clicado duas vezes!')
} //essa é a maneira antiga de fazer

//maneira mais moderna de fazer
const btn2 = document.getElementById('meuBotao2') /*variavel que representa o lugar que vou clicar duas vezes ou fazer qualquer ação */
btn2.addEventListener('click', function(){  /*adiciona um evento ao botão no primeiro parametro escrevemos o nome do evento que vai acontecer no segundo parametro colocamos a função ou o nome da função */
   alert('Botão 2 clicado!')
})
 
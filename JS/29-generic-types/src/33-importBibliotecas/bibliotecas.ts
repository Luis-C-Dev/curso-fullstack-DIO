/*iremos instalar bibliotecas. bibliotecas são fontes onde temos varias coisas ja prontas onde podemos simplesmente adicionar em nosso projeto.  */
interface usuario{
    nome:string,
    idade:number
} /*podemos juntar interfaces se nomearmos elas iguais */
interface usuario{
    profissao:string
}
const usuario1:usuario={
    nome:"joao",
    idade:25,
    profissao:"desenvolvedor"
} /*agora usuario1 tem as tres propriedades */
// agora iremos instalar uma biblioteca
// no meu caso em especifico por motivos de configuração do tsconfig.json preciso mudar o import. mas isso n sera obrigatorio pra todos os Casos. normalmente essa é a forma correta mesmo.
//  forma normalmente correta: import $ from "jquery"; 

import * as $ from "jquery" /*importando o jquery, que é uma biblioteca muito usada para manipulação de elementos do DOM.  */   /*pronto os erros sumiram :) */


$("#titulo").css("color","red"); /*com o jquery podemos selecionar elementos do DOM de forma simples, nesse caso estamos selecionando o elemento com id "titulo" e alterando a cor do texto para vermelho.  */
/*exemplo do professor: */
$.fn.extend({
    novaFunção(){
        console.log("voce chamou uma nova função")
    }
})

$(document).ready(() => {
  console.log("jQuery está funcionando!");

  $("#teste").text("jQuery OK!");
});
// ecmasciriptERROR são erros que ocorrem em tempo de compilação
// São erros de sintaxe, ou seja, quando o código não está escrito corretamente
// Exemplo:
console.leg("Hello World"); // Erro de sintaxe, o correto é console.log

// Outro exemplo:
function soma(a ; b) {
  return a + b // Erro de sintaxe, o correto é usar vírgula
}
// Outro exemplo:
console.log(variavelInexistente); // Erro de referência, a variável não foi declarada

// Esses erros impedem que o código seja executado corretamente
// Para corrigir esses erros, é necessário revisar o código e garantir que a sintaxe esteja correta

// DOMexceptions são erros que ocorrem em tempo de execução
// São erros relacionados ao Document Object Model (DOM) do navegador
// Exemplo:
document.getElementById("elementoInexistente").innerHTML = "Olá"; // Erro de DOM, o elemento não existe
// Outro exemplo:
var elemento = document.querySelector("#meuElemento");
elemento.style.color = "red"; // Erro de DOM, se o elemento não existir, dará erro
// Esses erros ocorrem quando tentamos acessar ou manipular elementos do DOM que não existem ou não estão disponíveis
// Para corrigir esses erros, é necessário garantir que os elementos do DOM existam antes de tentar acessá-los ou manipulá-los

// que agonia ta vermelho no vscode kkkk
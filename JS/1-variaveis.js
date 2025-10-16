var testando = "Hello World"
console.log(testando)

let nome = "João"
console.log(nome)
nome = "Maria"
console.log(nome)
const sobrenome = "Silva"
console.log(sobrenome)
// sobrenome = "Souza" // ERRO

// var e let são mutáveis
// const não é mutável
// eles funcionam como contêineres para armazenar valores.
// eles podem ser somados, multiplicados, divididos, etc.

var idade = 20
var idade2 = 5
var soma = idade + idade2
console.log(soma)

// com as palavras eles juntam os textos
var nomeCompleto = nome + " " + sobrenome
console.log(nomeCompleto)

// Boas práticas — exemplos rápidos

// 1) Preferir const, usar let quando for reatribuir, evitar var
const PI = 3.14159; // constante "verdadeira" (convencional: UPPER_SNAKE)
let contador = 0;
contador++; // reatribuição permitida com let

// 2) Nomes descritivos e camelCase
const nomeCompletoDoUsuario = `${nome} ${sobrenome}`; // template literal

// 3) Inicializar variáveis para evitar undefined
let total = 0;

// 4) Usar comparação estrita
if (idade === 20) {
    // correto: compara valor e tipo
}

// 5) Const com objetos/arrays: impede reatribuição da referência, não mutação
const pessoa = { nome: "Ana" };
pessoa.nome = "Carlos"; // válido
// pessoa = {}; // ERRO: reassignment

// Para tornar imutável (rasa)
const usuarioImutavel = Object.freeze({ id: 1, nome: "Ana" });
// usuarioImutavel.nome = "João"; // não terá efeito em modo estrito

// 6) Evitar variáveis globais
(function() {
    const privado = "não vaza";
})();

// 7) Use "use strict" em projetos para detectar erros cedo
// 'use strict';

// 8) Comentários curtos e úteis + funções pequenas e nomeadas
// calcula média de duas idades
function media(a, b) {
    return (a + b) / 2;
}
console.log(media(idade, idade2));
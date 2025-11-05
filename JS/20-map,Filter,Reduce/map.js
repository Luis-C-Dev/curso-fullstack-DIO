// o map cria um novo array a partir de um array existente, aplicando uma função a cada elemento do array original.
// ex:
const numeros = [1, 2, 3, 4, 5];
const numerosMultiplicados = numeros.map((numero) => numero * 2);
console.log(numerosMultiplicados); // [2, 4, 6, 8, 10]   
// sintaxe: array.map(callback,thisArg)
// callback(itemAtual, índice, array)
// callback: Função que será executada em cada elemento do array.
// itemAtual: O elemento atual que está sendo processado no array.
// índice (opcional): O índice do elemento atual que está sendo processado no array.
// array (opcional): O array original sobre o qual o map foi chamado.
// thisArg (opcional): Valor a ser usado como this quando executar o callback.


// map vs forEach
// map retorna um novo array com os resultados da função aplicada a cada elemento, enquanto forEach apenas executa a função para cada elemento sem retornar um novo array.
const numeros2 = [1, 2, 3, 4, 5];
const numerosMapeados = numeros2.map((numero) => numero * 3);
console.log(numerosMapeados); // retorna [3, 6, 9, 12, 15]

 numeros2 = [1, 2, 3, 4, 5];
 numeros2.forEach((item => item * 3)); // não retorna nada
 console.log(numeros2); // [1, 2, 3, 4, 5]

//   para que o forEach modifique o array original, é necessário fazer assim:
 numeros2.forEach((item, index, arr) => {
    arr[index] = item * 3;
 });
 console.log(numeros2); // [3, 6, 9, 12, 15]

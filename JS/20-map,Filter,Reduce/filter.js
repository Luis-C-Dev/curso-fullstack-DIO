//  cria um novo array onde somente itens que passam na condição do callback são mantidos.
// ex:
const numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = numeros.filter((numero) => numero % 2 === 0);/*no caso aqui ele esta filtrando somente aqueles que quando divididos por dois sobre apenas zero */
console.log(numerosPares); // [2, 4, 6]
// sintaxe: array.filter(callback,thisArg)
const numerosInpar = numeros.filter ((numero)=> numero % 2 != 0)
console.log(numerosInpar)
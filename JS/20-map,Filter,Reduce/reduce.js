// ele não retornara um novo array. ele executara uma função em cada item e retornara um valor unico
// ex:
let array = [1,2,3,4,5,6]
let resultado = array.reduce((acc, n) => acc + n, 0);/*o '0' é o valor inicial do acumulador. como ele começa no 0 vai ficar 0+1. o acumulador vai atualizar e se tornar 1 e no proximo item do array vai executar 1+2 o novo valor do acumulador sera 3 e assim vai indo */
console.log (resultado)

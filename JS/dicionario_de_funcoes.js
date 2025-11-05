// criado pelo tio gpt
// dictionary-array-methods-with-comments.js
// ========================
// DICIONÁRIO DE MÉTODOS DE ARRAY (com comentários explicativos)
// Execute no Node ou no console do navegador.
// ========================

// forEach
// Percorre cada item do array e executa a função para cada um.
// Não cria um novo array e não retorna valor (undefined).
// Uso típico: efeitos colaterais (console, mutação externa).
const nums1 = [1, 2, 3];
nums1.forEach((n) => {
  // Aqui fazemos ação com cada item (ex.: imprimir)
  console.log("forEach item:", n);
});
// Saída esperada:
// forEach item: 1
// forEach item: 2
// forEach item: 3

// map
// Percorre o array e retorna UM NOVO ARRAY com cada item transformado.
// Não altera o array original.
const nums2 = [1, 2, 3];
const dobro = nums2.map((n) => {
  // transformamos n em n * 2
  return n * 2;
});
console.log("map (dobro):", dobro); // [2, 4, 6]
// nums2 continua [1,2,3]

// filter
// Cria um novo array com os itens que PASSAM no teste (callback retorna truthy).
const nums3 = [1, 2, 3, 4];
const pares = nums3.filter((n) => {
  // retorna true para números pares
  return n % 2 === 0;
});
console.log("filter (pares):", pares); // [2, 4]

// find
// Retorna o PRIMEIRO item que satisfaz a condição. Se não achar, retorna undefined.
const nums4 = [1, 2, 3, 4];
const primeiroMaiorQue2 = nums4.find((n) => {
  return n > 2;
});
console.log("find (primeiro > 2):", primeiroMaiorQue2); // 3

// findIndex
// Retorna o ÍNDICE do primeiro item que satisfaz a condição. Se não achar, -1.
const nomes = ["ana", "bruno", "carla"];
const idxCarla = nomes.findIndex((nome) => nome === "carla");
console.log("findIndex (carla):", idxCarla); // 2

// some
// Retorna true se PELO MENOS UM item passa no teste.
const nums5 = [1, 2, 3];
const temMaiorQue2 = nums5.some((n) => n > 2);
console.log("some (existe > 2):", temMaiorQue2); // true

// every
// Retorna true se TODOS os itens passam no teste.
const nums6 = [1, 2, 3];
const todosPositivos = nums6.every((n) => n > 0);
console.log("every (todos > 0):", todosPositivos); // true

// reduce
// Acumula valores do array em um único resultado.
// Exemplo: soma todos os números. O segundo argumento (0) é o valor inicial do acumulador.
const nums7 = [1, 2, 3];
const soma = nums7.reduce((acumulador, n) => {
  return acumulador + n;
}, 0);
console.log("reduce (soma):", soma); // 6

// push
// Adiciona item ao final do array (modifica o array).
const arrPush = [1, 2];
arrPush.push(3);
console.log("push:", arrPush); // [1, 2, 3]

// pop
// Remove e retorna o último item do array (modifica o array).
const arrPop = [1, 2, 3];
const removido = arrPop.pop();
console.log("pop (removido):", removido); // 3
console.log("pop (array agora):", arrPop); // [1, 2]

// shift
// Remove e retorna o primeiro item do array (modifica o array).
const arrShift = [1, 2, 3];
const primeiro = arrShift.shift();
console.log("shift (removido):", primeiro); // 1
console.log("shift (array agora):", arrShift); // [2, 3]

// unshift
// Adiciona item(s) no início do array (modifica o array).
const arrUnshift = [2, 3];
arrUnshift.unshift(1);
console.log("unshift:", arrUnshift); // [1, 2, 3]

// includes
// Retorna true se o array contém o valor (usa igualdade estrita).
console.log("includes (2):", [1, 2, 3].includes(2)); // true

// indexOf
// Retorna o índice do item (ou -1 se não existir).
console.log("indexOf ('b'):", ["a", "b", "c"].indexOf("b")); // 1

// join
// Junta os itens do array em uma string, separados pelo separador informado.
console.log("join:", ["a", "b", "c"].join("-")); // "a-b-c"

// slice
// Retorna uma cópia superficial de parte do array (não modifica o original).
const arrSlice = [1, 2, 3, 4];
console.log("slice (0,2):", arrSlice.slice(0, 2)); // [1, 2]
console.log("array original (slice não modifica):", arrSlice); // [1,2,3,4]

// splice
// Altera o array original: pode remover e/ou adicionar itens.
// splice(indiceInicio, quantosRemover, ...itensParaAdicionar)
const arrSplice = [1, 2, 3];
arrSplice.splice(1, 1); // remove 1 item a partir do índice 1
console.log("splice (após remover índice 1):", arrSplice); // [1, 3]

// sort
// Ordena o array in-place (modifica o original). Para números, passe função de comparação.
const arrSortNum = [3, 1, 10, 2];
// Sem comparator, sort converte para string e ordena lexicograficamente.
// Para ordenar numericamente:
arrSortNum.sort((a, b) => a - b);
console.log("sort (numérico):", arrSortNum); // [1,2,3,10]

// reverse
// Inverte a ordem do array (modifica o original).
const arrReverse = [1, 2, 3];
arrReverse.reverse();
console.log("reverse:", arrReverse); // [3,2,1]

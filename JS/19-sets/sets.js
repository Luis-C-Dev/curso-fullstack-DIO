// sets é como se fosse arrays mas servem pra guardar apenas valores unicos. comparação
let passado = console.log(' isso é uma mensagem que esta dentro de uma variavel')
let array =[1, 3+5, console.log('este é o terceiro item do array chamado array'), passado]

let arraySet = [1,2,3,4,5,6,7,8,9]
let set = new Set(arraySet)
console.log (set)
set.add(20)/*adiciona um item*/
console.log (set)
set.has(1)/*true*//*pergunta se tem ou não o que eu escrevi*/
console.log (set.has(1))
set.delete(1) /*remove items*/
console.log (set)
set.has(1)/*false*/
console.log (set.has(1))

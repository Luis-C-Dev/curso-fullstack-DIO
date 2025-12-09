/*Generic Types (genéricos) no TypeScript permitem criar funções, classes ou tipos 
que funcionam com qualquer tipo, mantendo a tipagem forte.

É como um molde (template) cujo tipo só é decidido quando a função é usada.
“Essa caixa pode guardar QUALQUER coisa, mas quando eu escolher o tipo, 
ela só vai aceitar aquilo.” 
*/

//ex:
let numero = [1,2,3,4,5,6,7,8,9] /*array numero */
let letra = ['a','b','c','d']

/*usamos 'any[]' pra dizer que pode ser qualquer coisa.
O 'T' é usado como abreviação de "type". por isso é boa pratica usar 'T' */

function somar<T>(array: any[], num: T){ 
    /*O T é o tipo que será definido na chamada da função.
    Ele fica fixo naquele chamado e pode mudar em outra chamada. */
    
    return array.map((numero) => numero + num)
}

console.log(somar(numero, 2)) /*[ 3, 4,  5,  6, 7, 8, 9, 10, 11] */
console.log(somar(letra, 2)) /*[ 'a2', 'b2', 'c2', 'd2' ] */

// Isso é útil quando precisamos de um código que funcione para mais de um tipo.
// Sem generics, teríamos que escrever várias funções semelhantes.





// sintaxe final
function nada <T/*generic type = T */> ( parametro : T){
    /*codigo */
}
nada('x')
/*ou */
nada(10)
/*n da erro */
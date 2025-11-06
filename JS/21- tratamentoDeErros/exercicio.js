// crie uma função que recebe um array e um numero. check
// realize as seguintes validações:
// se os parametros não forem enviados, lance um erro do tipo ReferenceError check
// se o array não for do tipo 'object', lance um erro do tipo TypeError check
// se o numero não for do tipo 'number', lance um erro do tipo TypeError check
// se o tamanho do array for diferente do numero, lance um erro do tipo RangeError check
// utilize a função criada em um bloco try...catch check
// no catch, filtre as chamadas de erro por tipo de erro utilizando o operador instanceof check


function exercicio (array,numero){
   if (array == null || numero == null) {throw new ReferenceError('erro por não ter um dos parametros')}
   else if (!Array.isArray(array)|| typeof numero != 'number') {throw new TypeError('erro de tipo primitivo')}
   else if (array.length !== numero) {throw new RangeError('incompatibilidade com o tamanho do array com o numero')}

}

function verificaExercicio (arr,num){
    try{
        exercicio(arr,num)
    }
    catch(e){
        console.log(e)/*tanto posso mostrar o erro junto da mensagem de quando declarei o erro quanto posso mostrar a mensagem quando for confirmado o tipo de erro nas linhas abaixo*/
        if (e instanceof ReferenceError) console.log('erro por não ter um dos parametros')
        else if ( e instanceof TypeError) console.log(' erro de tipo primitivo')
        else if (e instanceof RangeError) console.log('incompatibilidade com o tamanho do array com o numero')
        else console.log('erro generico') /*tambem poderia ao inves de colocar console.log poderia declarar como erro mesmo usando o throw. mas usei console.log pra mudar */
            
    }
}

let conjunto = [1,2]
let dois = 2

verificaExercicio(conjunto,'teste')
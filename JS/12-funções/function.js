// // estrutura da função
function nome (parametro){
    console.log(`e aqui eu vou mostrar o parametro ${parametro}`)
}
// chamado da função
nome('parametro')

// podemos fazer assim tabem. se chama função anonima
let soma = function (a,b) {return a+b}
console.log(soma(1,1)) /*2*/
console.log(soma(1,3))/*4 */

// função autoinvocavel
let teste = (
    function (a,b) {
        return a+b

    }
)(1,2)
console.log(teste)

// callbacks: são basicamente funções que são passadas como parametro para outras funções
function soma (a,b){ /*aqui uma é uma função que só soma*/
    return a+b
}
function calculo_que_tem_soma (num1,num2,){ /*aqui uma função que usa a função soma dentro dela*/
    return soma(num1,num2)*2
}
console.log(calculo_que_tem_soma(1,2)) /*6*/



// em uma funnção quando precisamos colocar os items de um array como parametros usamos o spread operator ...
let numeros = [1,2,3]
function soma3numeros (a,b,c){
    return a+b+c
}
console.log(soma3numeros(...numeros)) /*6*/ /*esses 3 pontos é como se estivesses falando 'respectivamente' */
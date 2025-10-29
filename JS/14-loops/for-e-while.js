// estrutura for:
// for (let index = 0; index < array.length; index++) {/*index é o valor inicial. quando ele chegar no valor que eu quero o loop acaba. depois do primeiro ponto e virgula é onde eu decido quando ele deve parar na ultima parte é reseravda pra mudar o index. (acho que roda outros codigos tbm mas não é normal fazer isso. normalmente só se usa pra adicionar mais um ao index: index++*/
//     const element = array[index];
//     /*essa parte pós chaves é o que deve ser executado toda vez que o index for confirmado que esta menor que o valor decidido. (no caso array.length) ou seja toda volta que ele fizer ele vai executar o seguinte comando dentro das chaves */
// }

//estrutura for in:
let usuario = {
nome: 'luis',
sobrenome: 'carlos',
idade : 19,
mensagem: 'esse sou eu estudando.'
}
//FOR IN: serve pra percorrer dados de um objeto sem usar o metodo usado no exercicio anterior em que percorreria o array usando o index.
//ISSO É PRA OBJETO
function lerObjeto(objeto){
    for ( propriedades in objeto) {
        console.log(`na propriedade: ${propriedades} tem o seguinte conteúdo: ${objeto[propriedades]}`)
    }

}
lerObjeto(usuario)

//FOR OF: é a mesma coisa do for in só que serve pra arrays e variaveis
// ISSO É PRA ARRAYS E VARIAVEIS.
let numeros =[1,2,3,4,5,6,7,8,9,40028922]
function lerNumeros(conjunto){
    for(num of conjunto){
        console.log (num)

    }
}
lerNumeros(numeros)


// estrutura while. é simples. vai executar o comando até a condição se tornar falsa
//lembre-se vc tem que programar algo que sera testado sempre que der a volta pra que uma hora seja falsa. se não a repetição não tera fim.
let contador = 0
//while signfica enquanto
while (contador <=10) {
    console.log(`${contador}`)
    contador++
}
// estrutura do while. ele é bem parecido com o de antes. só que ele vai executar o codigo pelo menos uma vez mesmo que a condição seja falsa
let contador2= 10
do{
    console.log('eu fui executado mesmo com a condição falsa')
    contador2++
}while(/*typeof */contador2=="number")
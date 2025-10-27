// variaveis como let,cost e var. podem armazenar valores. colocando um unico dado vai ser só aquele dado. no array representado pelos cochetes([]) podem ser armazenados varios dados. e por fim os objetos podem armazenar varios arrays. os objetos são representados pelas chaves({})
// exemplo de objeto:

let objeto = {
    nomes: ["eduardo","luis","etc"], /* é importante sempre que terminar um array finalizar com virgula (,)  significa fim do array proximo array*/
    idades: [19, 18, 20]
}
console.log (objeto)
// não é obrigatorio ser array. podem ser valores unicos tbm
let objeto2 ={
    nome: "luis",
    idade: 19,
    sexo: 'masculino',
    interesses: ['animes','jogos','musica','programação']
}
console.log(objeto2)
console.log(objeto.nomes) /*assim podemos selecionar o que queremos dentro do array*/
objeto.nomes.push('dado adicionado')/*os comandos ainda funcionam. pois mesmo que esteja em um objeto os items de dentro ainda são arrays. ent ainda funciona os comandos dados na aula anterior*/
console.log(objeto.nomes)
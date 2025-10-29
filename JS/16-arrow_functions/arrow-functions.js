// arrow function é uma forma reduzida de escrever funções
// estrutura da função normal dentro de uma variavel(o dado dessa variavel vai ser um comando)
let função = function(parametro){
    // comando aqui
}
//uma forma um pouco mais reduzida
// eu acho que isso ja é uma arrow function
let função2 = ()=>{
    return 'hello world'
}

// mais reduzida possivel
//esses parenteses são o suficiente pra declarar que isso é uma nova função
let função3 =() => {'hello world'}

//RESTRIÇÕES:   -this sempre sera o objeto global e metodos de manipulação de dados usando o this não funcionaram.
//              -não existe o objeto 'arguments'
//              -o construtur(ex: new meuObjeto()) tabem não pode ser utilizado
// por esses motivos é recomendado usar a arrow functions apenas como metodos de objeto como visto na aula 15. la eu usei o function normal dentro do objeto. eu poderia ter feito a mesma coisa usando o arrow function
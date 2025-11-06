// objeto ERROR
// sintaxe do objeto Error
new Error(menssagemDoErro)

// pode ter um nome o erro
const meuErro = new Error('Mensagem de erro personalizada')
meuErro.name = 'invalidStringError'
throw meuErro

// ou pode passar o nome do erro como segundo parametro
const meuErro2 = new Error('Mensagem de erro personalizada', {name: 'invalidStringError'})
throw meuErro2



/*poo significa programação orientada a objetos. ela busca facilitar ao escrever codigos onde tenha varios usuarios por exemplo */
// antes por exemplo, se eu quisesse criar um sistema de usuarios, eu teria que criar varios usuarios assim:

//prototipo: todos os metodos e propriedades de um objeto javascript vem do prototype
//o objeto object.prototype esta no topo da cadeia de prototipos
const user1 = {
    name: 'joao',
    email: ''
}// no console do google se eu escrever console.log(user1.__proto__) eu vou ver que ele aponta para object.prototype

//classe: não existe nativamente em javascript, o class no js é o que chamamos de syntatic sugar (acucar sintatico) ou seja, é uma forma mais simples de escrever uma função construtora
//acho que aprendi aqui vou criar meu exemplo

class usuarios { /*cria o ambiente de criação de novos objetos (vamo assim dizer) */
    constructor(nome,idade,email){/*de acordo com esse padrão novos objetos serão criados */
        this.nome = nome
        this.idade = idade
        this.email = email
    }
    cumprimentar(){/*cada metodo que eu criar vai servir pra eu fazer o que eu quiser com os dados do objeto criado. posso alteralos como posso apenas usalos pra o que eu quiser */
        console.log(`olá ${this.nome}, como vai?`)
    }
    alterarEmail(novoEmail){
        this.email = novoEmail
    }
}
new usuarios('luis', 19, "usuario@gmail.com")/* para criar um novo objeto eu uso a palavra new seguida do nome da classe e parenteses. nos parenteses teram os parametros do constructor */
//atenção ele só cria o objeto, mas não armazena em lugar nenhum. para armazenar eu faço assim:
const user2 = new usuarios('maria', 25, 'usuario@gmail.com')
//para usar os metodos eu faço assim:
user2.cumprimentar()//olá maria, como vai?
console.log(user2.email)//usuario@gmail.com



//------------------------------------------------------------------------------------------------------------------
//vamos falar agora de get() e set()
//GET serve pra pegar um valor de uma propriedade do objeto
class usuarios { /*cria o ambiente de criação de novos objetos (vamo assim dizer) */
    constructor(nome, idade){/*de acordo com esse padrão novos objetos serão criados */
        this.nome = nome
        this.sobrenome = 'silva'/*pode ter propriedades que n são passadas por parametro */
        this.idade = idade
    }
    get pegarNome(){
        return this.nome
    }
    pegarNome(){/*sem o get teria que colocar parenteses */
        return this.nome
    }
    get somarNumero(){
        return this.nome + this.idade
    }
    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
  
}
let user3 = new usuarios('ana',22)
console.log(user3.pegarNome)//ana usando o get temos um codigo mais limpo e facil de entender
console.log(user3.pegarNome())/*sem o get teria que colocar parenteses */
//o get tbm consegue fazer calculos e retornar valores derivados de outras propriedades
let user4 = new usuarios(5,1) /*só um exemplo o nome vai ficar como numero */
console.log(user4.somarNumero)//6
/*o get tbm tem outro poder que é mostrar propriedades que n existe ex: */ /*no fim das contas é como se o get adicionasse uma propriedade ao prototipo. ai n precisa usar uma função. só chama como se fosse uma porpriedade */
let user5 = new usuarios('carlos',30)
console.log(user5.nomeCompleto)//carlos silva
/*aqui parece q o get criou a propriedade nomeCompleto. mas é como se fosse uma função disfarçada de propriedade. ONDE VC CRIA UMA PROPRIEDADE COM PODERES DE UMA FUNÇÃO */
/*o chamado é igual uma propriedade, como se nomeCompleto realmente ja existisse dentro do prototipo */
/*é como se a propriedade viesse junto acoplada de algum codigo, comando, função, metodo */
//------------------------------------------------------------------------------------------------------------------

//SET serve pra alterar o valor de uma propriedade do objeto isso daria certo de maneira comum assim: user5.nome = 'roberto'
/*a parte legal do set é que da pra regular as coisas. limitando as possibilidades pra evitar erros ex: */

class jovens{/*cria o ambiente  */
    constructor(idade, nome){/*de acordo com o padrão cria novos objetos */
        this._idade = idade /*a underline serve pra diferenciar do set idade continua na linha 95 */
        this._nome = nome
    }

    set nome(novoNome){
        this._nome = novoNome.toUpperCase() /*tbm podemos colocar regras ao que for escrito. n somos obrigados a limitar mas tbm modificar o que vira */
        
    }

    get sóVerIdade(){ /*só apresenta o dado que eu quero. nesse caso */
        return this._idade
    }
    set idade(novaIdade){/*aqui ele serve pra filtrar quando pode ou não ser introduzido o dado */
        if (novaIdade < 0) {
            console.log('a idade não pode ser negativa')
             return }

        if(novaIdade > 200) {
            console.log ('a idade deve ser realista') /*da linha 84 até a linha 94 só mostra o que deve fazer caso a nova idade seja uma dessas. */
            return} /*return é obrigatorio pois ele finaliza a tarefa. ent quando por exemplo a nova idade for mais de 200 ele mostra no console que a idade deve realista e no fim n retorna nada. ou seja não vai atualizar o valor da idade */

        if (typeof novaIdade !== "number") {
            console.log('a idade deve ser um numero')
            return}
/*se eu colocasse la em cima do mesmo jeito de sempre this.idade = idade na hora de escrever o codigo o js iria se confundir e ao inves de atualizar o valor da idade iria chamar o metodo do set denovo e ficaria em um loop. pra resolver isso é meio que só mudar o endereço da propriedade colocando só underlina antes */
         this._idade = novaIdade /*se não cair em nenhum if ent ele não vai cair em nenhum return logo tudo vai ser executado os if's vão ser todos executados e resultar false e */
    } /*essa ultima linha vai ser executada normalmente ou seja alterando a idade */
}

let jovem1 = new jovens(22,'jorge')
jovem1.nome= 'jorge' // JORGE
jovem1.idade = 23 // jovem.idade = 23
let jovem2 = new jovens (30)
jovem2.idade = -23 // no console: a idade não pode ser negativa

//--------------------------------------------------------------------------------------------------
//HERANÇA: é quando uma classe herda propriedades e metodos de outra classe

class pai { /*cria o ambiente de criação de objetos  */
    constructor(nome, idade){ /*seguindo o padrão... */
        this.nome = nome
        this.idade = idade
    }
    apresentação(){/*usando a class normalmente */
        console.log(`seu nome é ${this.nome}  e sua idade é ${this.idade}`)
    }
}
class filho extends pai{/*aqui esta criando o ambiente de criação de objetos FILHOS no codigo esta dizendo que o filho é uma extensão do pai */
    constructor (nome, idade, emprego){/*seguindo esse padrão... */
        super(nome, idade)/*esse super basicamente é o que diz o que vem do pai. basicamente um crtl-c  crtl-v desse codigo:this.nome = nome this.idade = idade */   
        /*não é obrigatorio puxar todas as propriedades do pai. apenas aquelas que vc quer usar. se quisesse usar só a idade ficaria super(idade) n teria problema nenhum */
        this.emprego = emprego/*esse tem que escrever mesmo ja que ele não vem do pai. é novo */
    }
    tratandoComoUmaClassNormal(){/*daqui ele ja age como uma classe normal */
        console.log(`rodando algum codigo esse é o seu emprego ${this.emprego} e esse seu nome ${this.nome}`)
    }
}
let pai1 = new pai('luis', 19)/*aqui usa as coisas da classe pai */
pai1.apresentação() //seu nome é luis e sua idade é 19

let filho1 = new filho('homer',2 ,'desempregado')/*e aqui usa as coisas da classe filho */ /*no fim ambos são iguais apenas que algumas propriedades do pai vão para o filho */
filho1.tratandoComoUmaClassNormal()//rodando algum codigo esse é o seu emprego desempregado e esse seu nome homer
filho1.apresentação()//seu nome é homer e sua idade é 2
//o filho herdou o metodo apresentação do pai e tbm tem o metodo tratandoComoUmaClassNormal que é exclusivo do filho
//------------------------------------------------------------------------------------------------------------------

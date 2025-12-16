//criando variaveis com propriedades readonly e privates
//vamos primeiro relembrar como funciona poo:programação orientada a objetos. nela meio que podemos criar metodos como o .map, filter.
//criamos um objeto e nesse objeto teremos metodos que nós criamos. ai chamamos o (nome do objeto.nome do metodo) e podemos manipular as informações com mais facilidade
class usuarios{
    nome:string /*no ts devemos tipar os parametros antes de colocar no this.nome ou idade */
    idade:number
    constructor(nome:string ,idade:number){
        this.nome = nome
        this.idade = idade
    }
    cumprimentar(){
        console.log(`ola meu querido amigo ${this.nome}`)

    }
    aumentarIdade(num:number, x:string){
        console.log(this.idade+num+'nisso estou fazendo metodo e nele posso colocar quantos parametros eu precisar'+ x)
    }
    set alterarIdade(num:number){
        this.idade += num
        console.log(`nisso eu usei o set. ele aceita um parametro somente e ele pode mudar os valores alem de adicionar regras usando if e else`)/*tentar esplicar o que eu fiz na aula de poo eu fiz if e else pra todas as coisas que eu n queria que acontecesse q ia causar erro. ai cada situação caia em um return q dava no console o pq n podia ser daquele jeito. se n caisse em nenhum ele n ia pra nenhum return q dava mensagem no console e ja ia pra a mudança de dados da propriedade */
    }
    get mostranome(){
       return console.log(`seu nome é ${this.nome} isso é usando get. ele n tem propriedade e serve só pra chamar alguma informação. n pode alterar as propriedades`)
    }
}
let juninho = new usuarios('juninho', 30)
juninho.alterarIdade = 3 /*assim usa o get e set */
juninho.mostranome
juninho.cumprimentar() /*e assim é quando é normal sem get nem set */

/*tem as classes filho tbm mas isso ja foi praticamente visto na aula de interface. é a mesma coisa usamos o extends pra dizer que vem do pai e tem tbm o super()que basicamente dizemos o que é que queremos do pai.só o nome? só a idade? o nome e idade?. ai listamos no super e pronto. os metodos funcionam do mesmo jeito*/
//PARABENS VOCE REVISOU POO
/*agora vamos misturar interface com poo */



interface cachorro { /*isso some quando compilado pro js é só pra proteção do class */
    readonly nome: string // somente o que é público entra na interface
    parque?: string
    // ❌ idade foi REMOVIDA daqui porque agora ela é private na classe
}

/*o implements serve só pra garantir que os objetos que serão criados sejam obrigados a ter o nome e a idade */
class meuCachorro implements cachorro { /*o interface misturado com o class é só pra obrigar na hora da programação o uso necessario do que eu decidi no interface. se eu programando esquecer o nome ou idade no class. o class n daria problema pois ele pensa que essa é a forma correta */

    readonly nome: string
    private idade: number // private: não pode aparecer na interface

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    mostrarIdade() {
        return this.idade
    }

    envelhecer() {
        this.idade++
    }
}

const jorjinho = new meuCachorro('jorjinho', 5) /*se eu tirar o nome ou idade aqui o ts ja avisa que ta faltando */

/*
RESUMO:

ERRO QUE ACONTECEU:
- a interface cachorro exigia "idade" pública
- a classe declarou "idade" como private
- isso quebra o contrato do implements

REGRA IMPORTANTE:
- interface descreve SOMENTE o que é público
- membros private nunca entram em interfaces

readonly:
- impede alteração depois da criação
- protege dados imutáveis

private:
- impede acesso fora da classe
- protege o estado interno
*/

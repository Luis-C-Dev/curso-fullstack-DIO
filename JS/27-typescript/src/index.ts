console.log('hello world estou funcionando com typescript em um navegador')
/*funções em typescript */
/*dessa forma declaramos variaveis no ts */
let usuario: string = 'meu nome huehue'
/*em uma função é parecido com isso */
function somar(a,b){
   let resultado =  a + b
    return console.log (resultado)
}
/*aqui n vai dar erro mas ele reclama ja que n estamos mostrando o tipo do a e b */
/*maneira correta: */
function somarCerto (a: number, b: number){
     let resultado: number =  a + b
    return console.log (resultado)
}
somar(10, 10)
somarCerto(10, 11)
somarCerto('teste','') /*exibe erro pois foi definido que é um numero e não uma string */ /*ele até executa mas mostra que esta errado */
somar('tes','tando')/*n exibe erro pois n foi declarado o tipo. ent ele n sabe se tem que ser numero ou string */

/*o ts é igual ao js tirando o fato das tipagens isso é em tudo */
/*vamos ver agora */

//interface = muito parecido com poo.

//*alem de manipular os tipos decidindo qual o tipo de cada variavel. podemos criar 'tipos' usando a interface. assim: */
interface funcionario{ /*cria o ambiente de criação de 'tipos' */
    nome: string /*criamos uma propriedade que só pode ter dentro dela o que eu decidir. no caso só pode ter uma string */
    função: /*ERRADO => string =*/ 'gerente'|'sub gerente'| 'caixa' /*n pode declarar o tipo quando estamos decidindo o que pode ser aplicado a propriedade*/
}
/*agora criamos a variavel */
let jorgin: funcionario = { /*o tipo dele é funcionario e as propriedades dessa variavel só pode ser aquilo que eu decidi antes */
nome: 'jorgin',
função: 'sub gerente' 
}

/*tambem podemos fazer da mesma forma que faziamos no poo usando o extends pra criar uma interface filha */
interface estagiario extends funcionario{/*n se coloca '=' quando é extends */
    bolsaAuxilio: boolean
}
/*criando uma variavel filha */
let luis: estagiario ={
    nome:'luis',
    função:'caixa',
    bolsaAuxilio: true
}
/* interessante saber: Interfaces não têm super() porque elas NÃO criam objetos nem executam código.
Elas não têm construtor, não têm métodos reais, não têm valores, nada disso.
Elas só descrevem tipos.*/

/*pra não usar um parametro não desejado usamos o omit que é pra deixar de usar parametros que vc n vai usar */

interface filhoDoDono extends Omit<funcionario, 'função'>{
    recebe: number
}
let jeffBezzos: filhoDoDono = {
    nome: 'jeff bezzos',
    recebe: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999
}/*não tem função esse riquinho */

//type
/*ao invés de usar o ocult podemos usar um mais simples que é o type. nele podemos juntar duas interfaces e usar o que quisermos de cada um. sem obrigatoriamente usar todas as propriedades */

interface cachorro{
    nome: string,
    raça: 'pitbull'| 'dobberman'|"husky"| 'caramelo'
}

interface cor{
    cor: 'laranja'|'branco'| 'preto'| 'branco com preto'
}

interface outros{
    alimentação:string,
    atividade: 'brincar'| 'comer'| 'dormir' /*ao inves de usar essa barras que significa 'ou' poderia ter usado & mas n faz muito sentido pois passaria ser obrigatorio escrever todos os parametros */
}

type cachorrao = cor | cachorro | outros

let nsei: cachorrao = {
    nome:'doguinho',
    raça: 'pitbull',
    cor: 'preto',
    atividade:'dormir' /*poderia ter usado alimentação mas eu não quis. usando type n é obrigatorio definir todos os parametros   */

    
}
// o omit serve basicamente pra omitir algo que voce não queira
interface pessoa {
    nome:string,
    idade:number,
    nacionalidade:string
}
// não precisa de nacionalidade por que ja esta escrito que é brasileiro
interface brasileiro extends Omit <pessoa,'nacionalidade'>{ /*Omit<nome-da-interface, nome-do-que-quer-omitir> */

}
const brasileiro:brasileiro={
    nome: "qualquer coisa",
    idade: 527
}

/*ja vi isso antes. mas o professor só ensinou na ultima aula */
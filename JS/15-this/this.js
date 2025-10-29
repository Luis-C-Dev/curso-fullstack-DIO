//não gostei mto de this
// this vai buscar o objeto mais pai. mais global de um sistema. EX:

let objeto = {
    nome:'luis',
    sobreNome:'carlos',
    nomeCompleto: function(){
    console.log(this.nome +' '+ this.sobreNome)
}
}
objeto.nomeCompleto()

//acho uma porcaria confusa. prefiro escrever:
console.log(`meu nome é ${objeto.nome} ${objeto.sobreNome}`)
//ao invez de chamar this chamo logo o nome da coisa que eu quero
//talvez seja bom quando a gente não sabe qual é o componente global. mas se a gente ta desenvolvendo algo acredito que a gente vai saber sim
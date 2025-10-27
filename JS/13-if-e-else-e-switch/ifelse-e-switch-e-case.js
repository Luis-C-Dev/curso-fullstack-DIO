// estrutura if e else
    // if (condição) {
    //     comando
    // } 
    // else if(condição){
    //     comando
    // }
    // else { /*condição opcional*/
    //     comando
    // }
    // switch e case é  muito louco. serve quando precisamos fazer varias checagens.// equivale ao "==="//é extremamente util quando precisamos fazer varios else if//é sempre acompanhado do defalt. caso não se aplique a nenhuma opção//ex:
    function escolha (id){
        switch(id){
            case(1): return console.log('cavalo')
            case(2): return console.log('jorje')
            case(3): return console.log('porco')
            case(4): return console.log('ps4')
            defalt: return console.log ("não é uma opção escolhivel")
        }
    }
    escolha(4)

    function entreQual (numero){
        switch(numero){
            case(numero < 10): return console.log('esse numero é menor que 10')
            case(10 <= numero && numero < 20): return console.log('esse numero esta entre 10 e 20') /*não da certo. porque ele não verifica boolean ent não percebe que se é verdadeiro ou falso se o numero é maior ou menor que porcaria*/
            case(20 <= numero && numero < 30): return console.log('esse numero esta entre 20 e 30')
            default: return console.log(" isso não é um numero")
        }
    }
    entreQual(15)


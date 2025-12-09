/*iremos desenvolver condicionais a partir de parametros */
interface usuario{
    nome:string
    email:string
}
interface admin extends usuario{
    cargo: 'super'|'normal'|'supervisor'
}

function verifica (serVivo: usuario | admin){
    //serVivo.cargo /*n posso fazer isso pois não é garantido se eu sou adm ou só usuario comum */
    /*correto */
    if ('cargo' in serVivo) console.log('vai pra area dos admin') /*usando o 'in' podemos verificar se tem algo especifico dentro de algo. no caso vimos se tem cargo dentro de serVivo */
        else console.log ('vai pros usuarios')
}

let jorgin:admin ={
    nome:'jorgin',
    email:'jorgin@gmail.com',
    cargo: 'normal'
}
verifica(jorgin)
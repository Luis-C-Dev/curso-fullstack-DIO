// usando uma interrogação(?) em uma propriedade a tornamos opcional
interface usuario{
    nome:string
    email:string
    cargo?: 'super'|'normal'|'supervisor'|'funcionario'
}
/*podemos fazer a mesma coisa da aula anterior  */
function verifica(serVivo: usuario){ 
    if(serVivo.cargo) return console.log('vai pra area dos funcionarios') /*só de escrever 'serVivo.cargo' se não colocar nenhum comparativo nem nada. só de ele existir ele é verdadeiro*/
        else return console.log ('bem vindo caro cliente hueehuehuhuehuehue')
}
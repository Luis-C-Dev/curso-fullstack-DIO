// o trowth lança um erro personalizado. ele age como um return, ou seja, o código para de ser executado a partir do momento que o erro é lançado só que tem as carecteristicas de um erro
function verificaPalindromo(string) {
    if (typeof string != 'string'|| string.length === 0) return "String inválida"
    return string === string.split("").reverse().join("")
}
console.log (verificaPalindromo(40028922))
// a mesma coisa pode ser feita com throw

function verificaPalindromo2(string) {
    if (typeof string != 'string'|| string.length === 0) throw "String inválida"
    return string === string.split("").reverse().join("")
}
console.log (verificaPalindromo2('testando'))



// agora vamos tratar o erro com try catch
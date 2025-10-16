function soma (a, b) {
console.log(a + b)
}
// a função só foi criada, não foi executada
soma(2, 3) // 5
soma(10, 20) // 30
soma(50, 50) // 100

// o return só sera necessario se a função precisar devolver um valor. quando digo devolver, é para que esse valor possa ser usado em outro lugar do código.
function soma2 (a, b) {
    return a + b
}
const resultado = soma2(2, 3)
console.log(resultado) // 5
console.log(soma2(10, 20)) // 30
console.log(soma2(50, 50)) // 100
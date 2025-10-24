// =============================================
// OPERADORES ARITMÉTICOS
// =============================================

// (+) Adição
let a = 5
let b = 3
console.log(`A soma de a + b é igual a ${a + b}`) // → A soma de a + b é igual a 8

// (-) Subtração
console.log(`A subtração de a - b é igual a ${a - b}`) // → A subtração de a - b é igual a 2

// (*) Multiplicação
console.log(`A multiplicação de a * b é igual a ${a * b}`) // → A multiplicação de a * b é igual a 15

// (/) Divisão
console.log(`A divisão de a / b é igual a ${a / b}`) // → A divisão de a / b é igual a 1.6666666667

// (%) Resto (módulo)
console.log(`O resto da divisão de a % b é igual a ${a % b}`) // → O resto da divisão de a % b é igual a 2

// (**) Exponenciação
console.log(`O resultado de a ** b é igual a ${a ** b}`) // → O resultado de a ** b é igual a 125


// =============================================
// OPERADORES DE ATRIBUIÇÃO
// =============================================

let x = 10
console.log(`Valor inicial de x: ${x}`) // → Valor inicial de x: 10

x = 5
console.log(`x = 5 → agora x vale ${x}`) // → agora x vale 5

x += 3
console.log(`x += 3 → agora x vale ${x}`) // → agora x vale 8

x -= 2
console.log(`x -= 2 → agora x vale ${x}`) // → agora x vale 6

x *= 4
console.log(`x *= 4 → agora x vale ${x}`) // → agora x vale 24

x /= 2
console.log(`x /= 2 → agora x vale ${x}`) // → agora x vale 12

x %= 3
console.log(`x %= 3 → agora x vale ${x}`) // → agora x vale 0

x **= 2
console.log(`x **= 2 → agora x vale ${x}`) // → agora x vale 0


// =============================================
// OPERADORES DE COMPARAÇÃO
// =============================================

let y = 10
let z = "10"

console.log(`y == z → ${y == z} (compara apenas o valor)`) // → true
console.log(`y === z → ${y === z} (compara valor e tipo)`) // → false
console.log(`y != z → ${y != z}`) // → false
console.log(`y !== z → ${y !== z}`) // → true
console.log(`y > 5 → ${y > 5}`) // → true
console.log(`y < 5 → ${y < 5}`) // → false
console.log(`y >= 10 → ${y >= 10}`) // → true
console.log(`y <= 9 → ${y <= 9}`) // → false


// =============================================
// OPERADORES LÓGICOS
// =============================================

let cond1 = true
let cond2 = false

console.log(`cond1 && cond2 → ${cond1 && cond2} (E lógico)`) // → false
console.log(`cond1 || cond2 → ${cond1 || cond2} (OU lógico)`) // → true
console.log(`!cond1 → ${!cond1} (NÃO lógico)`) // → false


// =============================================
// OPERADORES DE INCREMENTO E DECREMENTO
// =============================================

let n = 5
console.log(`Valor inicial de n: ${n}`) // → 5

n++
console.log(`n++ → agora n vale ${n}`) // → 6

n--
console.log(`n-- → agora n vale ${n}`) // → 5


// =============================================
// OPERADOR TERNÁRIO
// =============================================

let idade = 18
let mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(`Ternário → ${mensagem}`) // → Maior de idade


// =============================================
// OPERADORES BITWISE (bit a bit)
// =============================================

let bitA = 5    // 0101 em binário
let bitB = 3    // 0011 em binário

console.log(`bitA & bitB → ${bitA & bitB} (AND bit a bit)`) // → 1
console.log(`bitA | bitB → ${bitA | bitB} (OR bit a bit)`) // → 7
console.log(`bitA ^ bitB → ${bitA ^ bitB} (XOR bit a bit)`) // → 6
console.log(`~bitA → ${~bitA} (NOT bit a bit - inverte os bits)`) // → -6
console.log(`bitA << 1 → ${bitA << 1} (Desloca bits para a esquerda)`) // → 10
console.log(`bitA >> 1 → ${bitA >> 1} (Desloca bits para a direita)`) // → 2
console.log(`bitA >>> 1 → ${bitA >>> 1} (Desloca bits sem sinal)`) // → 2


// =============================================
// OPERADORES DE TIPO E OBJETO
// =============================================

// (typeof)
let nome = "Bruce"
console.log(`typeof nome → ${typeof nome} (retorna o tipo do valor)`) // → string

// (instanceof)
class Heroi {}
let batman = new Heroi()
console.log(`batman instanceof Heroi → ${batman instanceof Heroi}`) // → true

// (in)
let pessoa = { nome: "Alfred", idade: 60 }
console.log(`"nome" in pessoa → ${"nome" in pessoa} (verifica se existe a propriedade)`) // → true

// (delete)
delete pessoa.idade
console.log(`Após delete, pessoa.idade → ${pessoa.idade} (undefined)`) // → undefined


// =============================================
// OPERADORES DE CONCATENAÇÃO
// =============================================

let nomeHeroi = "Batman"
let cidade = "Gotham"
console.log(`"O herói " + nomeHeroi + " protege " + cidade → ${"O herói " + nomeHeroi + " protege " + cidade}`)
// → O herói Batman protege Gotham


// =============================================
// OPERADOR DE AGRUPAMENTO
// =============================================

let resultado = (2 + 3) * 4
console.log(`(2 + 3) * 4 → ${resultado} (usa parênteses para alterar a prioridade)`)
// → (2 + 3) * 4 → 20

// ==================================================
// VARIÁVEIS EM JAVASCRIPT
// ==================================================

// 1️⃣ VAR
// 'var' significa variável. É o tipo mais antigo de variável em JavaScript.
// Características:
// - Pode ser declarada depois de ser usada (hoisting), mas isso pode causar confusão.
// - Hoje em dia, é **menos recomendada** porque tem escopo de função, não de bloco.
console.log("Exemplo com var:")
variavel = 1       // podemos atribuir antes de declarar
console.log(variavel) // → 1
var variavel       // declaração vem depois (hoisting)

// --------------------------------------------------

// 2️⃣ LET
// 'let' também cria variáveis, mas é **mais moderna e segura**.
// Características:
// - Precisa ser declarada antes de usar.
// - Tem escopo de bloco ({}), o que evita problemas de acesso acidental.
console.log("\nExemplo com let:")
let idade = 18
console.log(idade) // → 18

// --------------------------------------------------

// 3️⃣ CONST
// 'const' significa constante. É usada para valores que **não mudam**.
// Características:
// - Precisa ser inicializada na declaração.
// - Não pode ser reatribuída.
// - Também tem escopo de bloco.
console.log("\nExemplo com const:")
const PI = 3.14159
console.log(PI) // → 3.14159
// PI = 3.14  → erro! Não podemos mudar o valor de uma constante

// --------------------------------------------------

// 💡 Dicas rápidas:
// - Use 'let' para variáveis que vão mudar de valor.
// - Use 'const' para valores que devem permanecer fixos.
// - Evite 'var' a menos que precise de compatibilidade com códigos antigos.

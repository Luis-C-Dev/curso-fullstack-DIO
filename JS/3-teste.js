// ...existing code...
let x = 0

// Loop infinito com for (VERSÃO NÃO BLOQUEANTE - recomendada)
async function retorne() {
    for (;;) { // loop infinito
        x++
        console.log(x)
         await new Promise(r => setTimeout(r, 1000)) // pausa 1s para não travar o terminal
    }
}

// Para usar a versão bloqueante (NÃO RECOMENDADO), descomente:
function retorneBloqueante() {
    for (;;) {
        x++
        console.log(x+ " viado pulou a cerca")
    }
}

console.log('Iniciando loop infinito (aperte Ctrl+C para parar)...')
retorne()
// ...existing code...
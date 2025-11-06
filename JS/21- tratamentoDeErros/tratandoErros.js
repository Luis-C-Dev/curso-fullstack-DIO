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
// exemplo da moça do curso:

// sintaxe do try catch
try /*aqui ele tenta executar o código dentro do bloco*/ 
{
    // código a ser testado
}
catch (e) /*o 'e' é o erro que foi lançado no bloco try. uma coisa que eu estava em duvida é que o proprio codigo identifica onde tem erro.*/
{
    // código a ser executado caso ocorra um erro
}


function tryCatchExemplo(string) {
    try {
        verificaPalindromo2(string)
    } catch (e) {
        console.log(e)
    }
}
tryCatchExemplo(123)

//Explicação resumida das minhas duvidas

// `throw`
// Usado quando *você* quer indicar que algo deu errado. Ele interrompe a função imediatamente e “lança” uma mensagem (ou objeto) para o `catch`.

// Erros naturais
// Mesmo sem `throw`, o JavaScript pode gerar erros sozinho (variável inexistente, acessar `null`, JSON inválido…).

// `try`
// É um bloco onde o código fica sendo “vigiado”. Se algo der errado ali dentro, ele para e pula pro `catch`.

// `catch(e)`
// Só executa se houve erro dentro do `try`. O `e` recebe o valor lançado pelo `throw` ou pelo erro natural.

// ---

// Fluxo humanizado — sem erro

// 1. Entra no `try`
// 2. Nenhum erro acontece
// 3. O `catch` é ignorado
// 4. O código continua normalmente

// > “Tudo certo, vida que segue.”

// ✅ Fluxo humanizado — com erro

// 1. Entra no `try`
// 2. Acontece um erro (natural ou `throw`)
// 3. O código dentro do `try` para imediatamente
// 4. Pula para o `catch`
// 5. O `e` recebe o erro
// 6. Código continua depois do catch

// > “Opa! Deu ruim. Segura aí que eu trato.”

// ✅ Resumo final

// * `throw` = declara um erro personalizado
// * Erro natural = erro que o JS lança sozinho
// * `try` = bloco de código monitorado
// * o erro sobe até o `catch` mais próximo
// * `catch(e)` = “Beleza, recebi o erro” em seguida o codigo dentro do `catch` roda
// * Com erro → código dentro do `try` para e o `catch` roda
// * Sem erro → `catch` nem roda




// o finally é um bloco opcional que sempre será executado, independente se houve erro ou não no bloco try

function tryCatchFinallyExemplo(string) { 
    try {
        verificaPalindromo2(string)
    } catch (e) {
        console.log(e)
    }
    finally {
        console.log('O bloco finally sempre é executado')
    }
}
tryCatchFinallyExemplo(123)
tryCatchFinallyExemplo('arara')
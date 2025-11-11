// Criando uma Promise manualmente
const minhaPromise = new Promise((resolve, reject) => {
  // Essa função interna (callback) roda quando a Promise é criada.
  // Aqui dentro ficará nossa operação assíncrona.

  // Simulação de dados que "vieram de algum lugar"
  const dadosRecebidos = { nome: "Lucas", idade: 20 };

  // Simulação de condição (pode dar certo ou errado)
  const operacaoDeuCerto = true;

  if (operacaoDeuCerto) {
    // resolve() = operação concluída com sucesso
    // tudo o que você colocar dentro de resolve(...)
    // será enviado para o .then()
    resolve(dadosRecebidos); // enviando os dados para quem está esperando
  } else {
    // reject() = operação falhou
    // o que você colocar dentro de reject(...)
    // será enviado para o .catch()
    reject("Erro ao receber os dados!");
  }
});


// Consumindo a Promise
minhaPromise
  .then((resultado) => {
    // .then() recebe automaticamente o valor enviado pelo resolve()
    // o parâmetro "resultado" é exatamente o que estava dentro do resolve(...)
    console.log("Sucesso! Recebi:", resultado);
    // exemplo de uso: resultado.nome
  })
  .catch((erro) => {
    // .catch() recebe automaticamente o valor enviado pelo reject()
    // o parâmetro "erro" é exatamente o que estava dentro do reject(...)
    console.error("Falha! Motivo:", erro);
  })
  .finally(() => {
    // .finally() roda SEMPRE, deu certo ou errado.
    // usado para limpar recursos, parar loaders, etc.
    console.log("Processo finalizado!");
  });


// RESUMO RÁPIDO:
//
// new Promise(...) → cria a promessa
// resolve(dado)    → envia um resultado de sucesso
// reject(erro)     → envia um resultado de falha
//
// .then(resultado) → recebe o valor de resolve(...)
// .catch(erro)     → recebe o valor de reject(...)
// .finally(...)    → sempre executa no final
// esse eu consegui entender melhor :)




// uma duvida que eu tinha:
// pra que escrever varios .then() encadeados?
// exemplo:
// .then(...)
// .then(...)
// .then(...)
 //isso é por organização do codigo. daria pra fazer tudo em um unico .then(), mas teria que criar varias variaveis ali dentro
 //e ficaria uma bagunça. Entao, ao inves disso, voce pode ir "passando" o resultado de um .then() para o outro.
 

 // outra coisa pra não esquecer. o .then() retorna um valor e esse valor passa para o próximo .then()


 //o .then() sempre retorna uma Promise. mas por que isso?
 // existem varios motivos.

// 1. Para não travar o restante do código enquanto processa etapas.
// 2. Para poder executar novas tarefas assíncronas no meio do caminho, se precisar.
// 3. Para garantir que cada etapa só aconteça quando a anterior realmente terminar.
// 4. Para permitir capturar erros de qualquer ponto da cadeia num único `.catch()`.
// 5. Para manter a ordem e evitar comportamentos imprevisíveis.
// 6. Para que bibliotecas e códigos de terceiros consigam continuar a cadeia sem quebrar nada.
// 7. Para evitar conflitos quando várias partes estão esperando aquele resultado.
// 8. Para permitir dividir o processamento em etapas menores e mais organizadas.
// 9. Para que a interface (tela) continue responsiva enquanto o código roda.
// 10. Para impedir que tarefas pesadas bloqueiem animações, botões e outras ações do usuário.




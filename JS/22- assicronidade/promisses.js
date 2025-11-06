// as promisses são objetos de processamento assíncrono, representando um valor que pode estar disponível agora, no futuro ou nunca.

// Estados
// Pending: estado inicial, não cumprida ou rejeitada.
// Fulfilled: operação concluída com sucesso.
// Rejected: operação falhou.
// sintaxe
const minhaPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    if (true) {
      resolve('Resolvida com sucesso!');
    } else {
      reject('Rejeitada!');
    }
  }, 2000);
});


await minhaPromise
.then((result)=> result + ' passando pelo then')
.then((result)=> result + ' e agora acabou!')
.catch((err)=> console.log(err.message))
// API significa Application Programming Interface. ele é uma biblioteca de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na web.
//é como se fosse um dicionario que vai agilizar o desenvolvimento de software, fornecendo todas as ferramentas necessárias para que um desenvolvedor possa criar suas aplicações de forma mais rápida e eficiente.
//ela se parece com um objeto em seu funcionamento, onde temos propriedades (pra encontrar a propriedade é da mesma maneira de um objeto normal) e métodos que podemos utilizar para interagir com o sistema ou serviço que a API representa.

// Fetch é uma API do JavaScript para fazer requisições HTTP assíncronas
// A função fetch retorna uma Promise
const url = 'https://jsonplaceholder.typicode.com/posts';
fetch(url)
// da mesma forma que tratamos uma promise, podemos usar o .then para manipular a resposta ja que o fetch retorna uma promise
  .then(response => {
    // o response é um objeto que contém informações sobre a resposta da requisição
    // para extrair o corpo da resposta em formato JSON, usamos o método .json()
    return response.json();
  }) /*com isso podemos tratar o dado que esta na api da maneira que quisermos */

//programando usando dom
let titulo = document.getElementById("titulo") /*criamos uma variavel que pega o elemento com o id titulo */
let paragrafo = document.getElementsByClassName("paragrafo") /*cria uma variavel com o elemento com a classe paragrafo */ /*sempre retorna array ja que pode vir mais de um */
let h1 = document.getElementsByTagName('h1') /*procura o elemento pela tag */ /*sempre retorna um array ja que por tag normalmente vem varios */
let queryselector= document.querySelectorAll('.paragrafo', '#titulo') /*escolhe tudo que tenha os seguintes parametros. no caso vai puxar todos aqueles que tem a classe paragrado e o id titulo */ /*nesse caso não vai vir nada ja que la no html não tem nenhum elemento que as respectivas classes e id */
/*agora podemos manipular elementos html como elementos js */

//sintaxe de alguns comandos dom
document.removeChild(elemento) /*remove um elemento do html */
document.replaceChild(novo, antigo) /*substitui o antigo elemento pelo novo */
document.appendChild(variavel) /*adiciona um elemento la no html */
document.createElement(elemento) /*cria um elemento la no html o elemento pode ser img, h1, h2, p qualquer coisa que esteja entre tags é um elemento */
/*diferença entre appendChild e createElement */
//o createelement só cria o elemento dentro do js pois podemos manipulalo antes de adicionar la no html
/*ex: eu preciso criar o ambiente pra adicionar um texto. mas só criou o ambiente decidi que vou adicionar o texto com alterações e etc */
/*depois uso appendChild pra mandar o elemento pronto la pro html */

/*precisamos tambem dizer onde o elemento deve ir pra isso normalmente usamos o queryselcetor ja que ele é mais flexivel */
let novoElemento = document.createElement('h1') /*cria o elemento */ /*e identifica a tag */
novoElemento.textContent = "hello world" /*manipula ele */
let endereço = document.querySelector('.paragrafo')/*cria a variavel que representa um bloco do html */
endereço.appendChild(novoElemento)/*insere usando appendchild */ /*e no parametro colocamos o nome da variavel que queremos adicionar */
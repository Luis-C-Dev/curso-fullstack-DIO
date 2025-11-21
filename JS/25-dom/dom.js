// dom significa Document Object Model
// O DOM é uma interface de programação para documentos HTML e XML. Ele representa a página para que os programas possam alterar a estrutura do documento, estilo e conteúdo. O DOM representa o documento como nós e objetos; assim, programaticamente, podemos alterar a estrutura do documento, estilo e conteúdo.
//assim se usa o dom normalmente com javascript para manipular elementos html
// Pegando elemento por ID
const titulo = document.getElementById("titulo");

// Pegando elemento por CLASS (pega um vetor/HTMLCollection)
const mensagem = document.getElementsByClassName("mensagem")[0];

// Pegando o botão por ID
const botao = document.getElementById("btn");

// Pegando a área onde o novo texto aparecerá
const area = document.getElementById("area");


// Alterando textos só pra ilustrar
titulo.textContent = "Novo título via JS";
mensagem.textContent = "Texto vindo da classe";


// Evento simples para criar um bloco de texto
botao.addEventListener("click", () => {

    const bloco = document.createElement("p"); // cria <p>
    bloco.textContent = "Um texto criado pelo JavaScript!";

    area.appendChild(bloco); // coloca o <p> dentro da div
});

//mas tbm existe o BOM que é o Browser Object Model
//O BOM é uma interface de programação que permite a interação com o navegador web. Ele fornece objetos que representam componentes do navegador, como janelas, quadros, histórico e localização. veremos como usa ele mais a frente
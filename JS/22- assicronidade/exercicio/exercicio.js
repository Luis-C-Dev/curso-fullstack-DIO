async function dogPics() { /*cria uma função assincrona */
    fetch("https://dog.ceo/api/breeds/image/random") /*adiciona uma api */
        .then(cachoro => cachoro.json())/*o resultado da api vai pro .then. e o resultado vai pro que eu nomear. vai ser como um parametro de uma função. pq literalmente isso é uma função tbm vai transformar o resultado em um json. q é o que o js entende*/
        .then(json => json.message)  /* retornaria a message e o status. quero apenas a mensagem */             
        .then(link => {/*a mensagem é o link da imagem */
            let img = document.createElement("img"); /*criou uma variavel que a função dele é criar um elemento imagem */
            img.src = link;/*adiciona um link a essa variavel */   /*toda variavel tem varias propriedades. o src é uma delas */                 
            document.querySelector("section").appendChild(img); /*serve pra selecionar o lugar do html onde sera adicionado a imagem*/ /*o appendchild pergunta o que vc quer adicionar? no caso a gente quer adicionar aquela variavel img. a variavel que cria */
        })
        .catch(erro => console.log(`um erro acorreu aqui esta o erro ${erro}`))/*caso ocorra um erro apresenta a seguinte mensagem */
}

//no queryselector. podemos usar os mesmos identificadores do css se usarmos .cachoro vai buscar classes cachorro se for #cachorro vai buscar ids
//entendi krl, consegui agora
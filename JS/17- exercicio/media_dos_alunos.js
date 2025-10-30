// objetivos do exercicio:
//1- crie uma função que receba um array chamada de alunos e um numero que ira representar a media final dos alunos
//2- percorra o array e popule um novo array onde somente tenham alunos que passaram da media
//3- utilize a tecnica 'object destruturing' para manipular as propriedades desejadas de cada aluno
const alunos = {
  Ana: [8, 7.5, 9, 6],
  Bruno: [5, 6, 6.5, 7],
  Carlos: [9, 8.5, 9.5, 10],
  Daniela: [7, 8, 6.5, 7.5],
  Eduardo: [4, 5, 6, 5.5],
};

// function mediaAlunos (objeto){
// for (dado in objeto) {
//     console.log(objeto[dado])

// }
// }
// mediaAlunos(alunos)

function calcularMediasAlunos(listaDeAlunos) {
  const medias = {};

  for (let nomeDoAluno in listaDeAlunos) {
    const notasDoAluno = listaDeAlunos[nomeDoAluno];

    const somaDasNotas = notasDoAluno.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual;
    }, 0);

    const mediaFinal = somaDasNotas / notasDoAluno.length;

    medias[nomeDoAluno] = mediaFinal.toFixed(2);
  }

  return medias;
  
}

const mediaDoAlunos = calcularMediasAlunos(alunos)
console.log(mediaDoAlunos)
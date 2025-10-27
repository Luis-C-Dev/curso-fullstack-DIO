// objetivo. se o numero for impar:mantem
// se for par: substitua por 0
// e se for um numero invalido substitua por -1
let sequencia = [1,2,3,80,69,108,777,40028922,"sla"]
let resposta =[1,0,3,0,69,0,777,0,-1]/*deve ficar assim ao fim do processo*/

function substituir(A) {
    for (let index = 0; index < A.length; index++) {
          if (typeof A[index] != 'number' ){
            A[index] = -1

        }

        else if (A[index] % 2 == 0) {
            A[index] = 0
        }
        
    }
}
substituir(sequencia)
console.log(sequencia)

let sequencias = {
    lista1: [1, 2, 3, 80, 69, 108, 777, 40028922, "sla"],  // [1, 0, 3, 0, 69, 0, 777, 0, -1]
    lista2: [10, 15, "oi", 21, 22],                        // [0, 15, -1, 21, 0]
    lista3: [99, 100, 101, "x", 0],                        // [99, 0, 101, -1, 0]
    lista4: [7, 14, 21, 28, 35, "a"],                      // [7, 0, 21, 0, 35, -1]
    lista5: [2, 4, 6, 8, 10],                              // [0, 0, 0, 0, 0]
};
substituir(sequencias.lista2)
console.log (sequencias.lista2)
//modulo significa um arquivo ou conjunto de códigos separados que podem exportar e importar funcionalidades. 
// ATENÇÃO: IMPORTS E EXPORTS SEMPRE DEVEM ESTAR NO TOPO DO ARQUIVO, ANTES DE QUALQUER OUTRO CÓDIGO.
// esse arquivo js sera responsavel por importar(receber) funcionalidades para outros arquivos.
import {soma, subtrai, nome} from './export.js'; //importacao nomeada (named import)

import qualquerNome from './export.js'; //importacao default padrão (default import)

console.log(soma(2, 3)); //5
console.log(subtrai(5, 2)); //3
console.log(nome); //Thmpv
console.log(qualquerNome(4, 5)); //20

//na importacao nomeada precisamos usar o mesmo nome da exportacao e usar chaves {}

//na importacao default podemos usar qualquer nome para importar a funcionalidade padrao do arquivo export.js


import {soma as adicionar} from './export.js'; //podemos usar o as para renomear a importacao nomeada ou seja  a soma agora sera chamada de adicionar

console.log(adicionar(10, 15)); //25

import * as tudo from './export.js'; //importando tudo de uma vez so usando o * as

console.log(tudo.subtrai(20, 5)); //15 podemos identificar as funcionalidades usando o nome do objeto tudo.


// bem simples e prático ;).




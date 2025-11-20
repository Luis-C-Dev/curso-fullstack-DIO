//no caso esse arquivo js sera responsavel por exportar(enviar) funcionalidades para outros arquivos.
//temos dois metodos de exportar:
export function soma(a, b) {
  return a + b;
}
export function subtrai(a, b) {
  return a - b;
}
export const nome = "Thmpv";

// essa outra forma me parece mas confortavel onde eu posso exportar tudo de uma vez so.
export { soma, subtrai, nome };
//esses dois de cima foram exportacoes nomeadas (named exports). esse é o primeiro metodo de exportacao.

//temos tambem a exportacao default (default export) que so pode ter uma por arquivo.
export default function multiplica(a, b) {
  return a * b;
}
//essa funcao sera a exportacao padrao do arquivo. e ela só pode exportar uma funcionalidade por arquivo.
// o export default é muito mais coveniente na hora do import, pois nao precisamos usar chaves {}, nem nomear pois só existe uma exportacao default por arquivo. ou seja não precisa se preucupar com a identificação ou seja menor erros
//na hora de importar.
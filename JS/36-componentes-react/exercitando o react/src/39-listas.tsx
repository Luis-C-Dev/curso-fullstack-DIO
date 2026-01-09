import { useState } from "react"
function Lista() {/*independente se é um array ou qualquer outra coisa. o useState tem que ter parenteses */
    const [lista,]= useState([
    {id:1, label: "primeiro item"},
    {id:2, label: "segundo item"},
    {id:3, label: "terceiro item"}
    
    ]) /*as listas no react devem ter keys pra identificação de cada item. isso serve pro react ser otimizado. */
  return (
    <>
    <h1>AULA 39:</h1>
    <h3>isso é uma lista: ordenada</h3>
    <ol>
        <li>primeiro item</li>
        <li>segundo item item</li>
    </ol>
    <h3>lista não ordenada</h3>
    <ul>
        <li>primeiro item</li>
        <li>segundo item item</li>
    </ul>
          {/*essa é uma forma mais simples pra fazer lista. uma maneira mais "moldavel" é transformando a lista html em um array do js q se transforma em um html posteriormente isso é bom pq nos permite manipular essas listas.*/}
   

    <ol>{/*o react la no navegador vai dar erro se n incerir uma key. isso faz parte da identificação de cada item de uma lista. o "itemDaLista" vai dar uma identificação. mas se eu escrever dois items iguais as identificações serão iguais ai vai dar erro. continua la em cima */}
    {lista.map((itemDaLista) => ( 
        <li key={itemDaLista.id}>{itemDaLista.label}</li> 
    ))}         {/*aqui eu percorro o array "lista". quando o map vai la no primeiro item ele joga o primeiro item dentro do parentese dele. dentro desse parentese tem uma função. esse primeiro item só pode ser encaixado no parametro. o parematro joga esse primeiro item dentro de tags do html. */}
    </ol>




    {/*esplicação lista: seguintes regras lista react: 1:precisa identificar os itens da lista, 2:n pode ter dois items com a mesma identificação. ent.. do começo.. fazemos array q converte pra string q vira html tornando ele moldavel. depois nas tags <li> colocamos o parametro. dentro da tag colocamos o mesmo parametro dentro da key. ai quando o .map roda. o "primeiro item" tem a chave "primeiro item" e assim vai. se tivermos dois items iguais teremos duas chaves (identificadores) iguais. ent la em cima criamos um objeto pra cada item da lista. nesse objeto tera a informação do id e outro com a informação do que ta escrito. dai dentro da tag <li> colocamos o parametro.id pra mostrar o id do item. e entre as tags colocamos o paramtro.label q tem a informação do que ta escrito*/}
   </>
  )
}

export default Lista

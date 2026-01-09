import { useState } from "react"
function ListDinamica() {
    const [value, setvalue]= useState("")
    const [lista, setlista]= useState([
        {id: 1, label: "primeiro item"},
        {id:2, label: "segundo item"},
        {id:3, label: "terceiro item"},
        {id:4, label: "quarto item"}
    ])

    
  return (
    <>
    <h1>AULA 40:</h1>{/*o valor do input é igual ao valor usestate */} 
    <input value={value}
    onChange={(e) => setvalue(e.target.value)}
    />{/*onChange: qualquer mudança eu registro e jogo dentro do parametro da aerofunction (e)
        aero function pra executar o que eu quero
        defino q o valor do setvalue é o valor do target do e
        value: valor/ resultado
        target: o que ativou a função*/} 




    {/*resumindo. o useState salva uma string vazia. ai quando muda uma letra. ele ja é atribuido ao set value. q se torna o value e ai vai indo. continua na linha 32 */}




                  {/* colocando 3 pontos antes de lista. ainda mais dentro de um array. é como se estivessemos dizendo um tanto na esquerda até o ultimo item de lista. ai eu adiciono mais um item na esquerda*/}
    <button onClick={ 
        ()=> {setlista([...lista, {id:(lista.length + 1) ,label: value} ])
    setvalue("")}
    }>adicionar</button>
    {/*como o valor esta sendo atualizado a cada letra quando eu aperto o botão o valor é das letras acumuladas. e ai adiciona na lista. */}











{/*parte ja aprendida na aula anterior. foque no que tem em cima */}
    <ul>  {/*legal. no "(item) => ()" o parentese significa retorno implicito da função. é quando vc n precisa de todo um processo pra chegar em um resultado e finalizar com return. ou seja. usando os parenteses vc evita escrever return. */}
        {lista.map((item)=>(
            <li key={item.id}>{item.label}</li>
))}
    </ul>
    
   </>
  )
}

export default ListDinamica
import { useState } from "react"

function App() {
  const [count, setCount] = useState (0) /*count: valor que sera atualizado
                                          setCount: é a função que atualiza o estado count
                                          useState: cria um estado e retorna o valor atual + a função de atualização */

  return (
    <>
    <p>hello world</p> 
    <button onClick={ () => setCount (count + 1)} >  {/*{/* onClick chama setCount, que atualiza o estado e força a re-renderização */}
      count : {count} 
      </button>
    
    </>
  )
}

export default App

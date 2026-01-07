// App.tsx normalmente é o componente principal (página inicial da aplicação)

// Os imports sempre vêm primeiro.
// Precisamos importar antes para poder usar no código.
import { useState } from "react"

function App() {

  // useState é um Hook do React.
  // Ele cria um estado (valor controlado pelo React).
  // Quando esse valor muda, o React atualiza a tela.
  const [count, setCount] = useState(0)
  // count → valor atual
  // setCount → função que atualiza o estado

  // Componentes React devem começar com letra MAIÚSCULA.
  // Isso diferencia componentes React de tags HTML.
  const Teste = () => {
    return <p>olá mundo</p>
  }

  return (
    <>
      <p>Hello world</p>

      {/* onClick chama setCount, que altera o estado */}
      <button onClick={() => setCount(count + 1)}> {/* o parentese do setCount representa o valor do proprio */}
        count: {count}
      </button>

      {/* Uso do componente Teste */}
      <Teste />
    </>
  )
}

export default App

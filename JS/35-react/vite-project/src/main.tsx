/*o main.tsx é responsavel pelas paginas do nosso site */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
  /*aqui temos as rotas. o strictMode é só pra evitar bugs e n é renderizado no final. ou seja. n precisa ter mas tbm n precisa tirar. */
)

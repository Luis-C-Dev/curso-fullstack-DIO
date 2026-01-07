/*o main.tsx é responsavel pelas paginas do nosso site */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
  /*aqui temos as rotas. o strictMode é só pra evitar bugs e n é renderizado no final. ou seja. n precisa ter mas tbm n precisa tirar. */
  /*importante esplicar q ainda n é as rotas pra mudar os links. isso sera mais na frente. mas sim como o index.html vai ler o q eu to escrevendo */
)

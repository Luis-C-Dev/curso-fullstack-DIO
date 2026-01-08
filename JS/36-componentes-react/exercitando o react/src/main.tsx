import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Use from "./37-useState.tsx"
import Render from './38-renderização-condicional.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Use/>
    <Render/>
  </StrictMode>,
)

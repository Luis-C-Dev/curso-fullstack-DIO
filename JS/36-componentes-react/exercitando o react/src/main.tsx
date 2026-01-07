import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Use from "./useState.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Use/>
  </StrictMode>,
)

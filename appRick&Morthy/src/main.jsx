import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppCharaters from './AppCharaters.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCharaters />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Testt from './Testt.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Testt />
  </StrictMode>,
)

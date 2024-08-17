import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'

import Header from './Header.jsx'

const Main = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)

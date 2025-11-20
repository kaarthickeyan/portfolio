import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Nav from './components/Nav'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

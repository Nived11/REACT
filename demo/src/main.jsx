import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  // React.createElement('div',{id:"new",className:"asd"},React.createElement("h1",{id:"head"},"hello Bro"))
  <StrictMode>
    <App />
  </StrictMode>,
)

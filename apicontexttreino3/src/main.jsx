import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterContextProvider } from './Context/CounterContext.jsx'
import { ColorChangeContextProvider } from './Context/ColorChangeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorChangeContextProvider>
    <CounterContextProvider>
    <App />
    </CounterContextProvider>
    </ColorChangeContextProvider>
  </React.StrictMode>,
)

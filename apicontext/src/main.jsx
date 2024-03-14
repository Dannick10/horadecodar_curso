import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CounterContextProvider } from './Context/CounterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*Criando provider*/}
    <CounterContextProvider>
    <App />
    </CounterContextProvider>
  </React.StrictMode>,
)

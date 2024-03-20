import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CounterContextProvider } from './Context/CounterContext.jsx'
import { ChangeColorContextProvider } from './Context/ChangeColorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChangeColorContextProvider>
    <CounterContextProvider>
    <App />
    </CounterContextProvider>
    </ChangeColorContextProvider>
  </React.StrictMode>,
)

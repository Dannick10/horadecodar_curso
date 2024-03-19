import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CounterContextProvider } from './Context/CounterContext.jsx'
import { TitleColorContextProvider } from './Context/TitleColorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <TitleColorContextProvider>
    <CounterContextProvider>
        <App />
    </CounterContextProvider>
      </TitleColorContextProvider>
  </React.StrictMode>,
)

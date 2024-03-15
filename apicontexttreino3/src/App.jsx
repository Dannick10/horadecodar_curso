
import './App.css'

import useCounterContext from './hooks/useCounterContext'
import CounterContextButton from './components/CounterContextButton'

function App() {
  const {counter} = useCounterContext()
  
  return (
    <>
    <h1>COntext</h1>
    <CounterContextButton/>
    <p>Valor do contexto é {counter}</p>
    </>
  )
}

export default App


import './App.css'

import useCounterContext from './hooks/useCounterContext'
import CounterContextButton from './components/CounterContextButton'
import { useColorChangeContext } from './hooks/useColorChangeContext'

function App() {
  const {counter} = useCounterContext()
  const {color} = useColorChangeContext()
  return (
    <>
    <h1 style={{color:color}}>COntext</h1>
    <CounterContextButton/>
    <p>Valor do contexto é {counter}</p>
    </>
  )
}

export default App


import './App.css'

//import { useContext } from 'react'
//import { CounterContext } from './Context/CounterContext'
import { useCounterContext } from './hooks/useCounterContext'

import ChangeCounter from './componete/ChangeCounter'
import { useColorContext } from './hooks/useColorContext'

function App() {
  const {color} = useColorContext()
  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()
console.log(counter)
  return (
    <>
    <h1 style={{color: color}}>Consumindo contexto</h1>
    <ChangeCounter/>
    <p>valor do CounterContextProvider: {counter}</p>
    </>
  )
}

export default App

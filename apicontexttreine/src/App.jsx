
import './App.css'

import { useContext } from 'react'
import { CounterContext } from './Context/CounterContext'


function App() {
  const {counter} = useContext(CounterContext)
console.log(counter)
  return (
    <>
    <h1>Consumindo contexto</h1>
    <p>valor do CounterContextProvider: {counter}</p>
    </>
  )
}

export default App

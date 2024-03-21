
import './App.css'

//import { useContext } from 'react'
//import { CounterContext } from './Context/CounterContext'
import { useCounterContext } from './hooks/useCounterContext'

import ChangeCounter from './componete/ChangeCounter'
import { useColorContext } from './hooks/useColorContext'

function App() {
  const {color,dispatch} = useColorContext()
  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

  const SetchangeColor = (color) =>{
    dispatch({type:color})
  }

console.log(counter)
  return (
    <>
    <h1 style={{color: color}}>Consumindo contexto</h1>
    <ChangeCounter/>
    <button onClick={()=>SetchangeColor("RED")}>MUDARCOR</button>
    <button onClick={()=>SetchangeColor("GREEN")}>a</button>
    <p>valor do CounterContextProvider: {counter}</p>
    </>
  )
}

export default App

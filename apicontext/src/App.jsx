import './App.css'
//import { useContext } from 'react'
//import {CounterContext} from './Context/CounterContext'
import ChangeCounter from './Components/ChangeCounte'

import { useCounterContext } from './hooks/useCounterContext'

function App() {

  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

  return (
    <>
     <h1>HOME</h1>
     <ChangeCounter/>
     <p>Valor do context {counter}</p>
    </>
  )
}

export default App

import './App.css'
import { useContext } from 'react'
import {CounterContext} from './Context/CounterContext'
import ChangeCounter from './Components/ChangeCounte'

function App() {

  const {counter} = useContext(CounterContext)

  return (
    <>
     <h1>HOME</h1>
     <p>Valor do context {counter}</p>
     <ChangeCounter/>
    </>
  )
}

export default App

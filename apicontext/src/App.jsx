import './App.css'
//import { useContext } from 'react'
//import {CounterContext} from './Context/CounterContext'
import ChangeCounter from './Components/ChangeCounte'

import { useCounterContext } from './hooks/useCounterContext'

import { useTitleColorContext } from './hooks/useTilteColor'

function App() {

  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

  const {color} = useTitleColorContext()


  return (
    <>
     <h1 style={{color:color}}>HOME</h1>
     <ChangeCounter/>
     <p>Valor do context {counter}</p>
    </>
  )
}

export default App

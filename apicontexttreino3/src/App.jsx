
import './App.css'

import useCounterContext from './hooks/useCounterContext'
import CounterContextButton from './components/CounterContextButton'
import { useColorChangeContext } from './hooks/useColorChangeContext'

function App() {

  
  const {counter} = useCounterContext()
  const {color, dispatch} = useColorChangeContext()
  
  const setTitleColor = (color) =>{
    dispatch({type: color})
  }
  
  return (
    <>
    <h1 style={{color:color}}>COntext</h1>
    <CounterContextButton/>
    <div><button onClick={()=>setTitleColor("RED")}>VERMELHO</button></div>
    <div><button onClick={()=>setTitleColor("BLUE")}>BLUE</button></div>
    <p>Valor do contexto é {counter}</p>
  
    </>
  )
}

export default App

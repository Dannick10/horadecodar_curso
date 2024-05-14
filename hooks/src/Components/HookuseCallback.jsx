import { useState,useCallback } from "react"
import List from "./List"

const HookuseCallback = () => {

  const [counter,setCounter] = useState(0)

  const getItemsfromDataBase = useCallback(() => {
    return ['a','b','c']
  },[])

  return (
    <div>
        <h2>use CallBack</h2>
        <List getItems={getItemsfromDataBase}/>
        <button onClick={() => setCounter(counter + 1)}>Alterar</button>
        <p>{counter}</p>
    </div>
  )
}

export default HookuseCallback
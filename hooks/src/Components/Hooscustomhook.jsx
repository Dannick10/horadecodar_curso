import React, { useState } from 'react'
import { usePrevius } from '../hook/usePrevius'

const Hooscustomhook = () => {

    const [number, setNumber] = useState()
    const previusvalue = usePrevius(number)

  return (
    <div>

        <h2>Custom hook</h2>
        <p>Atual: {number}</p>
        <p>anterior: {previusvalue}</p>
        <button onClick={()=>setNumber(Math.floor(Math.random()*1000))}>Alterar</button>
        <hr />
    </div>
  )
}

export default Hooscustomhook
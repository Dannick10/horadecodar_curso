import React, { useState } from 'react'
import { useEffect } from 'react'

const HookuseEffect = () => {

    const [number, setNumber] = useState(0)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    useEffect(() => {
        console.log('serei executado apenas uma vez')
    },[])

  return (
    <div>
        <h2>UseEffect</h2>
        <p>number: {number}</p>
        <button onClick={changeSomething}>Executar</button>

    </div>
  )
}

export default HookuseEffect
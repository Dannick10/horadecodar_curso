import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const HookuseHref = () => {

    const numberRef = useRef(0)
    const [counter, setCounter ] = useState(0)
    const [counterB, setCounterB ] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

  return (
    <div>


        <h2>HookuseHref</h2>

            <p>O componente renderizou {numberRef.current} vezes.</p>

            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Contador A</button>

            <p>CounterB: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>Contador A</button>

    </div>
  )
}

export default HookuseHref
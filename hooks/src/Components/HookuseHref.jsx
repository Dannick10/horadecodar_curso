import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const HookuseHref = () => {

    const numberRef = useRef(0)
    const [counter, setCounter ] = useState(0)
    const [counterB, setCounterB ] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    //useref dom 

    const inputRef = useRef()
    const [text,setText] = useState('')

    const handleSubmit = ( e ) => {
        e.preventDefault()
        setText('')
        console.log(inputRef)
        inputRef.current.focus()
    }

  return (
    <div>


        <h2>HookuseHref</h2>

            <p>O componente renderizou {numberRef.current} vezes.</p>

            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Contador A</button>

            <p>CounterB: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>Contador A</button>
        <hr />

    <form onSubmit={handleSubmit}>
        <input type="text"  ref={inputRef} onChange={(e) => setText(e.target.value)} value={text}/>
        <input type="submit"  value={"enviar"} />
    </form>
    </div>
  )
}

export default HookuseHref
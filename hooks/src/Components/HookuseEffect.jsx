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

    const [anotherNumber,SetAnotherNumber] = useState(0)

    useEffect(()=> {
        console.log('sou executado apenas com o anotherNumber muda!')
    }, [anotherNumber])

    useEffect(()=> {
        const time = setTimeout(() => {
            console.log('HELLO WORLD')
          
        }, 2000)
        
       return () => clearTimeout(time)

    }, [anotherNumber])

  return (
    <div>
        <h2>UseEffect</h2>
        <p>number: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => SetAnotherNumber(anotherNumber + 1)}></button>
    </div>
  )
}

export default HookuseEffect
import {useState, useEffect, useLayoutEffect} from 'react'

const HookuseLayoutEffect = () => {

    const [ name ,SetName ] = useState()

    useEffect(() => {
        console.log('2')
    SetName('mudou de novo')
    },[])

    useLayoutEffect(() => {
        console.log('1')
        SetName('outro nome')
    }, [])

    console.log(name)

  return (
    <div>
        <h2>UseLayoutEffect</h2>
    <p>{name}</p>
    </div>
  )
}

export default HookuseLayoutEffect
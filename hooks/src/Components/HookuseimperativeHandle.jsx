import {useRef} from 'react'

import Somecomponent from './Somecomponent'

const HookuseimperativeHandle = () => {

    const input = useRef()
  return (
    <div>
        <h2>UseimperativeHandle</h2>
        <Somecomponent ref={input}/>
        <button onClick={() => input.current.validate()}>validar</button>
    </div>
  )
}

export default HookuseimperativeHandle
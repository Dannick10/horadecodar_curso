import React, { useState } from 'react'

const HookUseState = () => {

    let useName = 'Joao'
    const [name,setName] = useState('Joao')
  return (
    <div>
        <h2>usestate</h2>
        <p>Var: {useName}</p>
        <p>useState: {name} </p>
        <hr />
    </div>
  )
}

export default HookUseState
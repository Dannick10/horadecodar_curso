import React, { useReducer } from 'react'

const HookUseReduce = () => {

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

  return (
    <div>
        <h2>userReduce</h2>
            <p>Numero: {number}</p>
            <button onClick={dispatch}>Alterar número</button>
        <hr />
    </div>
  )
}

export default HookUseReduce
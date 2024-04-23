import { useState } from 'react'

const HookUseState = () => {

  let nome = 'Joao'
  const [nomeState,SetnomeState] = useState('joao')

  const handleName = () => {
    nome = 'Daniel'
    SetnomeState('Daniel')

    console.log(`${nome}`)
    console.log(`${nomeState}`)
  }

  return (
    <div>
        <h2>usestate</h2>
        <p>Variavel: {nome}</p>
        <p>useState: {nomeState}</p>
        <button onClick={handleName}>Mudar</button>
        <hr />
    </div>
  )
}

export default HookUseState
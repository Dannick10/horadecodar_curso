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

  const [age,setAge] = useState('28')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(age)
    setAge('')
  }


  return (
    <div>
        <h2>usestate</h2>
        <p>Variavel: {nome}</p>
        <p>useState: {nomeState}</p>
        <button onClick={handleName}>Mudar</button>
        <hr />

        <form onSubmit={handleSubmit}>
          <input type="text" 
          value={age} 
          onChange={(e)=>setAge(e.target.value)} 
          />
          <input type="submit" value="MUDAR" />
        </form>
        <p> a idade {age}</p>
    </div>
  )
}

export default HookUseState
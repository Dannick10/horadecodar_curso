import { useState } from "react"

const Condicional =() =>{

   const [x] = useState(true)
   const [name,setName] = useState('Matheus')

   return(
    <div>
        <h2>If simples</h2>
        {x && <p>Usuario logado</p>}
        {!x && <p>Usuario deslogado</p>}
        <h2>If ternario</h2>
        {name === 'Daniel'?(<div>Voçê é Daniel</div>):(<div>Voçê nao é daniel</div>)}

        <button onClick={()=>{setName('Daniel')}}> Mudar nome para Daniel</button>

    </div>
   )
}

export default Condicional
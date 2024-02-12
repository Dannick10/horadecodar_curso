import { useState } from "react"

const Condicional =() =>{

   const [x] = useState(true)
   const [name,setName] = useState('Matheus')

   return(
    <div>
        {x && <p>ADMIN</p>}
        {!x && <p>USER</p>}

        {x?<p>ADMIN</p>:<p>USER</p>}

        {name=='Daniel'?<p>SEU NOME È DANIEL</p>:<p>SEU NOME NAO É {name}</p>}
        <button onClick={()=>{
            setName('Daniel')
        }}>MUDAR PARA DANIEL</button>
    </div>
   )
}

export default Condicional
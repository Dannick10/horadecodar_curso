import { useState } from "react"

const Treinar = () =>{

    const [name,setName] = useState()
    const [number,setNumber] = useState()
    console.log(number)
    console.log(name)
    const handlenumber = (e) =>{
        setNumber(e.target.value)
    }

    return(
        <div>
            <form action="">
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" placeholder="digite seu nome"onChange={(e)=>setName(e.target.value)}/>
                <br></br>
                <label>
                    <span>Numero</span>
                    <input type="text" placeholder="digite seu numero" onChange={handlenumber}/>
                </label>
                <input type="submit" value="enviar" />
            </form>
           <p> {name}</p>
           <p> {number}</p>
        </div>
    )
}

export default Treinar
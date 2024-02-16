import { useState } from "react"

const Treinar = () =>{

    const [name,setName] = useState()
    const [number,setNumber] = useState()
    console.log(number)
    console.log(name)
    const handlenumber = (e) =>{
        setNumber(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('envio de form' + name + number)
    }

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
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
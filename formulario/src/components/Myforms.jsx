
import { useState } from 'react'
import './Myforms.css'

const MyForms = () =>{
    //3 geraciar dados
    const [name,setName] = useState()
    const [mall,setMall] = useState()

    const handleName = (e)=>{
      setName(e.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log('enviando o form')
        console.log(name,mall)
    }

    console.log(mall)
    console.log(name)

    return(
        <div>
            {/*Envio de form*/ }
                {/*Criaçao de form*/ }
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">nome</label>
                        <input type="text" name="name" placeholder="digite seu nome" onChange={handleName}/>
                    </div>

                {/*label envolvendo input*/}
                <label htmlFor="email">
                    <span>E-mall</span>
                    {/*Simplificação*/}
                    <input type="email" name="email" placeholder='digite o seu email' onChange={(e)=>{setMall(e.target.value)}} />
                </label>
                    <input type="submit" value="Enviar" />
                </form>

        </div>
    )
}

export default MyForms
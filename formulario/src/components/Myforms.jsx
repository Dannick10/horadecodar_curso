
import { useState } from 'react'
import './Myforms.css'

const MyForms = ({user}) =>{
    //controle input
    //3 geraciar dados
    const [name,setName] = useState(user ? user.name : '')
    const [mall,setMall] = useState(user ? user.email : '')
    const [endereco,setendereco] = useState(user ? user.ender : '')
    
    //7 limpar 

    const handleName = (e)=>{
      setName(e.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log('enviando o form')
        console.log(name,mall,endereco)
        setName('')
        setMall('')
        setendereco('')
    }

    const handleendereco = (e) =>{
        setendereco(e.target.value)
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
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="digite seu nome" 
                        onChange={handleName} 
                        value={name}
                        />
                    </div>

                    <form>
                        <div>
                            <label htmlFor="endereco">Endereço</label>
                        </div>
                        <input type="text"
                        name='endereco'
                        placeholder='Digite o endereço'
                        onChange={handleendereco}
                        value={endereco} />
                      
                    </form>

                {/*label envolvendo input*/}
                <label htmlFor="email">
                    <span>E-mall</span>
                    {/*Simplificação*/}
                    <input 
                    type="email" 
                    name="email" 
                    placeholder='digite o seu email' 
                    onChange={(e)=>{setMall(e.target.value)}}
                    value={mall} />
                </label>
                    <input type="submit" value="Enviar" />
                </form>

        </div>
    )
}

export default MyForms
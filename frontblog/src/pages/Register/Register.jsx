import React from 'react'
import styles from './Register.module.css'
import { useState,useEffect } from 'react'

const Register = () => {

    const [displayName,SetDisplayName] = useState('')
    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('')
    const [confirmpassword,SetConfirmPassword] = useState('')
    const [error,SetError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        SetError('')
        
        const user = {
            displayName,
            email,
            password
        }

        if(password != confirmpassword){
            SetError("As senhas precisam ser iguais!")
            return
        }

        console.log(user)

    }

  return (
    <div className="register">
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text"
                 name='displaynName' 
                 required
                 placeholder='Nome do usuário'
                value={displayName}
                onChange={(e)=>SetDisplayName(e.target.value)}
                 />
                 
            </label>
            <label>
                <span>E-mail:</span>
                <input type="email"
                 name='email' 
                 required
                 placeholder='e-mail do usuario'
                 value={email}
                 onChange={(e)=>SetEmail(e.target.value)}
                 />
            </label>
            <label>
                <span>Senhar:</span>
                <input type="password"
                 name='password' 
                 required
                 placeholder='Insira sua senha'
                 value={password}
                 onChange={(e)=>SetPassword(e.target.value)}
                 />
            </label>
            <label>
                <span>Confirmação de senha:</span>
                <input type="password"
                 name='confirmpassword' 
                 required
                 placeholder='confirme sua sua senha'
                 value={confirmpassword}
                 onChange={(e)=>SetConfirmPassword(e.target.value)}
                 />
            </label>
                <button className='btn'>Cadastrar</button>
                <p>{error && <p className='error'>A senha precisam ser iguais</p>}</p>
        </form>
    </div>
  )
}

export default Register
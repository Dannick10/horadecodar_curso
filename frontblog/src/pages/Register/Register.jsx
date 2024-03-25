import React from 'react'
import styles from './Register.module.css'
import { useState,useEffect } from 'react'

const Register = () => {
  return (
    <div>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form>
            <label>
                <span>Nome:</span>
                <input type="text"
                 name='displaynName' 
                 required
                 placeholder='Nome do usuário'/>
            </label>
            <label>
                <span>E-mail:</span>
                <input type="email"
                 name='email' 
                 required
                 placeholder='e-mail do usuario'/>
            </label>
            <label>
                <span>Senhar:</span>
                <input type="password"
                 name='password' 
                 required
                 placeholder='Insira sua senha'/>
            </label>
            <label>
                <span>Confirmação de senha:</span>
                <input type="password"
                 name='confirmpassword' 
                 required
                 placeholder='confirme sua sua senha'/>
            </label>
                <button className='btn'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Register
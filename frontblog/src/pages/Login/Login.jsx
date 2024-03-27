import React from 'react'
import styles from './Login.module.css'

import { useState,useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Login = () => {

  const [email,SetEmail] = useState('')
  const [password,SetPassword] = useState('')
  const [error,SetError] = useState('')

  const  {createUser, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
      e.preventDefault()

      SetError('')
      
      const user = {
          email,
          password
      }

      const res = await createUser(user)

      console.log(user)

  }

  useEffect(()=>{
    if(authError){
      SetError(authError)
    }
  },[authError])

  return (
    <div className="register">
    <h1>Cadastre-se para postar</h1>
    <p>Faça o login para utilizar o sistema</p>
    <form onSubmit={handleSubmit}>
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
        {!loading &&  <button className='btn'>Entrar</button>}
        {loading && <button className='btn' disabled>Aguarde</button>}
    </form>
</div>
  )
}

export default Login
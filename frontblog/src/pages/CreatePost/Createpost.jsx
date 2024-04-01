import React from 'react'
import style from './CreatePost.module.css'

import { useState } from 'react'
import {useAuthValue } from '../../context/AuthContext'

const Createpost = () => {

  const [title,SetTitle] = useState('')
  const [image,SetImage] = useState('')
  const [body,SetBody] = useState('')
  const [tags,SetTags] = useState([])
  const [formError,SetFormError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={style.create_post}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Titulo: </span>
            <input 
            type="text" 
            name='title'
            required
            placeholder='pense num bom titulo...'
            value={title}
            onChange={(e)=>{SetTitle(e.target.value)}}/>
    
        </label>
        <label>
          <span>URL da imagem: </span>
            <input 
            type="text" 
            name='title'
            required
            placeholder='insira uma imagem'
            value={image}
            onChange={(e)=>{SetImage(e.target.value)}}/>
       
        </label>
        <label>
          <span>
            Conteudo: </span>
            <textarea
            name='body'
            required
            placeholder='Insira o conteudo do post'
            onChange={(e)=> SetBody(e.target.value)}
            value={body}></textarea>
         
       
        </label>
        <label>
          <span>tags:</span>
            <input 
            type="text" 
            name='tags'
            required
            placeholder='insira as tags'
            value={tags}
            onChange={(e)=>{SetTags(e.target.value)}}/>
          
        </label>
      {/*
        {!loading &&  <button className='btn'>Cadastrar</button>}
            {loading && <button className='btn' disabled>Aguarde</button>}
  <p>{error && <p className='error'>{error}</p>}</p>*/}
      </form>
    </div>
  )
}

export default Createpost
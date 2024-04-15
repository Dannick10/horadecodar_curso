import React from 'react'
import style from './Dashboard.module.css'

import { Link } from 'react-router-dom'

import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Dashboard = () => {

  const { user } = useAuthValue()
  const uid = user.uid

  const {documents: posts, loading } = useFetchDocuments('posts', null, uid)

  const deleteDocument = (id) => {

  }

  if(loading) {
    return <p>Carregando</p>
  }
  //posts do usuario
  return (
  <>
    <h2>Dashboard</h2>

    <p>Gerencie os seus posts</p>
   {posts && posts.length === 0 ? (
   <div className={StyleSheet.noposts}>
      <p>Não foram encontrado posts</p>
      <Link to='/posts/create' className='btn'>Crie primeiro posts</Link>
   </div>):
   (<>
   <div>
    <span>Titulo</span>
    <span>Açoes</span>
   </div>

    {posts && posts.map((post) =>(<div key={post.id}>
      <p>{post.title}</p>
      <div>
        <Link to={`posts/${post.id}`} className='btn btn-outline'>Ver</Link>
        <Link to={`posts/edit/${post.id}`} className='btn btn-outline'>Editar</Link>
        <button onClick={() => deleteDocument(post.id)} className='btn btn-outline btn-danger'>
          Excluir
        </button>
      </div>
    </div>
  ))}
   </>)}

  </>
  )
}

export default Dashboard
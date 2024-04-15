import React from 'react'
import style from './Dashboard.module.css'

import { Link } from 'react-router-dom'

import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Dashboard = () => {

  const { user } = useAuthValue()
  const uid = user.uid

  const {documents: posts, loading } = useFetchDocuments('posts', null, uid)

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
   (<div>
    
   </div>)}

    {posts && posts.map((post)=>(<>
      {post.title}
    </>))}

  </>
  )
}

export default Dashboard
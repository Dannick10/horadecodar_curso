import React from 'react'
import styles from './About.module.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o mini <span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito em react e firebase</p>
      <Link to="/posts/create" className="btn">Criar posts</Link>
    </div>
  )
}

export default About
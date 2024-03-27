import { NavLink } from 'react-router-dom'

import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'

import styles from './Navbar.module.css'

const Navbar = () => {
    const {logout} = useAuthentication()
    const {user} = useAuthValue

  return<nav className={styles.navbar}>
    <NavLink to="/"className={styles.brand}>
        Front <span>BLOG</span>
    </NavLink>
    <ul className={styles.links_list}>
        <li>
    <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>
        Home
    </NavLink>
        </li>
        {!user && (
         <>
        <li>
        <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : '')}>
        Login
        </NavLink>
        </li>
        <li>
        <NavLink to="/register" className={({isActive}) => (isActive ? styles.active : '')}>
        Cadastrar
        </NavLink>
        </li>
         </>   
        )}
        {user &&(
            <>
            <li>
            <NavLink to="/posts/create" className={({isActive}) => (isActive ? styles.active : '')}>
            novo Post
            </NavLink>
            </li>
            <li>
            <NavLink to="/dashboard" className={({isActive}) => (isActive ? styles.active : '')}>
            Dashboard
            </NavLink>
            </li>
            </>
        )}
        <li>
    <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : '')}>
        ABOUT
    </NavLink>
        </li>
    {user &&<li>
        <button onClick={logout}>Sair</button>
        </li>}
    </ul>
  </nav>
}

export default Navbar
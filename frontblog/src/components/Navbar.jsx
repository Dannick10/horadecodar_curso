import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return<nav>
    <NavLink to="/">
        Mini <span>BLOG</span>
    </NavLink>
    <NavLink to="/">
        Home
    </NavLink>
    <NavLink to="/about">
        ABOUT
    </NavLink>
  </nav>
}

export default Navbar
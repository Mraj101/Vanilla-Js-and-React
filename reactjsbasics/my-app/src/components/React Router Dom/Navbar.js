import React from 'react'
import { Link } from 'react-router-dom'

import Contact from './Contact'
import Home from './HomePage'

const Navbar = () => {
  return (
    <nav>
        <Link className='nav-link'  to="/contact" >Contact</Link>
        <Link className='nav-link' to="/home" >Home</Link>
        <Link className='nav-link' to="/about" >About</Link>
    </nav>
  )
}

export default Navbar
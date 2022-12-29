import React from 'react'
import { Link } from 'react-router-dom'

import Contact from './Contact'
import Home from './HomePage'

const Navbar = () => {
  return (
    <div>
        <Link to="/home" >Home</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/about" >About</Link>
    </div>
  )
}

export default Navbar
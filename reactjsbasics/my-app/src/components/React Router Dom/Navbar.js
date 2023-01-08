import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav>
        <Link className='nav-link'  to="/blogs" >Blogs</Link>
        <Link className='nav-link' to="/home" >Home</Link>
        <Link className='nav-link' to="/about" >About</Link>
        <Link className='nav-link' to="/" >Default</Link>
    </nav>
  )
}

export default Navbar
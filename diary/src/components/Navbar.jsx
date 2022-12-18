import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt=''/>
        </div>
        <div className='links'>
          <Link>POST</Link>
          <Link>READ</Link>
          <Link>LOGOUT</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
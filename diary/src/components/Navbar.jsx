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
          <span>JOHN</span>
          <Link className='link' to='/single'><h5>READ</h5></Link>
          <Link className='link' to='/login'><h5>LOGOUT</h5></Link>
          <span className='post'>
          <Link className='link' to='/write'><h5>POST</h5></Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
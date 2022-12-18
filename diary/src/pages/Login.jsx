import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type='text' placeholder='name' />
        <input required type='password' placeholder='password' />
        <button>login</button>
        <span>Don't have a diary? <Link to ='/register'>Create one!</Link></span>
      </form>
      </div>
  )
}

export default Login
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='name' />
        <input required type='password' placeholder='password' />
        <button>register</button>
        <span>Already have a diary? <Link to ='/login'>Login</Link></span>
      </form>
      </div>
  )
}

export default Register
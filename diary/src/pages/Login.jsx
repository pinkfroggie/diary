import React from 'react'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type='text' placeholder='name' />
        <input type='password' placeholder='password' />
        <button>login</button>
      </form>
      </div>
  )
}

export default Login
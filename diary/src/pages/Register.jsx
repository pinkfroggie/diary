import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
  }) 

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    // try catch block to catch errors with registering
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
    try{
      const res = await axios.post("/auth/register", inputs)
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }
 
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='name' name='name' onChange={handleChange}/>
        <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>register</button>
        <span>Already have a diary? <Link to ='/login'>Login</Link></span>
      </form>
      </div>
  )
}

export default Register;
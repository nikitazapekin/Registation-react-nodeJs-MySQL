import React from 'react'
import { Link } from 'react-router-dom'
import validation from './SignUpValidation'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function SignUp(){

const navigate=useNavigate()
    const [values, setValues]=useState({
        name: '',
        email: '',
password: ''
    })
    const [errors, setErrors]=useState({})
const handleSubmit =(event)=> {
    event.preventDefault()
setErrors(validation(values))
    console.log(1111)
    axios.post('http://localhost:8081/signup', values)
    .then(res=>navigate('/'))
    .catch(err=>console.log(err))
//}
}
const handleInput=(event)=> {
setValues(prev=> ({...prev, [event.target.name]: [event.target.value]}))
}
 
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'> 
        <div className='bg-white p-3 rounded w-25'>
            <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                    <label htmlFor="name">Name</label>
                    <input name="name"  onChange={handleInput}  type="text"  placeholder='Enter name' className='form-control rounded-0' />
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input  onChange={handleInput} type="email"  placeholder='Enter Email' className='form-control rounded-0' name="email" />
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
        
                    <label htmlFor="password">Password</label>
                    <input onChange={handleInput} type="password"  placeholder='Enter password' name="password"  className='form-control rounded-0' />
              
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type="submit" className='btn btn-success'>Sign up </button>
                <p>You are agree to privacy</p>
                <Link to="/" className='btn btn-default border text-decoration-none'>login </Link>
            </form>
        </div>
                </div>
      
    )
}
export default SignUp
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validation  from './LoginValidation'
import axios from 'axios'
import Home from './Home'
import { useNavigate } from 'react-router-dom'
function Login(){
    const navigate=useNavigate()
    const [values, setValues]=useState({
        email: '',
password: ''
    })
    const [errors, setErrors]=useState({})
const handleSubmit =(event)=> {
    event.preventDefault()
setErrors(validation(values))

console.log(1111)
axios.post('http://localhost:8081/login', values)
.then(res=>{
    if(res.data==="success"){

        navigate('/homepage')
    }
    else {
        alert("err")
    }
})
.catch(err=>console.log(err))
}
const handleInput=(event)=> {
//event.preventDefault()
setValues(prev=> ({...prev, [event.target.name]: [event.target.value]}))
}
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'> 
<div className='bg-white p-3 rounded w-25'>
    <form action="" onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor="email">Email</label>
            <input name="email" type="email"  placeholder='Enter Email' className='form-control rounded-0' onChange={handleInput} />
{errors.email && <span className='text-danger'>{errors.email}</span>}
        </div>
        <div className='mb-3'>

            <label htmlFor="password">Password</label>
            <input
            name="password"
            type="password"  placeholder='Enter password'  className='form-control rounded-0'  onChange={handleInput} />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
        </div>
        <button type="submit" className='btn btn-success'>Login </button>
        <p>You are agree to privacy</p>
        <Link to="/signup" className='btn btn-default border text-decoration-none'>Create account </Link>
    </form>
</div>
        </div>
    )
}
export default Login

//TEST neTest@gmail.com neTESTing12345
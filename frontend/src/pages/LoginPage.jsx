import React from 'react'
import { Link } from 'react-router-dom'
const LoginPage = () => {
  return (
    <div className='flex flex-col'>
        <h1>Login</h1>
        <Link to='/register'>Register Now!</Link>
    </div>
  )
}

export default LoginPage
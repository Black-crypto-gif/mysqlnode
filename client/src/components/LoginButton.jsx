import React from 'react'
import { Link } from 'react-router-dom'

function LoginButton() {
  return (
    <Link to='/login' className='login'>Login</Link>
  )
}

export default LoginButton
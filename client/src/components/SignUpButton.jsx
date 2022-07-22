import React from 'react'
import { Link } from 'react-router-dom'

function SignUpButton() {
  return (
    <Link to='/signup'>
      <input type="button" value="Sign in" className='singin'/>
    </Link>
  )
}

export default SignUpButton
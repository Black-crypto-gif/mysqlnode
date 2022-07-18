import React from 'react'
import { BiLogIn } from 'react-icons/bi'
import { FaBloggerB } from 'react-icons/fa'
import { Outlet, Link } from 'react-router-dom'

function Navigation() {
  return (
    <header>
        <nav>
            <div className="logo">
                <FaBloggerB className='logo' />
            </div>
            <button className="btn btn-login">
            <Link to='/login'>
            <BiLogIn className='btn-logo'/>
                Login
            </Link>
            </button>
            <button className='btn'>
            <Link to='/signup'>
            <BiLogIn className='btn-logo'/>
                SingUp
            </Link>
            </button>
        </nav>
    </header>
  )
}

export default Navigation
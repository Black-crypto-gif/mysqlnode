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
            <Link to='/'>
            <BiLogIn className='btn-logo'/>
                Login
            </Link>
            </button>
        </nav>
    </header>
  )
}

export default Navigation
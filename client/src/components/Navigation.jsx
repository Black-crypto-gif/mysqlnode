import React from 'react'
import { BiLogIn } from 'react-icons/bi'
import { FaBloggerB } from 'react-icons/fa'

function Navigation() {
  return (
    <header>
        <nav>
            <div className="logo">
                <FaBloggerB className='logo' />
            </div>
            <button className="btn btn-login">
                <BiLogIn className='btn-logo'/>
                Login
            </button>
        </nav>
    </header>
  )
}

export default Navigation
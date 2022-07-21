import React from 'react'
import atom from '../assets/atom.png'
import SignUpButton from './SignUpButton'

function Navigation() {
    return (
        <>
            <header>
                <div className="logo">
                    <img src={atom} alt="logo" className='logo-logo' />
                    <span className="logo-text">
                       Atomic
                    </span>
                </div>
                <div className="nav" id='nav'>
                    <div className="nav-items">
                        <a href='#welcome-page'>
                            Home
                        </a>
                    </div>
                    <div className="nav-items">
                        Blog
                    </div>
                    <p className="nav-items">
                        <a href='#card-section'>
                            Projects
                        </a>
                    </p>
                    <div className="nav-items">
                        About
                    </div>
                </div>
                <div className="btn-header">
                    <a href='#' className='contact'>Contact</a>
                    <a href='#' className='login'>Login</a>
                    <SignUpButton />
                </div>
            </header>
        </>
    )
}

export default Navigation
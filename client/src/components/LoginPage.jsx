import React from 'react'
import login from '../assets/next-page.png'
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
import {FaFacebookSquare, FaGithub, FaTwitter } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function LoginPage() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <section id="loginpage">
        <div className="content" data-aos="fade-up">
            <img className='icons' src={login} alt="login" />
            <div className="login-page-content">
                <h3 className="login-text type">
                    Login to Atomic  
                </h3>
                <form action="" className="login">
                    <label htmlFor="email">
                        Email :
                    </label>
                    <input type="email" name="email" id="email" required title='Email' />
                    <label htmlFor="password">
                        Password :
                    </label>
                    <input type="password" name="password" id="password" required title='Password' />
                    <button className='btn-submit-login'>
                        Log in
                    </button>
                    <span className='login-backup'>
                        Or Social authentication to Login
                    </span>
                    <button className='btn-social'>
                        <FaFacebookSquare className='fa' />
                            Sign in With facebook
                        
                    </button>
                    <button className='btn-social'>
                        <FaGithub className='fa' />
                            Sign in With Github
                        
                    </button>
                    <button className='btn-social'>
                        <FaTwitter className='fa' />
                            Sign in With Twitter
                        
                    </button>
                    <div className="additional-links">
                    <Link to='/signup' className='active'>
                    Sign up
                    </Link>
                    <a href="">Forgot your Password ?</a>
                    <a href="">Forgot your Email ?</a>
                </div>
                </form>
                
            </div>
        </div>
    </section>
  )
}

export default LoginPage
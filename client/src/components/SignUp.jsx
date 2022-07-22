import React from 'react'
import signup from '../assets/signup.png'
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
function SignUp() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (

    <section id="welcome-page" className='reveal'>
        <div className="content" data-aos="fade-up">
            <img className='icons' src={signup} alt="login" />
            <div className="signup-page-content">
                <h3 className="signup-text type">
                    Create New Account :
                </h3>
               <form action="" className="signup">
                <label htmlFor="Name">
                    First Name :
                </label>
                <input type="text" name="name" id="name" required title='name'/>
                <label htmlFor="fname">
                    Last Name:
                </label>
                <input type="text" name="fname" id="fname" required title='fname'/>
                <label htmlFor="email">
                    Email :
                </label>
                <input type="email" name="email" id="email" required title='email'/>
                <label htmlFor="password">
                    Password :
                </label>
                <input type="password" name="password" id="password" required title='password'/>
                <label htmlFor="address">
                    Address :
                </label>
                <input type="text" name="address" id="address" required title='address'/>
                <button>
                    Create Account
                </button>
               </form>
            </div>
        </div>
    </section>
  )
}

export default SignUp
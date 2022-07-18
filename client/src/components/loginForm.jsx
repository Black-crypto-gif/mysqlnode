import React from 'react'
import loginform from '../assets/loginform.png'
import AOS from "aos";
import "aos/dist/aos.css";
function LoginForm() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className="login-form" data-aos="flip-left">
        <img className='login-img' src={loginform} alt="form"/>
        <div className='form-groupe-login'>
            <h2>Welcome back </h2>
            <form className='loginform'>
                <label htmlFor="email">
                    Email Address
                </label>
                <input type="email" name='email' id='email' placeholder='email' required />
                <label htmlFor="password">
                    Password :
                </label>
                <input type="password" name="password" id="password" placeholder='Password' title='required' required />
                <a className='forget-password'>
                    forget your password?
                </a>
                <button className='btn' type="submit">
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default LoginForm
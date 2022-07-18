import React from 'react'
import {useEffect} from 'react'
import FormImg from '../assets/form-signin.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import AOS from "aos";
import "aos/dist/aos.css";

function SignUpForm() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='landing-form' data-aos="flip-left">
        <img src={FormImg} alt="img" className='form-image' />
        <div className="form-container">
        <h2 className="form-title">
            Add Your Authentication information
        </h2>
        <form action="">
          <label htmlFor="fname">
            First Name:
          </label>
          <input type="text" name="fname" id="fname" placeholder='Name' title='Use only letter'/>
          <label htmlFor="lname">
            Last Name:
          </label>
          <input type="text" name="lname" id="lname" placeholder='Last Name' title='Use only letters' />
          <label htmlFor="email">
            Email:
          </label>
          <input type="email" name="email" id="email" placeholder='Email' title='Enter your email' />
          <label htmlFor="phone">
            Phone Number:
          </label>
          <PhoneInput
            country={'us'}
            inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true
        }}
            />
          <label htmlFor="address">
            Address:
          </label>
          <input type="text" name="address" id="address" placeholder='Address' title='add the address' />
          <label htmlFor="password">
            Password:
          </label>
          <input type="password" name="password" id="password" placeholder='Password' title='Use Strong password'/>
          <button className='btn'>
            Submit
          </button>
        </form>
    </div>
    </div>
    
  )
}

export default SignUpForm
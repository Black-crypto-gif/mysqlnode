import React from 'react'
import boy from '../assets/landing-page.png'
import SignUpButton from './SignUpButton'
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';

function Content() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="welcome-page" className='reveal'>
    <div className="content" data-aos="fade-up">
        <img className='icons'src={boy} alt="" />
        <div className="welcome-page-content">
            <h3 className="welcome-text type">
                Welcome To Atom 
            </h3>
            <p className="welcome-p">
            Sing up so you can join to community of atomic science,
            share, post anything you want with your friends.
            </p>
            <SignUpButton />
        </div>
        
    </div>
</section>
  )
}

export default Content
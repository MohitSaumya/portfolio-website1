import React from 'react'
import './Footer.css'
import footer_logo from '../../Images/footer_logo.svg'
import user_icon from '../../Images/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
      <div className='footer-top-left'>
      <img src={footer_logo} alt='' />
      </div>
      <p>I am a frontend developer from, INDIA with 10 years of Experience.</p>
      </div>
      <div className='footer-top-right'>
      <div className='footer-email-input'>
        <img src={user_icon} alt='' />
        <input type='email' placeholder='Enter your email' />
      </div>
      <div className='footer-subscribe'>
      subscribe
      </div>
      </div>
      <hr />
      <div className='footer-bottom'>
      <p className='footer-bottom-left'> All rights reserved. </p>
      <div className='footer-bottom-right'>
      <p>Term of Services</p>
      <p>Privacy Policy</p>
      <p>Connect with me </p>
      </div>

      </div>
    </div>
  )
}

export default Footer

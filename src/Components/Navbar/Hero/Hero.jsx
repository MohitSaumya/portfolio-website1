import React from 'react'
import './Hero.css'
import profile_img from '../../../Images/profile_img.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt='' />
      <h1><span>I'm Mohit Singh,</span> frontend developer based in India.</h1>
      <p>I am a frontend developer from India with 2 years 7 months of experience.</p>

      <div className='hero-action'>
      <div className='hero-connect'>
      Connect with me</div>
      <div className='hero-resume'>
      My resume
      </div>
      </div>
    </div>
  )
}

export default Hero

import React from 'react'
import './About.css'
import theme_pattern from '../../Images/theme_pattern.svg'
import profile_img from '../../Images/profile_img.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
      <h1>About me</h1>
      <img src={theme_pattern} alt='' />
      </div>
      <div className='about-sections'>
      <div className='about-left'>
      <img src={profile_img} alt='' />
      </div>
      <div className='about-right'>
      <div className='about-para'>
      <p>I am experienced frontend developer with experience in React,Redux, Typescript</p>
      <p>My passion for frontend development is not only limited to frontend but i want to become a full stack developer</p>
      </div>
      <div className='about-skills'>
      <div className='about-skill'>
        <p>HTML & CSS</p><hr style={{width:"50%"}} />
      </div>
      <div className='about-skill'>
        <p>React JS</p><hr style={{width:"70%"}} />
      </div>
      <div className='about-skill'>
        <p>Javascript</p><hr style={{width:"60%"}} />
      </div>
      </div>

      </div>
      </div>
      <div className='about-achievements'>
      <div className='about-achievement'>
        <h1>10+</h1>
        <p>Years of experience</p>
      </div>
      <hr />
      <div className='about-achievement'>
        <h1>90+</h1>
        <p>PROJECTS COMPLETED</p>
      </div>
      <hr />
      <div className='about-achievement'>
        <h1>15+</h1>
        <p>Happy Clients</p>
      </div>
      </div>
    </div>
  )
}

export default About

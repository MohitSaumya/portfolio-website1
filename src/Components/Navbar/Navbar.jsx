import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Images/logo.svg'
import underline from '../../Images/nav_underline.svg'
import { Link } from 'react-scroll'
import menu_open from '../../Images/menu_open.svg'
import menu_close from '../../Images/menu_close.svg'

const Navbar = () => {

  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src= {logo} alt='' />
      <img src={menu_open} alt='' />
      <ul className='nav-menu'>
      <img src={menu_close} alt='' className='nav-mob-close' />
      <li><Link
            to='home'
            smooth={true}
            duration={500}
            onClick={() => setMenu('home')}
          >
            home
          </Link>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
      <li><Link
            to='about'
            smooth={true}
            duration={500}
            onClick={() => setMenu('home')}
          >
          About
          </Link><p onClick={()=>setMenu("about")}></p>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
      <li><Link
            to='services'
            smooth={true}
            duration={500}
            onClick={() => setMenu('home')}
          >
          Services
          </Link><p onClick={()=>setMenu("services")}></p>{menu==="services"?<img src={underline} alt=''/>:<></>}</li>
      <li><Link
            to='contact'
            smooth={true}
            duration={500}
            onClick={() => setMenu('home')}
          >
           Contact 
          </Link><p onClick={()=>setMenu("work")}></p>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
      <li><Link
            to='home'
            smooth={true}
            duration={500}
            onClick={() => setMenu('home')}
          >
            
          </Link><p onClick={()=>setMenu("contact")}></p>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>

      </ul>
      <div className='nav-connect'>
      <Link
    to='contact'
    smooth={true}
    duration={500}
    onClick={() => setMenu('contact')}
  >
    Connect With Me
  </Link>
      </div>
    </div>
  )
}

export default Navbar

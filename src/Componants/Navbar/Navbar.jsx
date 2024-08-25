import React from 'react'
import './Navbar.css'
import Logo from './../../assets/line-med-logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={Logo} alt=''></img>
      <div className='btn'>
      <a className='btn' href="mailto:linemed2024@gmail.com">contact</a>
      </div>
    </nav>
    
  )
}

export default Navbar
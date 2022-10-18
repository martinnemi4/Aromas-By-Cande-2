import React from 'react'
import './Logo.css'
import logo from '../../Assets/abc-Logo.jpg'

const Logo = () => {
  return (
    <div id='logo'>
        <img src={logo} alt='logo' width='120px'></img>
    </div>
  )
}

export default Logo
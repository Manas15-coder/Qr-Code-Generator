import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isOpen,setIsOpen] = useState(false);
    const toggleSidebar = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <>
    <nav className='navbar'>
        <div className="navbar-brand">
            <a href="#"><span>
                <i class="fa-solid fa-qrcode"></i>
                QrGen
            </span></a>
        </div>
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#learn">Features</a>
          <a href="#qr" className='try-now'>Try Now</a>
        </div>
        <button className='sidebar-toggle-1' onClick={toggleSidebar}>{isOpen ? 'X' : '☰'}</button>
    </nav>
    {/*mobile nav*/}
    <div className={`mobile-nav ${isOpen ? 'open':' '}`}>
    <ul>
        <li><a href='#' onClick={toggleSidebar}>Home</a> </li>
        <li><a href='#learn' onClick={toggleSidebar}>Features</a></li>
        <li><a href='#qr' onClick={toggleSidebar} className='try-now'>Try Now</a></li>
    </ul>
    </div>
    </>
  )
}

export default Navbar
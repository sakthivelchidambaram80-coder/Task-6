import React from 'react'
import './Navbar.css'
import { AiOutlineMoon } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import profileImage from '../images/profile.png';

export default function Navbar() {
  return (
    <>
    <div className='navbar'>
        <div className='navbar-content'>
            <input type='text' placeholder='Search' className='search-input' />
            <div className='navbar-icons'>                 
                <button className='nav-btn'> <AiOutlineMoon /></button>
                <button className='nav-btn'> <FaRegBell /></button>
                <img src={profileImage} alt="Profile" className='nav-profile-img' />

            </div>

        </div>


    </div>
    
    
    </>
  )
}

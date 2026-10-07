import React from 'react'
import './Slidebar.css'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
import { MdWindow } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

export default function Slidebar() {
  return (
    <>

    <div className='slidebar'>
        <div className='slidebar-logo'>
            <img src={logo} alt="Logo" />
        </div>

        <div className='slidebar-items'>            
            
            <Link to="/"><button className='create-btn'><MdWindow /></button></Link> 
            <Link to="/Active"><button className='create-btn'><BiNotepad /></button></Link>  
            <Link to="/Favorites"><button className='create-btn'><FaRegHeart /></button></Link>
            <Link to="/Collections"><button className='create-btn'><FaRegStar /></button></Link>
            <Link to="/Profile"><button className='create-btn'><CgProfile /></button></Link>
            <Link to="/Settings"><button className='create-btn'><IoSettingsOutline /></button></Link>     


        </div>


        <div className='slidebar-footer'>
           
            <button className='create-btn'><TbLogout /></button>

        </div>








    </div>   
    
    </>
  )
}

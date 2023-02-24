import React from 'react'
import './Navbar.css';
import logo from './media/logos.jpg'
import { NavLink } from 'react-router-dom'
// import { useState, useEffect } from 'react';

export default function Navbar() {
  return (
    <>
     <nav >
            <ul>
<<<<<<< HEAD
                <a href="/"><img src={logo} alt='' id='logo' /></a>
                <NavLink to="/" ><label>Home</label></NavLink>&emsp;&emsp;
=======
              <div className='navbar'>
                <img src={logo} alt="" id='logo'></img>
                <NavLink to="/home" ><label>Home</label></NavLink>&emsp;&emsp;
>>>>>>> 2705f5cc50268d5ee52aef2401d97b0662eb9b3e
                <NavLink to="/flight" ><label>FLIGHTS</label></NavLink>&emsp;&emsp;
                <NavLink to="/hotel" ><label>HOTELS</label></NavLink>&emsp;&emsp;
                <NavLink to="/booking"><label>Booking History</label></NavLink>&emsp;&emsp;  
                <NavLink to="/about"><label>About us</label></NavLink>&emsp;&emsp;  
                <NavLink to="/login"><label>Login</label></NavLink>&emsp;&emsp;  
                </div>  
            </ul>
        </nav>
    </>
  )
}


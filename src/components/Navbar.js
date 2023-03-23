import React from 'react'
import './Navbar.css';
import logo from './media/logos.jpg'
import { NavLink } from 'react-router-dom'
// import { useState, useEffect } from 'react';
import { useTheme } from './authcontext';
export default function Navbar() {
  const theme = useTheme();
 const handlelogout=()=>{
    theme.handlelogout();
 }
  return (
    <>
     <nav >
            <ul>
                <a href="/"><img src={logo} alt='' id='logo' /></a>
                <NavLink to="/" ><label>Home</label></NavLink>&emsp;&emsp;
                <NavLink to="/flight" ><label>FLIGHTS</label></NavLink>&emsp;&emsp;
                <NavLink to="/hotel" ><label>HOTELS</label></NavLink>&emsp;&emsp;
                <NavLink to="/booking"><label>My Bookings</label></NavLink>&emsp;&emsp;  
                <NavLink to="/about"><label>About us</label></NavLink>&emsp;&emsp;
{(!theme.login)?<NavLink to="/login"><label>Login</label></NavLink>:<NavLink to="/login"><label onClick={handlelogout}>Logout</label></NavLink>}
                {/* <NavLink to="/login"><label>Login</label></NavLink>&emsp;&emsp;   */}
                {/* <Avatar src="/broken-image.jpg" alt=''/> */}
            </ul>
        </nav>
    </>
  )
}


import React from 'react'
import './Navbar.css';
import logo from './media/logos.jpg'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
     <nav >
            <ul>
                <a href="/"><img src={logo} alt='' id='logo' /></a>
                <NavLink to="/" ><label>Home</label></NavLink>&emsp;&emsp;
                <NavLink to="/flight" ><label>FLIGHTS</label></NavLink>&emsp;&emsp;
                <NavLink to="/hotel" ><label>HOTELS</label></NavLink>&emsp;&emsp;
                <NavLink to="/booking"><label>Booking History</label></NavLink>&emsp;&emsp;  
                <NavLink to="/about"><label>About us</label></NavLink>&emsp;&emsp;  
                <NavLink to="/login"><label>Login</label></NavLink>&emsp;&emsp;    
            </ul>
        </nav>
    </>
  )
}

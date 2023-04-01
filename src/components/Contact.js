import React from 'react'
import './Contact.css'
import { toast } from 'react-toastify';
export default function Contact() {
 const handletoast=()=>{
    toast.success("Thank you For contacting us!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
 }
  return (
    <>
    <div class="ccontainer">
    <div class="contact-box">
      <div class="left"></div>
      <div class="right">
        <h2>Contact Us</h2>
        <input type="text" class="field" placeholder="Your Name"/>
        <input type="text" class="field" placeholder="Your Email"/>
        <input type="text" class="field" placeholder="Phone"/>
        <textarea placeholder="Message" class="field"></textarea>
        <button class="btn" onClick={handletoast}>Send</button>
      </div>
    </div>
  </div>
</>
  )
}

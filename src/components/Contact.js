import React, { useRef } from 'react'
import './Contact.css'
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import axios from "axios";
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
  const form = useRef();

 function cdata(e){
  e.preventDefault();
  const data = new FormData(e.currentTarget);
 
 const contactdata={
  Name:data.get('Name'),
  Email:data.get('Email'),
  Phone:data.get('Phone'),
  Message:data.get('Message')
 };
 console.log(contactdata);
    axios
      .post("https://backend-server-5pd1.onrender.com/api/contact", contactdata)
      emailjs
      .sendForm(
        "service_ukt71cq",
        "template_mmsi8c4",
        form.current,
        "vI1h7guVd1aWOKHS9"
      )
      .then((response,result) => {
        handletoast();
        console.log(result.text);
        console.log("message sent");
      })
      .catch((e) => console.log(e));



     
       
  }

  return (
    <>
   
    <div class="ccontainer">
    <form ref={form}  onSubmit={cdata}>
    <div class="contact-box">
      <div class="left"></div>
      <div class="right">
        <h2>Contact Us</h2>
        <input type="text" class="field" placeholder="Your Name" htmlFor="name" name="Name"
        />
        <input type="text" class="field" placeholder="Your Email"  htmlFor="mail" name="Email"/>
        <input type="text" class="field" placeholder="Phone"  htmlFor="phone" name="Phone"/>
        <input type="text" placeholder="Message" class="field" name="Message" htmlFor="Message"/>     
        <button class="btn">Send</button>
      </div>
    </div>
    </form>
  </div>
  
</>
  )
}

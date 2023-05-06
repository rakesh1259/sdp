import React,{useRef} from "react";
import "./Hotel.css";
import emailjs from "@emailjs/browser";
import h from "./media/hotel.jpg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router-dom";
import a2 from "./media/airplane2no.png"
import { useState } from "react";
import { useTheme } from "./authcontext";
import axios from 'axios';
import HResults from "./HResults";
export default function Hotel() {
  const form = useRef();
  const handletoast=()=>{
    toast.info('Available Hotels', {
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
     const handletoastauth = () => {
      toast.warning("LOGIN FIRST", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId:"s1",
      });
    };
     const [location, setLocation] = useState();
  const [room, setTor] = useState();
  const [doj, setDate] = useState();
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  const navigate=useNavigate();
 function hoteldata(e){
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  setLocation(data.get("location"));
  setTor(data.get("room"));
  setDate(data.get("doj"));
   const hoteluserdata={
     location:data.get('location'),
     TypeofRoom:data.get('room'),
     Checkin:data.get('doj'),
     CheckOut:data.get('dor'),
    guests:data.get('guest')
   }
  
   console.log(hoteluserdata);
   axios.post("https://backend-server-5pd1.onrender.com/api/hotel",hoteluserdata)
   emailjs
   .sendForm(
     "service_qo8k3o5",
     "template_ialvrhb",
     form.current,
     "E1XeV4OmsDFTPhfbH"
   )
   .then((response,result)=> {
    // navigate("/hresult");
    handletoast();
    console.log(result.text);
        console.log("message sent");
   })
   .catch(e=>console.log(e))
  //  const [ setFormData] = useState({});
  //  const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const location = event.target.elements.location.value;
  //   const room = event.target.elements.room.value;
  //   setFormData({ location, room });
    

  // };

 }
 const theme = useTheme();
 if (theme.login === true) {
  return (
    <>
      <div className="parent">
        <img src={h} alt=""></img>
      </div>
      <div className="ho_container">
        <form ref={form} id="hform" onSubmit={hoteldata} action="HResults.js">
          <h1>Book Your Hotel</h1>
          <label htmlFor="location">Location:</label>
          <input type="text" placeholder="Enter Place" name="location" required />
          <label htmlFor="TypeofRoom">Type of Room:</label>
          <select name="room" id="Type of Room" >
            <option value="sroom">Suit Room</option>
            <option value="DELUXE ROOM">Deluxe Room</option>
            <option value="Normal Room">Normal Room</option>
          </select>
          <label htmlFor="Checkin">Check in:</label>
          <input type="date" id="doj" name="doj" required min={disablePastDate()} ></input>
          <label htmlFor="CheckOut" id="cls1">
            Name:
          </label>
          <input type="text" id="dor" name="dor" required placeholder="Enter Your Name" ></input>
          <label htmlFor="guests" id="cls5">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter Email"
           name="guest"
          />
          <button >search</button>
        </form>
      </div>
      {
      location &&
     <HResults location = {location} room = {room} doj = {doj} />
      }
    </>
     
  );
}else {
  handletoastauth();
  const handlebutton=()=>{
    navigate('/login')
  }
  return (
    <>
      <img src={a2} class="ufo1" alt=""/>
<img src={a2} class="ufo2" alt=""/>

<div class="starsBG">
<div class="authcontainer">
  <div class="main2">
    <p>Please Login</p>
    <button onClick={handlebutton}>Login Here</button>
  </div>
</div>
</div>
    </>
  );
}
}
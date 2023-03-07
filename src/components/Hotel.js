import React from "react";
import "./Hotel.css";
import h from "./media/hotel.jpg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import { useState } from 'react';
export default function Hotel() {
  const handletoast=()=>{
    toast('Hotel Booked Sucessfully', {
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
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  var [location,setLocation]= useState(null);
 var [tor,setTor]=useState(null);
 var [rin,setRin]=useState(null);
 var [rout,setRout]=useState(null);
 var [guest,setGuests]=useState(null);
//  const navigate=useNavigate(false)
 function hoteldata(e){
  e.preventDefault();

   const hoteluserdata={
     location:location,
     TypeofRoom:tor,
     Checkin:rin,
     CheckOut:rout,
    guests:guest
   }
   console.log(hoteluserdata);
   axios.post("http://localhost:1259/api/hotel",hoteluserdata)
   .then((response)=> {
    handletoast();
   })
   .catch(e=>console.log(e))

 }
  return (
    <>
      <div class="parent">
        <img src={h} alt=""></img>
      </div>
      <div className="ho_container">
        <form action="#" id="hform" onSubmit={hoteldata}>
          <h1>Book Your Hotel</h1>
          <label for="location">Location:</label>
          <input type="text" placeholder="Enter Place" required onChange={(e)=>{setLocation(e.target.value)}}/>
          <label for="TypeofRoom">Type of Room:</label>
          <select name="room" id="Type of Room" onChange={(e)=>{setTor(e.target.value)}}>
            <option value="sroom">Suit Room</option>
            <option value="droom">Deluxe Room</option>
            <option value="nroom">Normal Room</option>
          </select>
          <label for="Checkin">Check in:</label>
          <input type="date" id="doj" name="doj" required min={disablePastDate()} onChange={(e)=>{setRin(e.target.value)}}></input>
          <label for="CheckOut" id="cls1">
            Check Out:
          </label>
          <input type="date" id="doj" name="doj" required min={disablePastDate()} onChange={(e)=>{setRout(e.target.value)}}></input>
          <label for="guests" id="cls5">
            No of Guests:
          </label>
          <input
            type="number"
            placeholder="Number of Persons"
            min="1"
            max="5"
            required
            onChange={(e)=>{setGuests(e.target.value)}}
          />
          <button>Book</button>
        </form>
      </div>
    </>
  );
}

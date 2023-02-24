import React from "react";
import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Flight.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
export default function Flight() {
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

 const handletoast=()=>{
toast('Flight Booked Sucessfully', {
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
 var [source,setSource]= useState(null);
 var [dest,setDestini]=useState(null);
 var [cls,setClass]=useState(null);
 var [doj,setJourneydate]=useState(null);
 var [dor,setReturndate]=useState(null);
 var [passg,setPassengers]=useState(null);
//  const navigate=useNavigate(false)
 function flightdata(e){
  e.preventDefault();

   const flightuserdata={
     source:source,
     destination:dest,
     typeoftravel:cls,
    dateofjourney:doj,
    dateofreturn:dor,
    passengers:passg
   }
   console.log(flightuserdata);
   axios.post("http://localhost:1259/api/flight",flightuserdata)
   .then((response)=> {
    handletoast();
   })
   .catch(e=>console.log(e))

 }
  return (
    <>
      <div className="s_container" >
       <marquee direction="left" scrollamount="12" className="blink">
        <div ><img src="https://www.dl.dropboxusercontent.com/s/5beukq1zg37jlr7/airbus.png" alt=""></img></div>
        </marquee>
      </div>
      <div className="f_container">
        <form onSubmit={flightdata} id="fform">
          <h1>Book Your Flight</h1>
          <label for="source" id="cls2">
            Source:
          </label>
          <input type="text" placeholder="Enter Source" required onChange={(e)=>{setSource(e.target.value)}}/>
          <label for="destination" id="cls3">
            Destination:
          </label>
          <input type="text" placeholder="Enter Destination" required onChange={(e)=>{setDestini(e.target.value)}} />
          <label for="destination" id="cls4">
            Type of Travel:
          </label>
          <select name="cls" id="Type of Travel" onChange={(e)=>{setClass(e.target.value)}} >
            <option value="none" >None</option>
            <option value="BusinessClass" >BusinessClass</option>
            <option value="EconomyClass" >EconomyClass</option>
            <option value="FirstClass" >FirstClass</option>
          </select>
          <label for="Journey Date" id="cls" >
            Date of Journey:
          </label>
          <input type="date" id="doj" name="doj" required min={disablePastDate()} onChange={(e)=>{setJourneydate(e.target.value)}}></input>
          <label for="Journey Date" id="cls1">
            Date of Return:
          </label>
          <input type="date" id="doj" name="doj" required min={disablePastDate()} onChange={(e)=>{setReturndate(e.target.value)}}></input>
          <label for="destination" id="cls5">
            No of passengers:
          </label>
          <input
            type="Number"
            placeholder="Number of Passengers"
            min="1"
            max="5"
            required
            onChange={(e)=>{setPassengers(e.target.value)}}
          />
          <button  >Search</button>
        </form>
      </div>
    </>
  );
}

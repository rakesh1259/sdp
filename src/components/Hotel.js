import React from "react";
import "./Hotel.css";
import h from "./media/hotel.jpg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Hotel() {
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
   const hoteluserdata={
     location:data.get('location'),
     TypeofRoom:data.get('room'),
     Checkin:data.get('doj'),
     CheckOut:data.get('dor'),
    guests:data.get('guest')
   }
   console.log(hoteluserdata);
   axios.post("http://localhost:1259/api/hotel",hoteluserdata)
   .then((response)=> {
    navigate("/hresult");
    handletoast();
   })
   .catch(e=>console.log(e))

 }
  return (
    <>
      <div className="parent">
        <img src={h} alt=""></img>
      </div>
      <div className="ho_container">
        <form  id="hform" onSubmit={hoteldata}>
          <h1>Book Your Hotel</h1>
          <label htmlFor="location">Location:</label>
          <input type="text" placeholder="Enter Place" name="location" required />
          <label htmlFor="TypeofRoom">Type of Room:</label>
          <select name="room" id="Type of Room" >
            <option value="sroom">Suit Room</option>
            <option value="droom">Deluxe Room</option>
            <option value="nroom">Normal Room</option>
          </select>
          <label htmlFor="Checkin">Check in:</label>
          <input type="date" id="doj" name="doj" required min={disablePastDate()} ></input>
          <label htmlFor="CheckOut" id="cls1">
            Check Out:
          </label>
          <input type="date" id="dor" name="dor" required min={disablePastDate()} ></input>
          <label htmlFor="guests" id="cls5">
            No of Guests:
          </label>
          <input
            type="number"
            placeholder="Number of Persons"
            min="1"
            max="5"
            required
           name="guest"
          />
          <button>Search</button>
        </form>
      </div>
    </>
  );
}

import React from 'react'
import s from "./media/hotel-t.jpg"
import t from "./media/hotel-s.jpg"
import r from "./media/rating.png"
 import c from "./media/check.png"
 import ra from "./media/roomav.png"
 import { toast } from "react-toastify";
import './Hotel.js'
import './Hresult.css'
export default function HResults(props) {
  const handletoast = () => {
    toast.success("HOTEL BOOKED SUCCESSFULLY!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleclickhotel=()=>{
    handletoast();
  }
  return (
    <>
    <div className="hcon">
      <div class="ing">
        <img src={t} alt="" />
      </div>
    <h1>HOTEL TAJ</h1>
    <div className="rating">
      <img src={r} alt=""/>
    </div>
    <hr/>
    <h2>{props.location}</h2>
    <div class="check">
      <img src={c} alt=""></img>
    </div>
    <h4>Free Wifi</h4>
    <div class="check1">
      <img src={c} alt=""></img>
    </div>
    <div className="food">
      <h4>Free Food</h4>
    </div>
    <div class="roomav">
      <img src={ra} alt=""></img>
    </div>
    <div className="price">
      <h2>
      ₹1900/- 
      </h2>
    </div>
    <h3>per night</h3>
    <button onClick={handleclickhotel} className="fbook">BOOK</button>
    </div>
    
    <div className="hcon2">
      <div class="ing">
        <img src={s} alt="" />
      </div>
      <h1>HOTEL SITARA</h1>
    <div className="rating">
      <img src={r} alt=""/>
    </div>
    <hr/>
    <h2>{props.location}</h2>
    <div class="check">
      <img src={c} alt=""></img>
    </div>
    <h4>Free Wifi</h4>
    <div class="check1">
      <img src={c} alt=""></img>
    </div>
    <div className="food">
      <h4>Free Food</h4>
    </div> 
    <div class="roomav">
      <img src={ra} alt=""></img>
    </div>
    <div className="price">
      <h2>
      ₹2500/- 
      </h2>
    </div>
    <h3>per night</h3>
    <button onClick={handleclickhotel} className="fbook">BOOK</button>
    </div>
  </>
  )
}

import React from "react";
import "./Booking.css";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import a2 from "./media/airplane2no.png"
import { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "./authcontext";
function Bookings() {
  // useEffect(() => {
  //   const rzpPaymentForm = document.getElementById("rzp_payment_form");
    
  //   if (!rzpPaymentForm.hasChildNodes()) {

  //     const script = document.createElement("script");
  //     script.src = "https://checkout.razorpay.com/v1/payment-button.js" ;
  //     script.async = true;
  //     script.dataset.payment_button_id = "pl_LYhx7w8lQmzbPc";
  //     rzpPaymentForm.appendChild(script);

  //   }

  // });
   const [Result, setResult] = useState(null);
  function CancelTicket(id) {
    axios
      .delete(`https://backend-server-5pd1.onrender.com/api/delete/${id}`, { params: {} })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    
    axios
      .get(`https://backend-server-5pd1.onrender.com/api/flight1`, {})
      .then((response) => {
        setResult(response.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Result]);
  const navigate=useNavigate();
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
  const theme = useTheme();
  if(theme.login===true)
  {
  return (
    <>
    <section>
      <div className="tname">
        <h1>my bookings</h1>
      </div>
      <div class="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th>Source</th>
              <th>Destination</th>
              <th>Travel Type</th>
              <th>Date of Journey</th>
              <th>Date of Return</th>
              <th>Passengers</th>
              <th>CANCEL</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
            {Result  ? (
            Result.map((obj, key) => (
              <tr key={key}>
                <td>{obj.source}</td>
                <td>{obj.destination}</td>
                <td>{obj.typeoftravel}</td>
                <td>{obj.dateofjourney}</td>
                <td>{obj.dateofreturn}</td>
                <td>{obj.passengers}</td>
                <td><button onClick={()=>CancelTicket(obj._id)}>Cancel</button></td>
              </tr>
            ))):(
              <h1>No history</h1>
            )}
          </tbody>
        </table>
      </div>
      {/* <form id="rzp_payment_form"></form> */}
       </section>
    
    </>
  );
}else{
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
    <p>Please Login To See Your Bookings</p>
    <button onClick={handlebutton}>Login Here</button>
  </div>
</div>
</div>
    </>
  );
}
}


export default Bookings;

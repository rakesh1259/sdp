import React from "react";
import "./Flight.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
export default function a() {
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
  return (
    <>
      <div className="s_container">
        <ToastContainer/>
        <div id="aeroplane"></div>
      </div>
      <div className="f_container">
        <form action="#" id="fform">
          <h1>Book Your Flight</h1>
          <label for="source" id="cls2">
            Source:
          </label>
          <input type="text" placeholder="Enter Source" required/>
          <label for="destination" id="cls3">
            Destination:
          </label>
          <input type="text" placeholder="Enter Destination" required/>
          <label for="destination" id="cls4">
            Type of Travel:
          </label>
          <select name="cars" id="Type of Travel">
            <option value="volvo">Business Class</option>
            <option value="saab">Economy Class</option>
            <option value="mercedes">First Class</option>
          </select>
          <label for="Journey Date" id="cls">
            Date of Journey:
          </label>
          <input type="date" id="doj" name="doj" required min={disablePastDate()}></input>
          <label for="Journey Date" id="cls1">
            Date of Return:
          </label>
          <input type="date" id="doj" name="doj" required min={disablePastDate()}></input>
          <label for="destination" id="cls5">
            No of passengers:
          </label>
          <input
            type="number"
            placeholder="Number of Passengers"
            min="1"
            max="5"
            required
          />
          <button onClick={handletoast}>Search</button>
        </form>
      </div>
    </>
  );
}

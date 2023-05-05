import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import a1 from "./media/airplaneno.png"
import a2 from "./media/airplane2no.png"
// import globe from "./media/glo.gif"
import "./Flight.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FResult from "./FResult";
import { useTheme } from "./authcontext";
export default function Flight() {
  const [srce, setSrce] = useState();
  const [dest, setDest] = useState();
  const [time, setTime] = useState();
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  const handletoast = () => {
    toast.info("These are Available Flights", {
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
  const navigate = useNavigate();
  function flightdata(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setDest(data.get("dest"));
    setSrce(data.get("source"));
    setTime(data.get("cls"));
    const flightuserdata = {
      source: data.get("source"),
      destination: data.get("dest"),
      typeoftravel: data.get("cls"),
      dateofjourney: data.get("doj"),
      dateofreturn: data.get("dor"),
      passengers: data.get("passen"),
    };
    console.log(flightuserdata);
    axios
      .post("https://backend-server-5pd1.onrender.com/api/flight", flightuserdata)
      .then((response) => {
        handletoast();
      })
      .catch((e) => console.log(e));
  }
  const theme = useTheme();
  if (theme.login === true) {
    return (
      <>
        <div className="s_container">
          <div id="aeroplane"></div>
        </div>

        <div className="f_container">
          <form onSubmit={flightdata} id="fform" action="FResult.js">
            <h1>Book Your Flight</h1>
            <label htmlFor="source" id="cls2">
              Source:
            </label>
            <input
              type="text"
              placeholder="Enter Source"
              required
              name="source"
            />
            <label htmlFor="destination" id="cls3">
              Destination:
            </label>
            <input
              type="text"
              placeholder="Enter Destination"
              required
              name="dest"
            />
            <label htmlFor="destination" id="cls4">
              Type of Travel:
            </label>
            <select name="cls" id="Type of Travel">
              <option value="none">None</option>
              <option value="BusinessClass">BusinessClass</option>
              <option value="EconomyClass">EconomyClass</option>
              <option value="FirstClass">FirstClass</option>
            </select>
            <label for="Journey Date" id="cls">
              Date of Journey:
            </label>
            <input
              type="date"
              id="doj"
              name="doj"
              min={disablePastDate()}
            ></input>
            <label htmlFor="Journey Date" id="cls1">
              Date of Return:
            </label>
            <input
              type="date"
              id="dor"
              name="dor"
              min={disablePastDate()}
            ></input>
            <label htmlFor="destination" id="cls5">
              No of passengers:
            </label>
            <input
              type="Number"
              placeholder="Number of Passengers"
              min="1"
              max="5"
              name="passen"
            />
            <button>Search</button>
          </form>
        </div>
        {srce && <FResult srce={srce} dest={dest} time={time} />}
      </>
    );
  } else {
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

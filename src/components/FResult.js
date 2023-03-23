import React from "react";
import "./fresult.css";
import "./Flight";
import { toast } from "react-toastify";
import ai from "./media/airindia.png";
import e from "./media/emirates.png";
import arrow from "./media/right-arrow.png";
export default function FResult(props) {
  const handletoast = () => {
    toast.success("FLIGHT BOOKED SUCCESSFULLY!", {
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
  const handleclick=()=>{
    handletoast();
  }
  return (
    <>
      <div className="rcon">
        <div class="ing">
          <img src={ai} alt="" />
        </div>
        <h1>{props.srce}</h1>
        <div className="arr">
          <img src={arrow} alt="" />
        </div>
        <div className="de">
          <h1>{props.dest}</h1>{" "}
        </div>
        <div className="fno">
          <h2>(AE622)</h2>
        </div>
        <hr />
        <div className="tclass">
        <h2>{props.time}</h2>
        </div>
        <div className="price">
          <h2>₹19,872/-</h2>
        </div>
        <button onClick={handleclick} className="fbook">BOOK</button>
      </div>
      <div className="rcon2">
        <div class="ing">
          <img src={e} alt="" />
        </div>
        <h1>{props.srce}</h1>
        <div className="arr">
          <img src={arrow} alt="" />
        </div>
        <div className="de">
          <h1>{props.dest}</h1>{" "}
        </div>
        <hr />
        <div className="fno">
          <h2>(EK527)</h2>
        </div>
        <hr />
        <div className="tclass">
        <h2>{props.time}</h2>
        </div>
        <div className="price">
          <h2>₹24,325/-</h2>
        </div>
        <button onClick={handleclick} className="fbook">BOOK</button>
      </div>
    </>
  );
}

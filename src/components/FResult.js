import React from "react";
import "./fresult.css";
import "./Flight";
import ai from "./media/airindia.png";
import e from "./media/emirates.png";
import arrow from "./media/right-arrow.png";
export default function FResult(props) {
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
      </div>
    </>
  );
}

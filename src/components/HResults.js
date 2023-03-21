import React from 'react'
import ai from "./media/airindia.png";
import e from "./media/emirates.png";
import './Hotel.js'
export default function HResults(props) {
  return (
    <>
    <div className="rcon">
      <div class="ing">
        <img src={ai} alt="" />
      </div>
      <h1>{props.location}</h1>
      <div className="de">
        <h1>{props.room}</h1>{" "}
      </div>
    </div>
    <div className="rcon2">
      <div class="ing">
        <img src={e} alt="" />
      </div>
      <h1>{props.location}</h1>
      <div className="de">
        <h1>{props.room}</h1>{" "}
      </div>
    </div>
  </>
  )
}

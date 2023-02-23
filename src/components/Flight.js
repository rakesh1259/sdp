import React from "react";
import "./Flight.css";
export default function a() {
  return (
    <>
      <div className="s_container">
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
          <input type="date" id="doj" name="doj" required></input>
          <label for="Journey Date" id="cls1">
            Date of Return:
          </label>
          <input type="date" id="doj" name="doj" required></input>
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
          <button>Search</button>
        </form>
      </div>
    </>
  );
}

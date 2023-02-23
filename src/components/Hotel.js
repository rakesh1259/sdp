import React from "react";
import "./Hotel.css";
import h from "./media/hotel.jpg";
export default function Hotel() {
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  return (
    <>
      <div class="parent">
        <img src={h} alt=""></img>
      </div>
      <div className="ho_container">
        <form action="#" id="hform">
          <h1>Book Your Hotel</h1>
          <label for="source">Location:</label>
          <input type="text" placeholder="Enter Place" required />
          <label for="destination">Type of Room:</label>
          <select name="room" id="Type of Room">
            <option value="sroom">Suit Room</option>
            <option value="droom">Deluxe Room</option>
            <option value="nroom">Normal Room</option>
          </select>
          <label for="Journey Date">Check in:</label>
          <input type="date" id="doj" name="doj" required min={disablePastDate()}></input>
          <label for="Journey Date" id="cls1">
            Check Out:
          </label>
          <input type="date" id="doj" name="doj" required min={disablePastDate()}></input>
          <label for="guests" id="cls5">
            No of Guests:
          </label>
          <input
            type="number"
            placeholder="Number of Persons"
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

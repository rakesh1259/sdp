import React from "react";
import "./Booking.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Bookings() {
   const [Result, setResult] = useState(null);
  function CancelTicket(id) {
    axios
      .delete(`http://localhost:1259/api/delete/${id}`, { params: {} })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    axios
      .get(`http://localhost:1259/api/flight1`, {})
      .then((response) => {
        setResult(response.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Result]);
  return (
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
            {Result ? (
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
    </section>
  );
}
export default Bookings;

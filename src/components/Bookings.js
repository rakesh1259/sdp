import React from "react";
import "./Booking.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Bookings() {
   const [Result, setResult] = useState(null);
  // function getProducts() {
  //   axios
  //     .get("http://localhost:1259/api/flight1", {
  //       params: {},
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setResult(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // function deleteProduct(source) {
  //   axios
  //     .delete(`http://localhost:1259/delete/${source}`, { params: {} })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  useEffect(() => {
    axios
      .get(`http://localhost:1259/api/flight1`, {})
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Result]);
  return (
    <section>
      <div className="tname">
        <h1>Fixed Table header</h1>
      </div>
      <div className="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th>Source</th>
              <th>Destination</th>
              <th>Travel Type</th>
              <th>Date of Journey</th>
              <th>Date of Return</th>
              <th>Passengers</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
            {Result ? (
            Result.map((obj, key) => (
              <tr key={key}>
                <td>{obj.source}</td>
                <td>{obj.destination}</td>
                <td>{obj.typeoftravel}</td>
                <td>{obj.dateofjourney}</td>
                <td>{obj.ReturnDate}</td>
                <td>{obj.passengers}</td>
               
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

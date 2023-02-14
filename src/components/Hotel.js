import React from 'react'
import './Hotel.css'
// import h from './media/hotel.jpg'
export default function Hotel() {
  return (
    <>
    {/* <div className='img_container'>
    <img src={h} alt="himg "></img>
    </div> */}
    <div className="ho_container">
		<form action="#" id='hform'>
			<h1>Book Your Hotel</h1>
      <label for="source" >Location:</label>
			<input type="text" placeholder="Enter Place" />
      <label for="destination" >Type of Room:</label>
      <select name="room" id="Type of Room">
      <option value="volvo">Suit Room</option>
      <option value="saab">Deluxe Room</option>
      <option value="mercedes">Normal Room</option>
</select>
      <label for="Journey Date" >Check in:</label>
      <input type="date" id="doj" name="doj"></input>
      <label for="Journey Date" id='cls1'>Check Out:</label>
      <input type="date" id="doj" name="doj"></input>
      <label for="destination" id='cls5'>No of Guests:</label>
      <input type="number" placeholder="Number of Persons" min="1" max="5" />
      <button>Search</button>
		</form>
	</div>
    </>
  )
}

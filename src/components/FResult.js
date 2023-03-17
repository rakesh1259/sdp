import React from 'react'
import './fresult.css'
import ai from './media/airindia.png'
import e from './media/emirates.png'
export default function FResult() {
  return (
    <>
    <div className='rcon'>
    <div className="img">
    <img src={ai} alt=""/>
    </div>
      <p>The winning logo was created by Predrag Stakić from Serbia.</p> 
  </div>
  <div className='rcon2'>
  <div class="img">
    <img src={e} alt=""/>
    <div>
      <p>The winning logo was created by Predrag Stakić from Serbia.</p>     
    </div>
  </div>
  </div>
  </>
  )
}

import React from 'react'
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Flight from './components/Flight'
import Hotel from './components/Hotel'
import About from './components/About'
import Nomatch from './components/Nomatch';
import Bookings from './components/Bookings'
import FResult from './components/FResult';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from './components/authcontext';
function App() {
  return (
    <>
   
    <ThemeProvider>
    <Navbar/>

      <ToastContainer/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/flight' element={<Flight/>}/>
      <Route path='/about'  element={<About/>}/>
      <Route path='/hotel'  element={<Hotel/>}/>
      <Route path='/booking'  element={<Bookings/>}/>
      <Route path='/fresult' element={<FResult/>}/>
      {/* <Route path='/hresult' element={<HResults/>}/> */}
      <Route path='*' element={<Nomatch />} />
    </Routes>
    </ThemeProvider>
    </>
  );
}
export default App;

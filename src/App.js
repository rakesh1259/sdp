import React from 'react'
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Flight from './components/Flight';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/flight' element={<Flight/>}/>
    </Routes>
   </> 
  );
}

export default App;


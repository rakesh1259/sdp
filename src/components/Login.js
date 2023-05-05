import * as React from 'react';
// import Alert from '@mui/material/Alert';
// import { useCookies } from 'react-cookie';
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-toastify';
import "./Login.css";
import axios from 'axios';
import facebook from "./media/f.png";
import google from "./media/google.png";
import linkedin from "./media/l.png";
import { useTheme } from './authcontext';
export default function Login() {
  const theme = useTheme();
  // const handletoastr=()=>{
  //   toast.success('Registration Sucessfull', {
  //     position: "bottom-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     });
  //    }
  const handletoastl1=()=>{
    toast.success('Login Sucessfull', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
     }
     const handletoastm=()=>{
     toast.warning('Register First', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
     }
     const handletoastp=()=>{
      toast.error('Wrong Password', {
       position: "bottom-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       });
      }
   const navigate = useNavigate();
  const [kl, setKl] = useState("container");
  const handleon = () => {
    setKl("container");
  };
  const handleon1 = () => {
    setKl("container right-panel-active");
  };
  const registerdata=(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const registerdata={
          name:data.get('name'),
          email:data.get('email'),
          password:data.get('pass')
     }
        console.log(registerdata);
        axios.post("https://backend-server-5pd1.onrender.com/api/register",registerdata)
        .then(response=> {
          handleon();
        })
    
  }
  // var [mail,setLEmail]=useState();
  // var [pwd,setLPassword]=useState();
  // const [setCookie] = useCookies(['dummycookie']);

  function signindata(e){
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const logindata={
      email:data.get('mail'),
      password:data.get('pwd')
    }
    axios.post("https://backend-server-5pd1.onrender.com/api/login",logindata)
    .then((response)=> {
      if(response.data==="invalid"){
        
        handletoastp();
      }
      else if(response.data==="newuser")
      {
          handletoastm();
      }
      else if(response.status===200){
        // setCookie('token', response.data.token, { path: '/' });
        console.log("Success")
        // theme.handlogin();
        console.log(response.data.email)
        theme.handlogin();
        navigate('/')  
        handletoastl1();
      }else{
      alert("wrong");
      }
    })
    .catch(e=>console.log(e))
  }
  return (
    <>
      <div className={kl} id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={registerdata} id="lform"  autoComplete="false">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="https://www.facebook.com/" className="social">
                <img src={facebook} alt=" "></img>
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://www.google.com/" className="social">
                <img src={google} alt=" "></img>
                <i className="fas fa-google-plus-g"></i>
              </a>
              <a href="https://www.linkedin.com/" className="social">
                <img src={linkedin} alt=" "></img>
                <i className="fas fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" name="name" required />
            <input type="email" placeholder="Email" name="email" required />
            <input type="password" placeholder="Password" minLength="8" name="pass" required  />
            <button value='STORE'  className="close" data-dismiss="alert" variant="outlined" >Sign Up</button>     
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={signindata} >
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="https://www.facebook.com/" className="social">
                <img src={facebook} alt=" "></img>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://accounts.google.com/login" className="social">
                <img src={google} alt=" "></img>
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="https://www.linkedin.com/" className="social">
                <img src={linkedin} alt=" "></img>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email"  name='mail' />
            <input type="password" placeholder="Password"  name='pwd' />
            <p href="/">Forgot your password?</p>
           <button >Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={handleon}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Traveller!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={handleon1}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
import React from "react";
import { useState } from "react";
import "./Login.css";
import axios from 'axios';
import facebook from "./media/f.png";
import google from "./media/google.png";
import linkedin from "./media/l.png";
export default function Login() {
  const [kl, setKl] = useState("container");
  const handleon = () => {
    setKl("container");
  };
  const handleon1 = () => {
    setKl("container right-panel-active");
  };
  const [res,setRes] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post('http://localhost:1259/',{
      name : data.get('name'),
      email : data.get('email'),
      password : data.get('pass')
    })
    .then((response)=>{
      console.log(response.data);
      setRes(response.data);
    })
    .catch((err)=>{console.log(err)})
  }
  return (
    <>
      <div className={kl} id="container">
        <div className="form-container sign-up-container">
          <form action="#" id="lform" onSubmit={handleSubmit}>
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
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" minLength="8" name="pass" />
            <button value='STORE' >Sign Up</button>
            {res}
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
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
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <p href="/">Forgot your password?</p>
            <button  >Sign In</button>
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
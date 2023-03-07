import * as React from 'react';
// import Alert from '@mui/material/Alert';
import { useCookies } from 'react-cookie';
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-toastify';
import "./Login.css";
import axios from 'axios';
import facebook from "./media/f.png";
import google from "./media/google.png";
import linkedin from "./media/l.png";
export default function Login() {
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
  // const navigate = useNavigate();
  const [kl, setKl] = useState("container");
  const handleon = () => {
    setKl("container");
  };
  const handleon1 = () => {
    setKl("container right-panel-active");
  };
  var [name,setName]= useState(null);
  var [email,setEmail]=useState(null);
  var [pass,setPassword]=useState(null);
  const navigate=useNavigate(false)
  function signupdata(){
    const registerdata={
      name:name,
      email:email,
      password:pass
    }
    console.log(registerdata);
    axios.post("http://localhost:1259/api/register",registerdata)
    .then(response=> {
      navigate('/')
    })
    .catch(e=>console.log(e))

  }
  // var [errmsg,seterrmsg]=useState(null);
  // const navigate=useNavigate(false)
  var [mail,setLEmail]=useState(null);
  var [pwd,setLPassword]=useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['dummycookie']);
  function signindata(e){
    e.preventDefault();
    const logindata={
      email:mail,
      password:pwd
    }
    axios.post("http://localhost:1259/api/login",logindata)
    .then((response)=> {
      console.log(response)
      if(response.data==="invalid"){
        handletoastp();
      }
      else if(response.data==="newuser")
      {
          handletoastm();
      }
      else if(response.status===200){
        setCookie('token', response.data.token, { path: '/' });
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
          <form action="#" id="lform"  autoComplete="false">
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
            <input type="text" placeholder="Name" name="name" required onChange={(e)=>{setName(e.target.value)}}/>
            <input type="email" placeholder="Email" name="email" required onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" placeholder="Password" minLength="8" name="pass" required onChange={(e)=>{setPassword(e.target.value)}} />
            <button value='STORE'  class="close" data-dismiss="alert" variant="outlined" onClick={signupdata}>Sign Up</button>     
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" >
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
            <input type="email" placeholder="Email" value={mail} name='mail' onChange={(e)=>{setLEmail(e.target.value)}}/>
            <input type="password" placeholder="Password" value={pwd} name='pwd' onChange={(e)=>{setLPassword(e.target.value)}}/>
            <p href="/">Forgot your password?</p>
           {/* <Link to='/'> <p className='badge bg-primary text-wrap>Sign In</p></Link> */}
           <button onClick={signindata}>Sign In</button>
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
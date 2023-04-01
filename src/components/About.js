import React from "react";
import "./About.css";
import rakhi from "./media/rakesh.jpg";
import chinnu from "./media/vinay.jpg";
import aman from "./media/aman.JPG";
export default function About() {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <div className="container">
            <div className="con">
              <img src={chinnu} alt="img" id="i1" />
              <div className="rtext">
                <h2>Vinay</h2>
                <p className="title">Developer</p>
                <p>I have designed the frontend and backend of our website.</p>
                <p>iamvinayy100@gmail.com</p>
                <a href="https://t.me/vinaychinnu">
                  <p>
                    <button className="button">Contact</button>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="column">
        <div className="card">
          <div className="container">
            <div className="con">
              <img src={rakhi} alt="img" id="i1" />
              <div className="rtext">
                <h2>Rakesh</h2>
                <p className="title">Developer</p>
                <p>I have developed the frontend and backend of our website.</p>
                <p>bandarurakesh@gmail.com</p>
                <a href="https://t.me/rakhi1259">
                  <p>
                    <button className="button">Contact</button>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <div className="container">
            <div className="con">
              <img src={aman} alt="img" id="i1" />
              <div className="rtext">
                <h2>Aman</h2>
                <p className="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>amandarbar@gmail.com</p>
                <a href="https://t.me/Aman1236547">
                  <p>
                    <button className="button">Contact</button>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

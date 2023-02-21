import React from "react";
import "./About.css";
import rakhi from "./media/rakesh.jpg";
import chinnu from "./media/vinay.jpg";
import am from "./media/aman.JPG";
export default function About() {
  return (
    <div class="row">
      <div class="column">
        <div class="card">
          <div class="container">
            <div className="con">
              <img src={chinnu} alt="img" id="i1" />
              <div className="rtext">
                <h2>Vinay</h2>
                <p class="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <a href="https://t.me/vinaychinnu">
                  <p>
                    <button class="button">Contact</button>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="container">
            <div className="con">
              <img src={rakhi} alt="img" id="i1" />
              <div className="rtext">
                <h2>Rakesh</h2>
                <p class="title">Developer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <a href="https://t.me/rakhi1259">
                  <p>
                    <button class="button">Contact</button>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="container">
            <div className="con">
              <img src={am} alt="img" id="i1" />
              <div className="rtext">
                <h2>Aman</h2>
                <p class="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <a href="https://t.me/Aman1236547">
                  <p>
                    <button class="button">Contact</button>
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

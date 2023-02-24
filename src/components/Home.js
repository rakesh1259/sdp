import React from "react";
import "./Home.css";
import './Navbar.css'
import t from './media/travel.png'
import int from './media/international.png'
import nat from './media/national.png'
import res from './media/resort.png'
export default function Home() {

  var counter = 1;
  setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);

  return (
    <div>
      <div class="slider">
        <div class="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div class="slide first">
          <img src={t} alt="" id='travel'></img>
          </div>
          <div class="slide second">
          <img src={int} alt="" id='inter'></img>
         </div>
          <div class="slide third">
          <img src={nat} alt="" id='national'></img>
          </div>
          <div class="slide last">
          <img src={res} alt="" id='resorts'></img>
          </div>

        </div>
      </div> 

      
      <div class="h_container">
        <div class="h_card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="vm">Kolkata</h2>
              <p class="vm">Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
            </div>
          </div>
          <div class="face face2">
          </div>
        </div>

        <div class="h_card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="tj">New Delhi</h2>
              <p class="tj">Python is an interpreted, high-level and general-purpose programming language.</p>
            </div>
          </div>
          <div class="face face2">
          </div>
        </div>
        <div class="h_card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="golconda">Hyderabad</h2>
              <p class="golconda">C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped and component-oriented programming disciplines.</p>
            </div>
          </div>
          <div class="face face2">
          </div>
        </div>
        <div class="h_card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="goi">Mumbai</h2>
              <p class="goi">C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped and component-oriented programming disciplines.</p>
            </div>
          </div>
          <div class="face face2">
          </div>
        </div>
        <div class="h_card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="goi2">Goa</h2>
              <p class="goi2">C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped and component-oriented programming disciplines.</p>
            </div>
          </div>
          <div class="face face2">
          </div>
        </div>
        <div class="h_card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="goi2">Kerala</h2>
              <p class="goi2">C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped and component-oriented programming disciplines.</p>
            </div>
          </div>
          <div class="face face2">
          </div>
        </div>
        <div class="h_card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="goi2">Ladakh</h2>
              <p class="goi2">C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped and component-oriented programming disciplines.</p>
            </div>
          </div>
          <div class="face face2">
          </div>
        </div>
        <div class="h_card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="goi2">Punjab</h2>
              <p class="goi2">C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped and component-oriented programming disciplines.</p>
            </div>
          </div>
          <div class="face face2">
          </div>
        </div>
        <div class="h_card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="goi2">Abu Dhabi</h2>
              <p class="goi2">C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped and component-oriented programming disciplines.</p>
            </div>
          </div>
          <div class="face face2">
          </div>
        </div>
        <div class="h_card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="goi2">Paris</h2>
              <p class="goi2">C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped and component-oriented programming disciplines.</p>
            </div>
          </div>
          <div class="face face2">
          </div>
        </div>
        <div class="h_card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="goi2">Italy</h2>
              <p class="goi2">C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped and component-oriented programming disciplines.</p>
            </div>
          </div>
          <div class="face face2">
          </div>
        </div>
      </div>



    </div>

  );
}
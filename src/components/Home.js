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
            <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div className="slide first">
          <img src={t} alt="" id='travel'></img>
          </div>
          <div className="slide second">
          <img src={int} alt="" id='inter'></img>
         </div>
          <div className="slide third">
          <img src={nat} alt="" id='national'></img>
          </div>
          <div className="slide last">
          <img src={res} alt="" id='resorts'></img>
          </div>

        </div>
      </div> 

      
      <div className="h_container">
        <div className="h_card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="vm">Kolkata</h2>
              <p className="vm">The Victoria Memorial is a large marble building on the Maidan in Central Kolkata, built between 1906 and 1921.</p>
            </div>
          </div>
          <div className="face face2">
          </div>
        </div>

        <div className="h_card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="tj">New Delhi</h2>
              <p className="tj">The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. </p>
            </div>
          </div>
          <div className="face face2">
          </div>
        </div>
        <div className="h_card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="golconda">Hyderabad</h2>
              <p className="golconda">Golconda (Telugu: గోల్కొండ, romanized: Gōlkōnḍa) is a historic fortress and ruined city located in the western outskirts of Hyderabad, Telangana, India. It was originally called Mankal.</p>
            </div>
          </div>
          <div className="face face2">
          </div>
        </div>
        <div className="h_card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="goi">Mumbai</h2>
              <p className="goi">The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai (Bombay), India.</p>
            </div>
          </div>
          <div className="face face2">
          </div>
        </div>
        <div className="h_card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="goi2">Goa</h2>
              <p className="goi2">Goa is visited by large numbers of international and domestic tourists each year because of its white-sand beaches, active nightlife, places of worship, and World Heritage-listed architecture.</p>
            </div>
          </div>
          <div className="face face2">
          </div>
        </div>
        <div className="h_card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="goi2">Kerala</h2>
              <p className="goi2">Kerala's culture and traditions, coupled with its varied demographics, have made the state one of the most popular tourist destinations in India. Kerala's beaches, backwaters, lakes, mountain ranges, waterfalls, ancient ports, palaces, religious institutions and wildlife sanctuaries are major attractions for both domestic and international tourists.</p>
            </div>
          </div>
          <div className="face face2">
          </div>
        </div>
        <div className="h_card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="goi2">Ladakh</h2>
              <p className="goi2">Tourism is one of an economic contributor to the union territory of Ladakh in Northern India. The union territory is sandwiched between the Karakoram mountain...</p>
            </div>
          </div>
          <div className="face face2">
          </div>
        </div>
        <div className="h_card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="goi2">Punjab</h2>
              <p className="goi2">The Golden Temple (also known as the Harmandir Sahib, lit. 'abode of God', Punjabi pronunciation)is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. It is one of the holiest sites in Sikhism, alongside the Gurdwara Darbar Sahib Kartarpur in Kartarpur, and Gurdwara Janam Asthan in Nankana Sahib.</p>
            </div>
          </div>
          <div className="face face2">
          </div>
        </div>
        <div className="h_card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="goi2">Abu Dhabi</h2>
              <p className="goi2">Abu Dhabi is the capital and second-most populous city (after Dubai) of the United Arab Emirates. It is also the capital of the Emirate of Abu Dhabi and the centre of the Abu Dhabi Metropolitan Area.</p>
            </div>
          </div>
          <div className="face face2">
          </div>
        </div>
        <div className="h_card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="goi2">Paris</h2>
              <p className="goi2">The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.</p>
            </div>
          </div>
          <div className="face face2">
          </div>
        </div>
        <div className="h_card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="goi2">Italy</h2>
              <p className="goi2">The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age. </p>
            </div>
          </div>
          <div className="face face2">
          </div>
        </div>
      </div>



    </div>

  );
}
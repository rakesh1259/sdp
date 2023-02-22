import React from "react";
import "./Home.css";
// import m from "./media/mexico.jpg";
export default function Home() {
  return (
    <div class="h_container">
<div class="h_card">
  <div class="face face1">
    <div class="content">
      <span class="stars"></span>
      <h2 class="java">Java</h2>
      <p class="java">Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
    </div>
  </div>
  <div class="face face2">
  </div>
</div>

<div class="h_card">
  <div class="face face1">
    <div class="content">
      <span class="stars"></span>
      <h2 class="python">Python</h2>
      <p class="python">Python is an interpreted, high-level and general-purpose programming language.</p>
    </div>
  </div>
  <div class="face face2">
    <h2>02</h2>
  </div>
</div>

<div class="h_card">
  <div class="face face1">
    <div class="content">
      <span class="stars"></span>
      <h2 class="cSharp">C#</h2>
      <p class="cSharp">C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped and component-oriented programming disciplines.</p>
    </div>
  </div>
  <div class="face face2">
    <h2>03</h2>
  </div>
</div>
</div>


  );
}

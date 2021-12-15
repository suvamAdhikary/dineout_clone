import React from "react";
import passImg from "../Images/artboard.jpg";
import Card from "./Card";
// import './Passport.css'

export default function Passport() {
  return (
    <div>
      <div className="container">
        <div class="row">
       <div className="col">
           <img src={passImg} alt="" />
       </div>
       <div className="col">
       <div class="col-sm">
           <Card/>
           </div>
           <div class="col-sm">
           <Card/>
           </div>
       </div>
       <div className="col">
       <div class="col-sm">
           <Card/>
           </div>
           <div class="col-sm">
           <Card/>
           </div>
       </div>
        </div>
      </div>
      <br/>
    </div>
    
  );
}

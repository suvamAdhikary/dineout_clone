import React from "react";
import imgcard from "../Images/Frame 114.jpg";
import offericon from "../Images/offericon.svg";
import "./Card.css"

export default function Card() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div class="col-sm-3">
            <div class="card card_withfooter" style={{border:"transparent"}}>
              <img class="card-img-top img-fluid" src={imgcard} alt="" />
              <div class="card-block" style={{display:"flex"}}>
                <h4 class="card-title">Caafe 360 Degree</h4>
                <div className="card_rating">4.5</div>
              </div>
              <p class="card-text">
                  <small class="text-muted">Kankurgachi, East Kolkata</small>
                </p>
              <div class="card-footer" 
              style={{fontFamily:"Metropolis", fontStyle:"normal", fontWeight:"bold", fontSize:"14px", lineHeight:"20px", color:"#51BA64", backgroundColor:"transparent"}} >
                {" "}
                <img src={offericon} alt="" /> 1 Complimentary
                Dessert/ Moc...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import img1 from "../Images/25offid.svg"
import img2 from "../Images/30offid.jpg"
import img3 from "../Images/15offid.png"
import img4 from "../Images/20offid.png"
import img30 from '../Images/30prct.svg'
import './Offer.css'
export default function OfferCards() {
  return (
    <div>
      <div className="container-fluid" style={{background: "#F3F3F3"}} >
      <br />
          <h4 style={{fontFamily:"Metropolis", fontStyle:"normal", fontWeight:"bold", fontSize:"24px", lineHeight:"30px", color:"#333333", marginLeft:"8%"}}>Best Offers</h4>
          <br />
          <div className="container">
            <div className="container">
            <div className="col-md-10">
              <div className="container">
            <div className="row">
              <div className="col card-offer">
                <img src={img1} alt="" />
              </div>
              <div className="col card-offer">
                <img src={img30} alt="" />
              </div>
              <div className="col card-offer">
                <img src={img3} alt="" />
              </div>
              <div className="col card-offer">
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
          <br />
      <br />
      </div>
     
    </div>
  );
}

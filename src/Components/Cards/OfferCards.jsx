import React from "react";
import img1 from "../Images/25offid.jpg"
import img2 from "../Images/30offid.jpg"
import img3 from "../Images/15offid.png"
import img4 from "../Images/20offid.png"

export default function OfferCards() {
  return (
    <div>
      <div className="container-fluid" style={{background: "#F3F3F3"}} >
      <br />
          <h4 style={{fontFamily:"Metropolis", fontStyle:"normal", fontWeight:"bold", fontSize:"24px", lineHeight:"30px", color:"#333333", marginLeft:"8%"}}>Best Offers</h4>
          <br />
          
       <div className="container" >
       <div className="row" >
          <div class="col-sm-3" style={{border: "none"}}>
            <div class="card">
              <img
                class="card-img img-fluid"
                src={img1}
                alt=""
                style={{boxShadow: "3px 4px 8px 0 rgb(0 0 0 / 25%)"}}
              />
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card">
              <img
                class="card-img img-fluid"
                src={img2}
                alt=""
                style={{boxShadow: "3px 4px 8px 0 rgb(0 0 0 / 25%)"}}
              />
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card">
              <img
                class="card-img img-fluid"
                src={img3}
                alt=""
                style={{boxShadow: "3px 4px 8px 0 rgb(0 0 0 / 25%)"}}
              />
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card">
              <img
                class="card-img img-fluid"
                src={img4}
                alt=""
                style={{boxShadow: "3px 4px 8px 0 rgb(0 0 0 / 25%)"}}
              />
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

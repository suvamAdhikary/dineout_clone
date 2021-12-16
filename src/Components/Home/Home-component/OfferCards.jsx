import React from "react";
import img1 from "../../Images/25offid.svg"
import img2 from "../../Images/30offid.jpg"
import img3 from "../../Images/15offid.png"
import img4 from "../../Images/20offid.png"
import img30 from '../../Images/30prct.svg'

import styled from 'styled-components';

const Offercss = styled.div`
.card-offer img{
width: 216px;
height: 280px;
left: 152px;
top: 94px;
margin: 0% !important;
padding: 0%;
filter: drop-shadow(6px 8px 10px rgba(0, 0, 0, 0.16));
}

.card-offer{
    padding-right:0;
    padding-left:0;
}
.card-offer:hover{
cursor: pointer;
}
.container{
    background-color: transparent;
    border: none;
}
.card{
    background-color: transparent; 
    border: none;
}
`
export default function OfferCards() {
  return (
    <Offercss>
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
     
    </Offercss>
  );
}

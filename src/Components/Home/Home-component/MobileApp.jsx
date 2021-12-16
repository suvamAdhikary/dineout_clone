import React from "react";
import rtimg from "../../Images/screenshot.png";

import mobicon from "../../Images/mob.svg";
import googleplay from "../../Images/google-playstore.png";
import appstore from "../../Images/app-store.png";
import styled from 'styled-components';

const Mobilecss = styled.div`
.mob_contain{
margin-left: 10%;
}
.mob_t1{
    width: 279px;
height: 30px;
left: 152px;
top: 84px;

/* Heading/H2 */

font-family: Metropolis;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 30px;
/* identical to box height, or 125% */


/* Primary/Darktheme */

color: #333333;
}
.mob_t2{
    width: 346px;
height: 42px;
left: 152px;
top: 122px;

/* Heading/H1 */

font-family: Metropolis;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;
/* identical to box height, or 117% */


/* Primary/Mainorange */

color: #FF645A;

}
.mob_info{
width: 465px;
height: 40px;
left: 152px;
top: 180px;

font-family: Metropolis;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
color: #797979;

}
.mob_inpt{

background: #FFFFFF;
border: 1px solid #cecdcd !important;
box-sizing: border-box;
border-radius: 4px;
color: #797979;
font-family: Metropolis;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
}

.mob_mobicon{
left: 6.67%;
right: 6.67%;
top: 4.35%;
bottom: 1.45%;
background: #797979;
border: 0.5px solid #FFFFFF;

}
.mob_btn{

height: 40px;
background: #FF645A;
border-radius: 4px;
color: white;
border: none !important;
}
`

export default function MobileApp() {
  return (
    <Mobilecss>
      <div className="contianer-fluid ">
          <div className="container">
        <div className="contianer">
          <div className="row">
            <div className="col">
              <br />
              <h2 className="mob_t1">Explore more food with</h2>
              <h1 className="mob_t2">dineout mobile app</h1>
              <br />
              <p className="mob_info">
                Download the Dineout App to get latest updates on offers, deals
                and trending restauarnt. Also get Rs. 200 in your Dineout
                Wallet.
              </p>
              <br />
              <div class="input-group mb-3">

                <input
                  type="text"
                  class="form-control mob_inpt"
                  placeholder="Your Mobile Number "
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-secondary mob_btn"
                    type="button"
                  >
                    Send Link
                  </button>
                </div>
              </div>
              <br />
              <br />
              <div className="container">
                <div className="container">
                 <div className="container">
                 <div className="row">
                    <div className="col">
                      {" "}
                      <img src={googleplay} alt="" />{" "}
                    </div>
                    <div className="col" style={{ marginLeft: "0%" }}>
                      {" "}
                      <img src={appstore} alt="" />{" "}
                    </div>
                  </div>
                 </div>
                </div>
              </div>    
            </div>
            <div className="col">
              <img src={rtimg} alt="" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </Mobilecss>
  );
}

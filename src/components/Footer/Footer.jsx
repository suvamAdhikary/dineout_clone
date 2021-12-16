import React from "react";

import logo from "../Images/logo.svg";
import styled from 'styled-components';

const Footerstyle = styled.div`
.footer_top h4{
    width: 92px;
height: 20px;
left: 152px;
top: 40px;

font-family: Metropolis;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;

color: #FF645A;
}
.footer_top h4:after{
    content: "";
    display: block;
    width: 25px;
    padding: 1rem 0 0 0;
    border-bottom: 2px solid #FF645A;
}
.footer_end-logo{
    width: 96px;
height: 32px;
left: 672px;
top: 634px;
align-self: center;
}
.footer_top-one{
    margin-top: 2%;
}
.footer_top-one p{

    width: 34px;
height: 20px;
left: 0px;
top: 0px;
margin: 5%;
font-family: Metropolis;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;

color: #797979;
}
.footer_top-one p:hover{
width: 36px;
height: 20px;
left: 0px;
top: 0px;

font-family: Metropolis;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 20px;

color: #333333;
}
.footer_mid-one h5{
    font-family: Metropolis;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
margin-left: 10px;
color: #FF645A;
margin-bottom: 2%;

}
.footer_mid-one h5:after{
    content: "";
    display: block;
    width: 25px;
    padding: 1rem 0 0 0;
    border-bottom: 2px solid #FF645A;
}
.footer_mid-one p{
    font-size: 14px;
line-height: 20px;

color: #797979;
margin: 7%;

}
.footer_mid-one{
    /* margin: auto;
     
    /* align-items: center; */
    text-align: left; 
}
.footer_end{
     align-items: center;
     text-align: center;
     margin: 1%;
}
.footer_end p{
    font-size: 14px;
line-height: 20px;
font-weight: bold;
color: #797979;
margin: 10px;
}
.yt svg{
    margin: 5px;
}
`

export default function Footer() {
  return (
    <Footerstyle>
      <hr />
      <div className="container-fluid footer_top">
        <div className="container">
          <div className="container">
            <h4>Available in</h4>
          </div>
        </div>
        <div className="container footer_top-one ">
          <div className="row">
            <div className="col">
              <p>Delhi</p>
              <p>Pune</p>
              <p>Jaipur</p>
              <p>Vadodara</p>
            </div>
            <div className="col">
              <p>Mumbai</p>
              <p>Kolkata</p>
              <p>Lucknow</p>
              <p>Nagpur</p>
            </div>
            <div className="col">
              <p>Banglore</p>
              <p>Ahmedabad</p>
              <p>Indore</p>
              <p>Kochi</p>
            </div>
            <div className="col">
              <p>Chennai</p>
              <p>Chandigarh</p>
              <p>Udaipur</p>
              <p>Surat</p>
            </div>
            <div className="col">
              <p>Hyderabad</p>
              <p>Goa</p>
              <p>Agra</p>
              <p>Ludhiana</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row footer_mid-one">
            <div className="col">
              <h5>Discover</h5>
              <p>Trending Restaurants</p>
              <p>Super Savers</p>
              <p>Dineout Pay</p>
              <p>Dineout Passport</p>
              <p>Contactless Dining</p>
            </div>
            <div className="col">
              <h5>About</h5>
              <p>About Us</p>
              <p>Blog</p>
              <p>Dineout For Business</p>
              <p>Add Restaurants</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div className="col">
              <h5>Top Cuisines</h5>
              <p>Chinese</p>
              <p>Italian</p>
              <p>South Indian</p>
              <p>Mexican</p>
              <p>Continental</p>
              <p>Mughlai</p>
            </div>
            <div className="col">
              <h5>Top Facilities</h5>
              <p>Romantic</p>
              <p>Fine Dining</p>
              <p>Buffet</p>
              <p>5 Star</p>
              <p>Pure Veg</p>
              <p>Sea Food</p>
            </div>
            <div className="col">
              <h5>Top Locations</h5>
              <p>Salt Lake</p>
              <p>Ballygunge</p>
              <p>Park Street</p>
              <p>Gariahat</p>
              <p>Behala</p>
              <p>Chandni Chowk</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container footer_end">
          <img className="footer_end-logo" src={logo} alt="" />
          <p>Find the best Restaurants, Deals, Discounts & Offers</p>
          <p>Contact: +91-9212340202</p>

          <div className="row">
            <div className="yt">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#D42428" />
                <path
                  d="M14 19L19.19 16L14 13V19ZM25.56 11.17C25.69 11.64 25.78 12.27 25.84 13.07C25.91 13.87 25.94 14.56 25.94 15.16L26 16C26 18.19 25.84 19.8 25.56 20.83C25.31 21.73 24.73 22.31 23.83 22.56C23.36 22.69 22.5 22.78 21.18 22.84C19.88 22.91 18.69 22.94 17.59 22.94L16 23C11.81 23 9.2 22.84 8.17 22.56C7.27 22.31 6.69 21.73 6.44 20.83C6.31 20.36 6.22 19.73 6.16 18.93C6.09 18.13 6.06 17.44 6.06 16.84L6 16C6 13.81 6.16 12.2 6.44 11.17C6.69 10.27 7.27 9.69 8.17 9.44C8.64 9.31 9.5 9.22 10.82 9.16C12.12 9.09 13.31 9.06 14.41 9.06L16 9C20.19 9 22.8 9.16 23.83 9.44C24.73 9.69 25.31 10.27 25.56 11.17Z"
                  fill="white"
                />
              </svg>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#3A5A98" />
                <path
                  d="M16.4802 13.6V12.16C16.4802 11.536 16.6242 11.2 17.6322 11.2H18.8802V8.80005H16.9602C14.5602 8.80005 13.6002 10.384 13.6002 12.16V13.6H11.6802V16H13.6002V23.2H16.4802V16H18.5922L18.8802 13.6H16.4802Z"
                  fill="white"
                />
              </svg>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#76A9EA" />
                <path
                  d="M26.46 10C25.69 10.35 24.86 10.58 24 10.69C24.88 10.16 25.56 9.32 25.88 8.31C25.05 8.81 24.13 9.16 23.16 9.36C22.37 8.5 21.26 8 20 8C17.65 8 15.73 9.92 15.73 12.29C15.73 12.63 15.77 12.96 15.84 13.27C12.28 13.09 9.11004 11.38 7.00004 8.79C6.63004 9.42 6.42004 10.16 6.42004 10.94C6.42004 12.43 7.17004 13.75 8.33004 14.5C7.62004 14.5 6.96004 14.3 6.38004 14C6.38004 14 6.38004 14 6.38004 14.03C6.38004 16.11 7.86004 17.85 9.82004 18.24C9.46004 18.34 9.08004 18.39 8.69004 18.39C8.42004 18.39 8.15004 18.36 7.89004 18.31C8.43004 20 10 21.26 11.89 21.29C10.43 22.45 8.58004 23.13 6.56004 23.13C6.22004 23.13 5.88004 23.11 5.54004 23.07C7.44004 24.29 9.70004 25 12.12 25C20 25 24.33 18.46 24.33 12.79C24.33 12.6 24.33 12.42 24.32 12.23C25.16 11.63 25.88 10.87 26.46 10Z"
                  fill="white"
                />
              </svg>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="url(#paint0_linear_1072_1109)"
                />
                <path
                  d="M11.8 6H20.2C23.4 6 26 8.6 26 11.8V20.2C26 21.7383 25.3889 23.2135 24.3012 24.3012C23.2135 25.3889 21.7383 26 20.2 26H11.8C8.6 26 6 23.4 6 20.2V11.8C6 10.2617 6.61107 8.78649 7.69878 7.69878C8.78649 6.61107 10.2617 6 11.8 6ZM11.6 8C10.6452 8 9.72955 8.37928 9.05442 9.05442C8.37928 9.72955 8 10.6452 8 11.6V20.4C8 22.39 9.61 24 11.6 24H20.4C21.3548 24 22.2705 23.6207 22.9456 22.9456C23.6207 22.2705 24 21.3548 24 20.4V11.6C24 9.61 22.39 8 20.4 8H11.6ZM21.25 9.5C21.5815 9.5 21.8995 9.6317 22.1339 9.86612C22.3683 10.1005 22.5 10.4185 22.5 10.75C22.5 11.0815 22.3683 11.3995 22.1339 11.6339C21.8995 11.8683 21.5815 12 21.25 12C20.9185 12 20.6005 11.8683 20.3661 11.6339C20.1317 11.3995 20 11.0815 20 10.75C20 10.4185 20.1317 10.1005 20.3661 9.86612C20.6005 9.6317 20.9185 9.5 21.25 9.5ZM16 11C17.3261 11 18.5979 11.5268 19.5355 12.4645C20.4732 13.4021 21 14.6739 21 16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21C14.6739 21 13.4021 20.4732 12.4645 19.5355C11.5268 18.5979 11 17.3261 11 16C11 14.6739 11.5268 13.4021 12.4645 12.4645C13.4021 11.5268 14.6739 11 16 11ZM16 13C15.2044 13 14.4413 13.3161 13.8787 13.8787C13.3161 14.4413 13 15.2044 13 16C13 16.7956 13.3161 17.5587 13.8787 18.1213C14.4413 18.6839 15.2044 19 16 19C16.7956 19 17.5587 18.6839 18.1213 18.1213C18.6839 17.5587 19 16.7956 19 16C19 15.2044 18.6839 14.4413 18.1213 13.8787C17.5587 13.3161 16.7956 13 16 13Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1072_1109"
                    x1="16"
                    y1="32"
                    x2="16"
                    y2="1.58325e-07"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFA367" />
                    <stop offset="0.156501" stop-color="#FF8861" />
                    <stop offset="0.262823" stop-color="#FB716E" />
                    <stop offset="0.386865" stop-color="#F6567D" />
                    <stop offset="0.525082" stop-color="#FF3D75" />
                    <stop offset="0.702285" stop-color="#DC2A8E" />
                    <stop offset="0.81215" stop-color="#B715A9" />
                    <stop offset="0.90784" stop-color="#9C09C8" />
                    <stop offset="1" stop-color="#8A00DE" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="col">
             <p> © 2017, dineout.co.in. All Rights Reserved</p>
            </div>
          </div>
       
          
        </div>
        <hr />
        
      </div>

    </Footerstyle>
  );
}

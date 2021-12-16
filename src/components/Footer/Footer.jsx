import React from "react";
import "./Footer.css";
import logo from "../Images/logo.svg";
export default function Footer() {
  return (
    <div>
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
        <div className="container">
          <img className="footer_end-logo" src={logo} alt="" />
          <p>Find the best Restaurants, Deals, Discounts & Offers</p>
          <p>Contact: +91-9212340202</p>

          <div className="row">
          
          </div>
          </div>
      </div>
    </div>
  );
}

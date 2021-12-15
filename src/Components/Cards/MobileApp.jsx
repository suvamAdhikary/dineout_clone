import React from "react";
import rtimg from "../Images/screenshot.png";
import "./MobileApp.css";
import mobicon from "../Images/mob.svg";
import googleplay from "../Images/google-playstore.png";
import appstore from "../Images/app-store.png";

export default function MobileApp() {
  return (
    <div>
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
    </div>
  );
}

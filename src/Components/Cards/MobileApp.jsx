import React from "react";
import rtimg from "../Images/screenshot.png";
import "./MobileApp.css";
import mobicon from "../Images/mob.svg";
export default function MobileApp() {
  return (
    <div>
      <div className="contianer-fluid mob_contain">
        <div className="contianer">
          <div className="row">
            <div className="col">
              <h2 className="mob_t1">Explore more food with</h2>
              <h1 className="mob_t2">dineout mobile app</h1>
              <p className="mob_info">
                Download the Dineout App to get latest updates on offers, deals
                and trending restauarnt. Also get Rs. 200 in your Dineout
                Wallet.
              </p>
              {/* <i src={mobicon}></i> */}
              <input
                className="mob_inpt"
                placeholder="Your Mobile Number "
                type="text"
              />
              <button className="mob_btn">Send Link</button>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control mob_inpt"
                  placeholder="Your Mobile Number "
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary mob_btn" type="button">
                  Send Link
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {" "}
                  <img src="" alt="" />{" "}
                </div>
                <div className="col">
                  {" "}
                  <img src="" alt="" />{" "}
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
  );
}

import React from "react";

import one from "../../Images/one.svg";
import two from "../../Images/two.svg";
import three from "../../Images/three.svg";
import four from "../../Images/four.svg";
import five from "../../Images/five.svg";
import six from "../../Images/six.svg";
import seven from "../../Images/seven.svg";
import eight from "../../Images/eight.svg";

export default function Buttons() {
  return (
    <div>
      <br />

      <div className="container">
        <div className="container ">
          <div class="row ">
            <div class="col-sm-3 btns_row">
              <a href="/">
                <img src={one} alt="" />
              </a>
            </div>
            <div class="col-sm-3 btns_row">
              <a href="/">
                <img src={two} alt="" />
              </a>
            </div>
            <div class="col-sm-3 btns_row">
              <a href="/">
                <img src={three} alt="" />
              </a>
            </div>
            <div class="col-sm-3 btns_row">
              <a href="/">
                <img src={four} alt="" />
              </a>
            </div>
          </div>

          <br />

          <div class="row ">
            <div class="col-sm-3 btns_row">
              <a href="/">
                <img src={five} alt="" />
              </a>
            </div>
            <div class="col-sm-3 btns_row">
              <a href="/">
                <img src={six} alt="" />
              </a>
            </div>
            <div class="col-sm-3 btns_row">
              <a href="/">
                <img src={seven} alt="" />
              </a>
            </div>
            <div class="col-sm-3 btns_row">
              <a href="/">
                <img src={eight} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* </div> */}
        <br />
      </div>
    </div>
  );
}

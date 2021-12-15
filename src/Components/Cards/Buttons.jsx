import React from "react";
import btn1 from "../Images/btn1.png";
import btn2 from "../Images/btn2.png";
import btn3 from "../Images/btn3.png";
import btn4 from "../Images/btn4.png";

export default function Buttons() {
  return (
    <div>
        <br />
        
<div className="container">   
  <div className="container">
          <div class="row">
            <div class="col-sm-3" >
              <a href="/">
                <img src={btn1} alt="" />
              </a>
            </div>
            <div class="col-sm-3">
              <a href="/">
                <img src={btn2} alt="" />
              </a>
            </div>
            <div class="col-sm-3">
              <a href="/">
                <img src={btn3} alt="" />
              </a>
            </div>
            <div class="col-sm-3">
              <a href="/">
                <img src={btn4} alt="" />
              </a>
            </div>
          </div>

          <br />

          <div class="row">
            <div class="col-sm-3">
              <a href="/">
                <img src={btn1} alt="" />
              </a>
            </div>
            <div class="col-sm-3">
              <a href="/">
                <img src={btn2} alt="" />
              </a>
            </div>
            <div class="col-sm-3">
              <a href="/">
                <img src={btn3} alt="" />
              </a>
            </div>
            <div class="col-sm-3">
              <a href="/">
                <img src={btn4} alt="" />
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

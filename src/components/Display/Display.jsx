import React from "react";
import "./Display.css";

export default function Display() {
  return (
    <div>
      {/* <div className="container-fluid main">
          <div className="wrap">
          <input className="srch" type="text" placeholder="Search for Restaurants, Cuisines, Location..." />
          <button class="srch-Btn" type="submit" value="Submit">Search</button>
          </div>
      
      </div> */}

      <section className="main">
        <div className="div-1 ">
          <div className="div-2">
            <h1 className="div2-h1">
              It's Now Safe To<span>Crave!</span>
            </h1>
            <div className="banner">
              <span className="b-span">
                <svg
                  xmlns="https://cdn-icons.flaticon.com/png/512/2811/premium/2811790.png?token=exp=1639315825~hmac=943dd127bb047c99c636354ff883e394"
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#FF645A"
                    fill-rule="nonzero"
                    stroke="#FF645A"
                    stroke-width="0.1"
                  ></path>
                </svg>
              </span>
              <input className="srch-bar" type="text" placeholder="Search for Restaurants, Cuisines, Location..."  />
              <button className="srch-btn">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="_3XeqW" style="background-image:url(https://im1.dineout.co.in/images/uploads/misc/2021/Mar/31/oldherobannerwebfinal_bau.jpg);margin-top:0">
          <div class="_3_2Ne">
              <div class="_2cmxR">
                  <h1 class="_1xGds">It's Now Safe To<span>Crave!</span></h1>
                  <div class="_14HjN" id="bannerSearchWrap">
                      <span class="_2Sza-"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20">
                          <path fill="#FF645A" fill-rule="nonzero" stroke="#FF645A" stroke-width="0.1">
                              </path></svg></span>
                          <input type="text" id="restaurantSearch" placeholder="Search for Restaurants, Cuisines, Location..." value="" autocomplete="off" maxlength="50">
                              <button class="_3TdTN Ca5zN" type="submit" value="Submit">Search</button>
                              </div>
                              </div>
                              </div>
                              </section> */}
    </div>
  );
}

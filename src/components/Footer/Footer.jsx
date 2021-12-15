import React from "react";
import "./Footer.css";
import logo from "../Images/website-logo.png";
export default function Footer() {
  return (
    <div>
      <div className="container-fluid">
        <hr />
        <footer className="footer_overall">
          <div className="footer_top">
            <h4 className="footer_top-title">Available in</h4>
            <ul className="footer_top-list">
              <li>
                <a href="/delhi">Delhi</a>
              </li>
              <li>
                <a href="/mumbai">Mumbai</a>
              </li>
              <li>
                <a href="/bangalore">Bangalore</a>
              </li>
              <li>
                <a href="/chennai">Chennai</a>
              </li>
              <li>
                <a href="/hyderabad">Hyderabad</a>
              </li>
              <li>
                <a href="/pune">Pune</a>
              </li>
              <li>
                <a href="/kolkata">Kolkata</a>
              </li>
              <li>
                <a href="/ahmedabad">Ahmedabad</a>
              </li>
              <li>
                <a href="/chandigarh">Chandigarh</a>
              </li>
              <li>
                <a href="/goa">Goa</a>
              </li>
              <li>
                <a href="/jaipur">Jaipur</a>
              </li>
              <li>
                <a href="/lucknow">Lucknow</a>
              </li>
              <li>
                <a href="/indore">Indore</a>
              </li>
              <li>
                <a href="/udaipur">Udaipur</a>
              </li>
              <li>
                <a href="/agra">Agra</a>
              </li>
              <li>
                <a href="/vadodara">Vadodara</a>
              </li>
              <li>
                <a href="/nagpur">Nagpur</a>
              </li>
              <li>
                <a href="/kochi">Kochi</a>
              </li>
              <li>
                <a href="/surat">Surat</a>
              </li>
              <li>
                <a href="/ludhiana">Ludhiana</a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="footer_mid">
            <div>
              <h4>Discover</h4>
              <ul>
                <li>
                  <a href="/pune-restaurants">Trending Restaurants</a>
                </li>
                <li>
                  <a href="/pune-restaurants/super-savers">Super Savers</a>
                </li>
                <li>
                  <a href="/pune-restaurants/dineout-pay">Dineout Pay</a>
                </li>
                <li>
                  <a href="/pune-restaurants/dineout-passport">
                    Dineout Passport
                  </a>
                </li>
                <li>
                  <a href="/contactless-dining">Contactless Dining</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>About</h4>
              <ul>
                <li>
                  <a href="/aboutus">About Us</a>
                </li>
                <li>
                  <a href="/" target="_blank" rel="noopener">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank" rel="noopener">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank" rel="noopener">
                    Dineout for Business
                  </a>
                </li>
                <li>
                  <a href="/add-your-restaurant">Add Restaurant</a>
                </li>
                <li>
                  <a href="/termsandconditions">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Top Cuisines</h4>
              <ul>
                <li>
                  <a href="/pune-restaurants/chinese-cuisine">Chinese</a>
                </li>
                <li>
                  <a href="/pune-restaurants/italian-cuisine">Italian</a>
                </li>
                <li>
                  <a href="/pune-restaurants/south-indian-cuisine">
                    South Indian
                  </a>
                </li>
                <li>
                  <a href="/pune-restaurants/mexican-cuisine">Mexican</a>
                </li>
                <li>
                  <a href="/pune-restaurants/bengali-cuisine">Bengali</a>
                </li>
                <li>
                  <a href="/pune-restaurants/thai-cuisine">Thai</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Top Facilities </h4>
              <ul class="pull-left">
                <li>
                  <a href="/pune-restaurants/romantic">Romantic</a>
                </li>
                <li>
                  <a href="/pune-restaurants/fine-dining">Fine Dining</a>
                </li>
                <li>
                  <a href="/pune-restaurants/buffet">Buffet</a>
                </li>
                <li>
                  <a href="/pune-restaurants/5-star">5 Star</a>
                </li>
                <li>
                  <a href="/pune-restaurants/pure-veg">Pure Veg</a>
                </li>
                <li>
                  <a href="/pune-restaurants/seafood">Sea Food</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Top Locations </h4>
              <ul class="pull-left">
                <li>
                  <a href="/pune-restaurants/east-pune/koregaon-park">
                    Koregaon Park
                  </a>
                </li>
                <li>
                  <a href="/pune-restaurants/east-pune/viman-nagar">
                    Viman Nagar
                  </a>
                </li>
                <li>
                  <a href="/pune-restaurants/west-pune/aundh">Aundh</a>
                </li>
                <li>
                  <a href="/pune-restaurants/north-pune/lonavala">Lonavala</a>
                </li>
                <li>
                  <a href="/pune-restaurants/west-pune/baner">Baner</a>
                </li>
                <li>
                  <a href="/pune-restaurants/north-pune/hinjewadi">Hinjewadi</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="footer_end-">
              
                  <img src={logo} alt="" />
    
              <p className="">Find the best Restaurants, Deals, Discounts & Offers</p>
              <p>Contact:<strong> +91-9212340202</strong></p>
              <div className="footer_end-social">

              </div>
              <p>© 2017, dineout.co.in. All Rights Reserved.</p>
          </div>

          
        </footer>
      </div>
    </div>
  );
}

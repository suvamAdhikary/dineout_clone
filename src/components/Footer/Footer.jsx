import React from 'react'
import './Footer.css'
import logo from "../Images/website-logo.jpg"
export default function Footer() {
    return (
        <div>
            {/* <hr />
            <div className="container-fluid footer_last">
                <div className="footer_last-logodiv">
                    <img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png" alt="" />
                </div>
                
                <p className="footer_last-text1">Find the best Restaurants, Deals, Discounts & Offers</p>
                <p className="footer_last-contact">Contact: +91-9212340202</p>
                <div className="footer_last-icondiv">
                    <span><i>yt</i></span>
                    <span><i>yt</i></span>
                    <span><i>yt</i></span>
                    <span><i>yt</i></span>
                </div>
                <p className="footer_last-endText"></p>
            </div> */}
            <hr />
            <footer className="footer_overall">
            <div class="footer_top">
                <h4 class="footer_top-title">Available in</h4>
                <ul class="footer_top-list">
                    <li><a href="/delhi">Delhi</a></li>
                    <li><a href="/mumbai">Mumbai</a></li>
                    <li><a href="/bangalore">Bangalore</a></li>
                    <li><a href="/chennai">Chennai</a></li>
                    <li><a href="/hyderabad">Hyderabad</a></li>
                    <li><a href="/pune">Pune</a></li>
                    <li><a href="/kolkata">Kolkata</a></li>
                    <li><a href="/ahmedabad">Ahmedabad</a></li>
                    <li><a href="/chandigarh">Chandigarh</a></li>
                    <li><a href="/goa">Goa</a></li>
                    <li><a href="/jaipur">Jaipur</a></li>
                    <li><a href="/lucknow">Lucknow</a></li>
                    <li><a href="/indore">Indore</a></li>
                    <li><a href="/udaipur">Udaipur</a></li>
                    <li><a href="/agra">Agra</a></li>
                    <li><a href="/vadodara">Vadodara</a></li>
                    <li><a href="/nagpur">Nagpur</a></li>
                    <li><a href="/kochi">Kochi</a></li>
                    <li><a href="/surat">Surat</a></li>
                    <li><a href="/ludhiana">Ludhiana</a></li>
                    </ul>
            </div>
            </footer>
        </div>
    )
}

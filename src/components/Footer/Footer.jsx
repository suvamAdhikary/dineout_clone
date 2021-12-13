import React from 'react'
import './Footer.css'
import logo from "../Images/website-logo.jpg"
export default function Footer() {
    return (
        <div>
            <hr />
            <div className="container-fluid footer_last">
                <div className="footer_last-logodiv">
                    <img src={logo} alt="" />
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
            </div>
        </div>
    )
}

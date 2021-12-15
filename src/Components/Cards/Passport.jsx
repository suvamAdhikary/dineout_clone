import React from 'react'
import passImg from '../Images/artboard.jpg'
import './Passport.css'

export default function Passport() {
    return (
        <div>
            <div className="container_pass">
                <div className="pass-container">
                    <div className="pass-imgwrap">
                        <img  src={passImg} alt="" />
                    </div>
                    <div className="pass-cardholder">
                    <img  src={passImg} alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

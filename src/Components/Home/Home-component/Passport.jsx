import React from "react";
import passImg from "../../Images/artboard.jpg";
import styled from 'styled-components';

const Setstyle = styled.div`
img:hover{
  cursor: pointer;
}
`

export default function Passport() {
  return (
    <Setstyle>
      <div className="container">
        <div className="container">
        <div class="row">
       <div className="col">
           <img src={passImg} alt="" />
       </div>
       <div className="col">
         place cards here
       </div>
        </div>
        </div>
      </div>
      <br/>
    </Setstyle>
    
  );
}

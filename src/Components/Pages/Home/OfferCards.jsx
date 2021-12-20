import React from "react";
import img1 from "../../Images/25offid.svg";
import img3 from "../../Images/15offid.png";
import img4 from "../../Images/20offid.png";
import img30 from "../../Images/30prct.svg";

import styled from "styled-components";

const Offercss = styled.div`
  height: 422px;
  background: #f3f3f3;
  padding: 10px;
  padding-bottom:10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  .offers-div {
    width: 82%;
    margin: auto;
    margin-bottom:0;
    h1 {
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px;
      text-align: left;
    }
  }
  .card-main-div {
    width: 82%;
    margin: auto;
    display: flex;
    column-gap:16px;
    div {
      box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.08);
      height: 280px;
      width: 216px;
      img {
        height: 280px;
        width: 216px;
      }
    }
  }
`;
export default function OfferCards() {
  return (
    <Offercss>
      <div className="offers-div">
        <h1>Best offers</h1>
      </div>
      <div className="card-main-div">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img30} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
      </div>
    </Offercss>
  );
}

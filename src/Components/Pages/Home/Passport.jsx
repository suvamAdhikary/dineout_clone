import React from "react";
import passImg from "../../Images/artboard.jpg";
import styled from "styled-components";
import { DummyCard } from "./DummyCard";
const Setstyle = styled.div`
  /* height: 550px; */
  padding: 10px;
  display: flex;
  gap: 5px;
  width: 85%;
  margin: auto;
  align-items: center;
  imgDiv {
    height: 480px;
    width: 560px;
    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
  .Showing_cards_here {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
`;

export default function Passport() {
  const LcData = localStorage.getItem("data");
  const Nc = JSON.parse(LcData);
  return (
    <>
      <Setstyle>
        <div className="imgDiv">
          <img src={passImg} alt="" />
        </div>
        <div className="Showing_cards_here">
          <DummyCard
            image="https://i.ibb.co/gg9Hg3R/p8121-148947824258c7a262defb7.jpg"
            name="Park Pivilion"
            rating="4.3"
            location={"The Jamson inn, " + Nc}
          />
          <DummyCard
            image="https://i.ibb.co/j6Qqd4n/p535-15448607315c14b43b250a1.jpg"
            name="Barbeque Nation"
            rating="4.7"
            location={"Park Street, " + Nc}
          />

          <DummyCard
            image="https://i.ibb.co/FBhR2GT/p3777-1452246512568f85f06f5a0.jpg"
            name="Mainland China"
            rating="3.3"
            location={"SB Road, " + Nc}
          />
          <DummyCard
            image="https://i.ibb.co/S0d5Y1P/p31358-1486538682589ac7ba6b362.jpg"
            name="Sunbean"
            rating="5"
            location={"ITC Sonar, " + Nc}
          />
        </div>
      </Setstyle>
      <hr style={{ marginTop: "50px" }} />
    </>
  );
}

import React from "react";
import passImg from "../../Images/artboard.jpg";
import styled from 'styled-components';
import {FoodCard} from './FoodCard'
import { DummyCard } from "./DummyCard";
const Setstyle = styled.div`
height: 550px;
padding:10px;
display: flex;
gap:5px;
width:85%;
margin:auto;
align-items: center;
imgDiv{
  height: 480px;
width: 560px;
img{
  width:100%;
  height:100%;
  cursor: pointer;
}
}
.Showing_cards_here{
  width:100%;
  display: flex;
  flex-wrap:wrap;
  gap:20px;
  justify-content: center;
}

`

export default function Passport() {
  return (<>
    <Setstyle>
      <div className="imgDiv">
        <img src={passImg} alt="" />
      </div>
      <div className="Showing_cards_here">
<DummyCard/>
<DummyCard/>
<DummyCard/>
<DummyCard/>
      </div>
    </Setstyle>
    <hr style={{marginTop:'50px'}}/>
    </>
  );
}

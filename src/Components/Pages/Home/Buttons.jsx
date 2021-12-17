import buffet from "../../Images/bffet.png";
import styled from "styled-components";
import btn2 from "../../Images/btn2.png";
import btn3 from "../../Images/btn3.png";
import btn4 from "../../Images/btn4.png";
import btn5 from "../../Images/btn5.png";
import btn6 from "../../Images/btn6.png";
import btn7 from "../../Images/btn7.png";
import btn8 from "../../Images/btn8.png";
import { Link } from "react-router-dom";

const ButtonsStyle = styled.div`
height:268px;
width:100%;
padding:5%;
display:flex;
flex-wrap:wrap;
gap:20px;
justify-content: center;
  .btnDiv {
    cursor: pointer;
    width: 272px;
    height: 56px;
    background: #f3f3f3;
    border-radius: 4px;
    display: flex;
    padding: 10px;
    gap: 10px;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 100%;
      img {
        height: 24px;
        width: 25px;
        margin-bottom: 5px;
      }
    }
    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #797979;
    }
    a {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #797979;
    }
  }
`;
export const Buttons = () => {
  return (
    <ButtonsStyle>
      <div className="btnDiv">
        <div>
          <img src={buffet} alt="" />
        </div>
        <p>Buffet</p>
      </div>
      <div className="btnDiv">
        <div>
          <img src={btn2} alt="" />
        </div>
        <p>Top-Trending</p>
      </div>
      <div className="btnDiv">
        <div>
          <img src={btn3} alt="" />
        </div>
        <Link to="/petfriendly">Pet Friendly</Link>
      </div>
      <div className="btnDiv">
        <div>
          <img src={btn4} alt="" />
        </div>
        <p>New & Dineout</p>
      </div>
      <div className="btnDiv">
        <div>
          <img src={btn5} alt="" />
        </div>
        <p>Family Time</p>
      </div>
      <div className="btnDiv">
        <div>
          <img src={btn6} alt="" />
        </div>
        <p>Pure Veg</p>
      </div>
      <div className="btnDiv">
        <div>
          <img src={btn7} alt="" />
        </div>
        <p>North Indian</p>
      </div>
      <div className="btnDiv">
        <div>
          <img src={btn8} alt="" />
        </div>
        <p>Best Bars</p>
      </div>
    </ButtonsStyle>
  );
};

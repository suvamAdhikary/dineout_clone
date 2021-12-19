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
  height: 268px;
  width: 100%;
  padding: 5%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  .btnDiv {
background: #f3f3f3;
background: linear-gradient(to left, #f3f3f3 50%, #e7e6e6 50%) right;
background-size: 200%;
transition: .4s ease-out;
    cursor: pointer;
    width: 272px;
    height: 56px;
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
  .btnDiv:hover {
    background-position: left;
  }
`;
export const Buttons = () => {
  return (
    <ButtonsStyle>
      <div className="btnDiv">
        <div>
          <img src={buffet} alt="" />
        </div>
        <Link to="/dynamic/buffet">Buffet</Link>
      </div>
      <div className="btnDiv">
        <div>
          <img src={btn2} alt="" />
        </div>
        <Link to="/dynamic/trending">Top-Trending</Link>
      </div>
      <div className="btnDiv">
        <div>
          <img src={btn3} alt="" />
        </div>
        <Link to="dynamic/petFriendly">Pet Friendly</Link>
      </div>
      <div className="btnDiv">
        <div>
          <img src={btn4} alt="" />
        </div>
        <Link to="/dynamic/dineoutPay">New & Dineout</Link>
      </div>
      <div className="btnDiv">
        <div>
          <img src={btn5} alt="" />
        </div>
        <Link to="/dynamic/familyTime">Family Time</Link>
      </div>
      <div className="btnDiv">
        <div>
          <img src={btn6} alt="" />
        </div>
        <Link to="/dynamic/pureVeg">Pure Veg</Link>
      </div>
      <div className="btnDiv">
        <div>
          <img src={btn7} alt="" />
        </div>
        <Link to="/dynamic/northIndian">North Indian</Link>
      </div>
      <div className="btnDiv">
        <div>
          <img src={btn8} alt="" />
        </div>
        <Link to="/dynamic/bestBars">Best Bars</Link>
      </div>
    </ButtonsStyle>
  );
};

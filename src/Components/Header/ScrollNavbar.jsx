import styled from "styled-components";
// import { Link } from "react-router-dom";
import Dineout_Logo from "../Images/Dineout_Logo.png";
import Location_Logo from "../Images/Location_Logo.png";

const Scroll = styled.div`
  height: 112px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  background:white;
  width: 100%;
  .top_searchDiv {
    width: 100%;
    height: 72px;
    border-bottom: 1px solid #dcdcdc;
    display: flex;
    align-items: center;
    .header_logo {
      width: 96px;
      height: 32px;
      position: relative;
      left: 120px;
    }
    .search_bar {
      width: 209px;
      height: 32px;
      position: relative;
      left: 170px;
      background: white;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 13px;
        height: 12px;
        margin-left: 7px;
      }
      select {
        width: 100%;
        margin-right: 10px;
        margin-left: 1px;
        border: none;
        height: 100%;
        border-radius: 4px;
        padding-left: 2px;
        font-size: 14px;
        color: #797979;
        line-height: 16px;
      }
      select::after {
        border: none;
      }
    }
    .big_search_bar {
      width: 600px;
      height: 32px;
      display: flex;
      background: #ffffff;
      border: 1px solid #dcdcdc;
      box-sizing: border-box;
      margin-left: 200px;
      border-radius: 4px;
      align-items: center;
      div {
        width: 40px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      button {
        width: 112px;
        padding: 8px 32px;
        height: 32px;
        background: #ff645a;
        border-radius: 4px;
        border: none;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #ffffff;
      }
      input {
        width: 100%;
        border: none;
      }
      input:focus {
        outline: none !important;
      }
    }
    .login_btn {
      width: 103px;
      height: 32px;
      background: #ff645a;
      position: absolute;
      top: 20px;
      right: 100px;
      border-radius: 4px;
      border: none;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
    }
  }
  .bottom_div {
    height: 42px;
    width: 100%;
    align-items: center;
    div {
      width: 50%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      p {
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        align-items: center;
        color: #797979;
      }
    }
  }
`;

export const ScrollNavbar = () => {
  return (
    <Scroll>
      <div className="top_searchDiv">
        <img src={Dineout_Logo} className="header_logo" alt="" />
        <div className="search_bar">
          <img src={Location_Logo} alt="" />
          <select name="search" id="">
            <option value="abc">Delhi</option>
          </select>
        </div>
        <div className="big_search_bar">
          <div>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2372 10.6814L13.7847 12.1777L14.8751 13.2317C15.0421 13.3934 15.1204 13.6042 15.1308 13.8264C15.1412 14.0518 15.0275 14.2616 14.8751 14.4212C14.7094 14.5791 14.4895 14.6676 14.2605 14.6685C14.0316 14.6663 13.8118 14.578 13.6449 14.4212L13.2515 14.0403L11.5256 12.3708L11.0049 11.8678C10.8557 11.9774 10.7023 12.0807 10.5458 12.1767C10.2134 12.3719 9.86502 12.5384 9.50437 12.6744C8.80848 12.9405 8.07057 13.0797 7.32559 13.0856C6.71586 13.094 6.10803 13.0156 5.52037 12.8529C4.9557 12.696 4.41557 12.4614 3.9155 12.1558C3.42954 11.8606 2.98704 11.4993 2.60072 11.0821C1.82959 10.2358 1.27237 9.18504 1.09393 8.0633C1.03806 7.73917 1.00666 7.41128 1.00002 7.08243C0.998978 6.74852 1.03654 6.42087 1.0835 6.09009C1.16698 5.51722 1.35793 4.9767 1.60524 4.45287C2.08941 3.43548 2.90437 2.57148 3.86854 1.96104C4.35272 1.6553 4.89533 1.41843 5.44733 1.25565C5.70089 1.18157 5.96072 1.12522 6.22367 1.08765C6.56385 1.03861 6.90402 1 7.24837 1C7.48315 1 7.47167 2.68313 7.24837 2.68313C7.00628 2.68313 6.76419 2.69878 6.52315 2.73009L6.75585 2.69983C6.28315 2.76243 5.82193 2.88348 5.38263 3.06296L5.58924 2.97948C5.16824 3.15288 4.77041 3.37791 4.40489 3.64939L4.58019 3.51791C4.216 3.79052 3.88782 4.10818 3.6035 4.4633L3.73915 4.29322C3.46011 4.6439 3.22725 5.02896 3.04628 5.43896L3.13289 5.23861C2.94827 5.6624 2.82191 6.10924 2.75724 6.56696L2.78854 6.34261C2.72473 6.80791 2.72473 7.27974 2.78854 7.74504L2.75724 7.5207C2.82193 7.97774 2.94715 8.4233 3.13289 8.848C3.10377 8.78133 3.0749 8.71455 3.04628 8.64765C3.22576 9.05565 3.4595 9.4407 3.73915 9.79339L3.6035 9.62435C3.88524 9.97704 4.21498 10.2953 4.58019 10.5697L4.40489 10.4372C4.76906 10.7085 5.16767 10.9339 5.58924 11.1082C5.52047 11.0797 5.4516 11.0516 5.38263 11.0237C5.82089 11.201 6.28315 11.3252 6.75585 11.3868L6.52315 11.3576C7.00315 11.4191 7.48628 11.4191 7.96524 11.3586L7.73254 11.3878C8.20211 11.3263 8.66124 11.2073 9.09741 11.031L8.88976 11.1144C9.31952 10.94 9.72524 10.7113 10.0971 10.4341L9.92176 10.5666C10.285 10.2944 10.6122 9.97707 10.8953 9.62226L10.7597 9.79235C11.0414 9.43652 11.2772 9.04626 11.4588 8.632L11.3712 8.83339C11.5527 8.416 11.6758 7.97774 11.7395 7.52904L11.7092 7.75339C11.7745 7.28295 11.7745 6.80575 11.7092 6.3353L11.7405 6.55965C11.6757 6.11043 11.5515 5.67181 11.3712 5.2553L11.4588 5.45565C11.2766 5.04073 11.0416 4.65108 10.7597 4.29635L10.8953 4.46539C10.6117 4.11135 10.2846 3.79443 9.92176 3.52209L10.0971 3.65357C9.72405 3.37755 9.31815 3.14902 8.88872 2.97322L9.09741 3.05774C8.65916 2.88091 8.20016 2.76064 7.7315 2.69983L7.96419 2.73009C7.7265 2.69902 7.48704 2.68333 7.24732 2.68313C7.0115 2.68313 7.02402 1 7.24732 1C7.64906 1.00209 8.0508 1.04487 8.44524 1.11478C8.77185 1.17113 9.09219 1.2567 9.40106 1.37252C10.3625 1.70694 11.2257 2.27532 11.9127 3.02643C12.3259 3.48452 12.6849 3.99165 12.9353 4.54991C13.0783 4.8713 13.2087 5.19374 13.2995 5.53287C13.3892 5.87096 13.4425 6.22052 13.4748 6.568C13.5295 7.20695 13.4773 7.85055 13.3204 8.47235C13.2546 8.7447 13.1638 9.01287 13.0522 9.27061C12.9165 9.58783 12.7705 9.8967 12.5837 10.1889C12.4772 10.3579 12.3614 10.5228 12.2372 10.6814Z"
                fill="#FF645A"
                stroke="#FF645A"
                stroke-width="0.1"
              />
            </svg>
          </div>
          <input
            placeholder="Search for Restaurants, Offers, Deals or Events..."
            type="text"
          />
          <button>Search</button>
        </div>
        <button className="login_btn">Login</button>
      </div>
      <div className="bottom_div">
        <div>
          <p>Home</p>
          <p>Book a Table</p>
          <p>Dineout Pay</p>
          <p>Dineout Passport</p>
          <p>Super Saver</p>
          <p>Blog</p>
        </div>
      </div>
    </Scroll>
  );
};

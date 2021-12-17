import React from "react";
import rtimg from "../../Images/screenshot.png";
import googleplay from "../../Images/google-playstore.png";
import appstore from "../../Images/app-store.png";
import styled from "styled-components";

const Mobilecss = styled.div`
  .mob_contain {
    margin-left: 10%;
  }
  .mob_t1 {
    width: 279px;
    height: 30px;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    color: #333333;
  }
  .mob_t2 {
    width: 346px;
    height: 42px;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #ff645a;
  }
  .mob_info {
    width: 465px;
    height: 40px;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #797979;
  }
  .mob_inpt {
    background: #ffffff;
    border: 1px solid #cecdcd !important;
    box-sizing: border-box;
    border-radius: 4px;
    color: #797979;
    font-family: Metropolis;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
  }

  .mob_mobicon {
    background: #797979;
    border: 0.5px solid #ffffff;
  }
  .mob_btn {
    height: 40px;
    background: #ff645a;
    border-radius: 4px;
    color: white;
    border: none !important;
  }
  .mobileApplication {
    height: 40px;
    width: 560px;
    border-radius: 4px;
    background: white;
    display: flex;
    align-items: center;
    border: 1px solid #dcdcdc;
    div {
      width: 60px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    input {
      width: 100%;
      border: none;
      font-size: 14px;
      line-height: 20px;
      ::placeholder {
        font-size: 14px;
        line-height: 20px;
        color: #797979;
      }
    }
    input:focus {
      outline: none !important;
    }
    button {
      height: 40px;
      width: 132px;
      border-radius: 4px;
      padding: 12px, 32px, 12px, 32px;
      background: #ff645a;
      color: white;
      border: none;
    }
  }
`;

export default function MobileApp() {
  return (
    <Mobilecss>
      <div className="contianer-fluid ">
        <div className="container">
          <div className="contianer">
            <div className="row">
              <div className="col">
                <br />
                <h2 className="mob_t1">Explore more food with</h2>
                <h1 className="mob_t2">dineout mobile app</h1>
                <br />
                <p className="mob_info">
                  Download the Dineout App to get latest updates on offers,
                  deals and trending restauarnt. Also get Rs. 200 in your
                  Dineout Wallet.
                </p>
                <br />
                <div className="mobileApplication">
                  <div>
                    <svg
                      width="15"
                      height="23"
                      viewBox="0 0 15 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.833 20V17.833H3.167V20H6.417C6.42543 19.7183 6.54321 19.451 6.74538 19.2547C6.94755 19.0584 7.21822 18.9485 7.50001 18.9484C7.78181 18.9483 8.05258 19.0579 8.25493 19.254C8.45728 19.4501 8.57531 19.7173 8.584 19.999L11.834 20H11.833ZM11.833 7H3.167V15.667H11.833V7ZM11.833 4.833V2.667H3.167V4.833H11.833ZM2.086 0.5H12.914C13.514 0.5 14 0.983 14 1.582V21.085C14 21.682 13.514 22.167 12.914 22.167H2.086C1.486 22.167 1 21.684 1 21.085V1.582C1 0.984 1.486 0.5 2.086 0.5Z"
                        fill="#797979"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                  <input type="text" placeholder="Enter Your Number" />
                  <button>Send Link</button>
                </div>
                <br />
                <br />
                <div className="container">
                  <div className="container">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          {" "}
                          <img src={googleplay} alt="" />{" "}
                        </div>
                        <div className="col" style={{ marginLeft: "0%" }}>
                          {" "}
                          <img src={appstore} alt="" />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <img src={rtimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mobilecss>
  );
}

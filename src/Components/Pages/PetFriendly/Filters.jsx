import { useState } from "react";
import styled from "styled-components";

const FiltersStyle = styled.div`
  width: 272px;
  padding: 15px;
  padding-top: 8px;
  border-radius: 4px;
  background:red;
  margin: auto;
  .accordion-heading {
    cursor: pointer;
    height: 32px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      margin-right: 10px;
    }
    p {
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #797979;
    }
  }
  .accordion-details {
    width: 100%;
    display: none;
    .accordion-input-div {
      margin-top: 8px;
      height: 32px;
      width: 240px;
      left: 16px;
      margin-bottom: 18px;
      top: 52px;
      border-radius: 4px;
      padding: 6px, 8px, 6px, 8px;
      display: flex;
      align-items: center;
      background: #f3f3f3;
      input {
        height: 20px;
        width: 224px;
        left: 8px;
        top: 6px;
        border-radius: nullpx;
        background: transparent;
        padding: 8px;
        border: none;
        ::placeholder {
          font-size: 14px;
          line-height: 20px;
          color: #797979;
        }
      }
      input:focus {
        outline: none !important;
      }
    }
  }
  .accordion-checkbox {
    display: flex;
    margin-top: 5px;
    align-items: center;
    height: 30px;
    gap: 20px;
    input {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 2px solid red;
      border-radius: 2px;
      cursor: pointer;
    }
    p {
      font-size: 14px;
      line-height: 20px;
      color: #797979;
    }
  }
  .accordion-hidden {
    display: block;
    background: red;
  }
`;

export const Filters = () => {
  const [accord, setAccord] = useState(false);
  return (
    <FiltersStyle>
      <div
        onClick={() => setAccord(accord ? false : true)}
        className="accordion-heading"
      >
        <p>Quick Filters</p>
        <span>
          {accord ? (
            <svg
              width="12"
              height="2"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.166626 0.166687H11.8333V1.83335H0.166626V0.166687Z"
                fill="#333333"
              />
            </svg>
          ) : (
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.625 4.375V0H4.375V4.375H0V5.625H4.375V10H5.625V5.625H10V4.375H5.625Z"
                fill="#333333"
              />
            </svg>
          )}
        </span>
      </div>
      <div
        className={
          accord ? "accordion-details accordion-hidden" : "accordion-details"
        }
      >
        <div className="accordion-input-div">
          <input placeholder="Search" type="text" />
        </div>
        <div className="accordion-checkbox">
          <input type="checkbox" />
          <p>Dineout Pay</p>
        </div>
        <div className="accordion-checkbox">
          <input type="checkbox" />
          <p>Pure Veg</p>
        </div>
        <div className="accordion-checkbox">
          <input type="checkbox" />
          <p>Buffet</p>
        </div>
        <div className="accordion-checkbox">
          <input type="checkbox" />
          <p>5 Star</p>
        </div>
      </div>
    </FiltersStyle>
  );
};

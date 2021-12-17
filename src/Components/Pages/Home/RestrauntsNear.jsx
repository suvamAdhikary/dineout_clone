import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import { FoodCard } from "./FoodCard";
const FeaturedRestrauntsStyle = styled.div`
  width: 84%;
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 50px;
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      color: #333333;
    }
    p {
      font-size: 14px;
      line-height: 16px;
      color: #797979;
      font-weight: 400;
      margin-right: 35px;
      cursor: pointer;
    }
  }
`;

export const RestrauntsNear = () => {
  const properties = {
    duration: 10,
    slidesToShow: 4,
    transitionDuration: 200,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <div style={{ width: "30px", marginRight: "-30px" }}></div>,
    nextArrow: (
      <div
        style={{
          width: "30px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F3F3F3",
          borderRadius: "20px",
          marginBottom:"100px",
          marginLeft: "-30px",
          cursor: "pointer",
        }}
      >
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-0.000244141 5.00035C-0.000244141 4.86774 0.0524343 4.74056 0.146202 4.64679C0.239971 4.55302 0.367148 4.50035 0.499756 4.50035L12.2928 4.50035L9.14576 1.35435C9.05187 1.26046 8.99912 1.13312 8.99912 1.00035C8.99912 0.86757 9.05187 0.740232 9.14576 0.646345C9.23964 0.552459 9.36698 0.499714 9.49976 0.499714C9.63253 0.499714 9.75987 0.552459 9.85376 0.646345L13.8538 4.64635C13.9003 4.69279 13.9373 4.74797 13.9625 4.80871C13.9877 4.86946 14.0006 4.93458 14.0006 5.00035C14.0006 5.06611 13.9877 5.13123 13.9625 5.19198C13.9373 5.25272 13.9003 5.3079 13.8538 5.35435L9.85376 9.35435C9.75987 9.44823 9.63253 9.50098 9.49976 9.50098C9.36698 9.50098 9.23964 9.44823 9.14576 9.35435C9.05187 9.26046 8.99912 9.13312 8.99912 9.00034C8.99912 8.86757 9.05187 8.74023 9.14576 8.64634L12.2928 5.50035L0.499756 5.50035C0.367148 5.50035 0.239971 5.44767 0.146202 5.3539C0.0524343 5.26013 -0.000244141 5.13295 -0.000244141 5.00035Z"
            fill="#FF645A"
          />
        </svg>
      </div>
    ),
  };

  return (
    <FeaturedRestrauntsStyle>
      <div className="heading">
        <h1>Restraunts Near You</h1>
        <p>See all</p>
      </div>
      <div>
        <div>
          <Slide {...properties}>
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </Slide>
        </div>
      </div>
    </FeaturedRestrauntsStyle>
  );
};

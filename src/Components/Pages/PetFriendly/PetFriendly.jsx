import styled from "styled-components";
import { ScrollNavbar } from "../../Header/ScrollNavbar";
import { Filters } from "./Filters";
import { PetFriendlyCard } from "./PetFriendlyCard";
import {PetFriendlyHeading} from './PetFriendlyHeading'
const PetStyle = styled.div`
  width: 100%;
  padding-top:100px;
  min-height: 1004px;
  padding-bottom:50px;
  background: #f3f3f3;
  .PetStyle_main_div {
    width: 85%;
    margin: auto;
    margin-top: 40px;
    display: flex;
    gap: 20px;
    .petStyle_filters_div {
      display: flex;
      flex-direction: column;
      gap: 3px;
      .bottom-para-pet1 {
        margin-top: 30px;
        width: 226px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #797979;
      }
      .bottom-para-pet {
        font-size: 14px;
        font-weight: 400;
        width: 226px;
        line-height: 20px;
        color: #797979;
      }
    }
    .PetStyle_cards_div {
      width: 100%;
      .petStyle_location_div {
        display: flex;
        align-items: center;
        gap: 6px;
        p {
          font-size: 12px;
          line-height: 16px;
          color: #797979;
        }
      }
    }
    .petfriendly-sort {
      margin-top: 24px;
      display: flex;
      margin-bottom:40px;
      justify-content: space-between;
      h1 {
        height: 60px;
        width: 553px;
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        color: #333333;
      }
      div {
        width: 230px;
        display: flex;
        align-items: center;
        gap: 5px;
        div {
          display: flex;
          align-items: center;
          font-size: 14px;
          line-height: 20px;
          color: #333333;
        }
        .pet-select-div {
          height: 40px;
          min-width: 174px;
          border-radius: 4px;
          background: #ffffff;
          padding: 8px;
          border: none;
          select {
            width: 100%;
            border: none;
          }
        }
      }
    }
  }
`;

export const PetFriendly = () => {
  return (
    <>
      <PetStyle>
        <ScrollNavbar />
        <div className="PetStyle_main_div">
          <div className="petStyle_filters_div">
            <Filters />
            <Filters />
            <Filters />
            <Filters />
            <p className="bottom-para-pet1">Top 10 Restrauns in Kolkata</p>
            <p className="bottom-para-pet">
              Pedegree Sponserd Restraunts Near Me
            </p>
          </div>
          <div className="PetStyle_cards_div">
            <PetFriendlyHeading/>
            <PetFriendlyCard/>
          </div>
        </div>
      </PetStyle>
    </>
  );
};

import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ChipsContext } from "../../../Context/ChipsContest";
const FiltersStyle = styled.div`
  .MainDiv {
    width: 272px;
    padding: 15px;
    padding-top: 15px;
    border-radius: 4px;
    background: white;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    svg {
      cursor: pointer;
    }
    .addedChips {
      width: 100%;
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      color: #797979;
    }
    .protoChips {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      height: 32px;
      background: #fff4f4;
      border-radius: 4px;
      p {
        font-size: 12px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #dc4f4a;
      }
      div {
        height: 32px;
        width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .hidden {
    display: none;
  }
`;

export const Chips = () => {
  const { chips, handleDelete } = useContext(ChipsContext);
  const handleDele = (e) => {
    handleDelete(e);
  };
  return (
    <FiltersStyle>
      <div className={chips.length > 0 ? "MainDiv" : "hidden"}>
        <p className="addedChips">Added Chips</p>
        {chips.length !== 0
          ? chips.map((e, i) => (
              <div key={i} className="protoChips">
                <p>{e.data}</p>
                <div>
                  <svg
                    onClick={() => handleDele(e.id)}
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.50024 2.205L7.79524 1.5L5.00024 4.295L2.20524 1.5L1.50024 2.205L4.29524 5L1.50024 7.795L2.20524 8.5L5.00024 5.705L7.79524 8.5L8.50024 7.795L5.70524 5L8.50024 2.205Z"
                      fill="#DC4F4A"
                      stroke="#DC4F4A"
                    />
                  </svg>
                </div>
              </div>
            ))
          : ""}
      </div>
    </FiltersStyle>
  );
};

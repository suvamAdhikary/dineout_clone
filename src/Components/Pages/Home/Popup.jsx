import styled from "styled-components";
import Model from "react-modal";
import { useState } from "react";
const Style = styled.div`
  height: 336px;
  width: 560px;
  margin: auto;
  border-radius: 4px;
  .heading_popup {
    text-align: center;
    height: 36px;
    width: 560px;
    left: 0px;
    top: 0px;
    padding: 8px, 224px, 8px, 224px;
    background: #f3f3f3;
    border-radius: 4px 4px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #333333;
    }
  }
  .popup_buttons {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    button {
      height: 36px;
      width: 104px;
      border-radius: 2px;
      padding: 8px, 32px, 8px, 32px;
      background: #ffffff;
      border: 1px solid #dcdcdc;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #797979;
    }
  }
`;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "0px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(5, 5, 5, 0.3)",
  },
};
Model.setAppElement('#root');
export const Popup = () => {
  const [model, setModel] = useState(true);
  return (
    <>
      <Model style={customStyles} isOpen={model}>
        <Style>
          <div className="heading_popup">
            <p>Select City</p>
          </div>
          <div className="popup_buttons">
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Delhi
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Mumbai
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Banglore
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Chennai
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Hyderabad
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Pune
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Kolkata
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Ahemdabad
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Chandigarh
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Goa
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Jaipur
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Lucknow
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Indore
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Udaipur
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Agra
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Vadodra
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Nagpur
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Kochi
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Surat
            </button>
            <button
              onClick={() => {
                setModel(false);
              }}
            >
              Ludhiana
            </button>
          </div>
        </Style>
      </Model>
    </>
  );
};

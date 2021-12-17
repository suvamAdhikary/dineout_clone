import styled from "styled-components";
import Model from "react-modal";
import { useContext, useState } from "react";
import { SigninContext } from "../../Context/SignInContext";
const Style = styled.div`
  height: 328px;
  width: 464px;
  box-shadow: 0px 0px 4px gray;
  padding: 35px;
  margin: auto;
  border-radius: 4px;
  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #333333;
  }
  .verify_otp {
    display: flex;
    gap: 10px;
    position: relative;
    top: 30px;
    align-items: center;
    p {
      font-size: 14px;
      line-height: 20px;
      color: #000000;
      span {
        font-weight: bold;
      }
    }
  }
  .time_input {
    width: 100%;
    border: 1px solid black;
    height: 40px;
    display: flex;
    position: relative;
    top: 40px;
    p {
      width: 73px;
      height: 20px;
      font-size: 14px;
      line-height: 20px;
      padding: 7px;
      color: #51ba64;
      text-align: center;
      align-items: center;
    }
    input {
      width: 100%;
      border: none;
      padding: 15px;
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
  .resend_otp {
    text-align: right;
    font-size: 14px;
    line-height: 16px;
    color: #797979;
    position: relative;
    top: 60px;
  }
  .verify_btn {
    height: 46px;
    position: relative;
    top: 80px;
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 12px, 32px, 12px, 32px;
    background: #ff645a;
    color: white;
    border: none;
    font-size: 16px;
    line-height: 22px;
  }
  .cross_btn {
    width: 24px;
    heigth: 24px;
    position: relative;
    top: -15px;
    left: 380px;
    background: #ffffff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
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
Model.setAppElement("#root");

export const VerifyOtp = () => {
  const { verifyOtp, handleOtp ,final } = useContext(SigninContext);
  const [otp, setotp] = useState("");

  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        handleOtp(result)
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <Model style={customStyles} isOpen={verifyOtp}>
        <Style>
          <div onClick={()=>handleOtp()} className="cross_btn">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.667 2.27337L9.72698 1.33337L6.00032 5.06004L2.27365 1.33337L1.33365 2.27337L5.06032 6.00004L1.33365 9.72671L2.27365 10.6667L6.00032 6.94004L9.72698 10.6667L10.667 9.72671L6.94032 6.00004L10.667 2.27337Z"
                fill="#DCDCDC"
                stroke="#DCDCDC"
              />
            </svg>
          </div>
          <h1>Verify OTP</h1>
          <div className="verify_otp">
            <p>
              Enter otp Sent to <span>9876543121</span>
            </p>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.37333 4L8 4.62667L1.94667 10.6667H1.33333V10.0533L7.37333 4ZM9.77333 0C9.60667 0 9.43333 0.0666666 9.30667 0.193333L8.08667 1.41333L10.5867 3.91333L11.8067 2.69333C12.0667 2.43333 12.0667 2 11.8067 1.75333L10.2467 0.193333C10.1133 0.06 9.94667 0 9.77333 0ZM7.37333 2.12667L0 9.5V12H2.5L9.87333 4.62667L7.37333 2.12667Z"
                fill="#797979"
              />
            </svg>
          </div>
          <div className="time_input">
            <input onChange={(e)=>setotp(e.target.value)} placeholder="Enter otp here..." type="text" />
            <p>15 sec</p>
          </div>
          <p className="resend_otp">RESEND OTP</p>
          <button onClick={ValidateOtp} className="verify_btn">VERIFY OTP</button>
        </Style>
      </Model>
    </>
  );
};

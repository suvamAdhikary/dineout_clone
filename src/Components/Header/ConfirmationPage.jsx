import styled from "styled-components";

const Style = styled.div`
  .first {
    margin: auto;
    text-align: center;
    margin-top: 40px;
    width: 752px;
    height: 144px;
    background: red;
    border-radius: 4px;
    h1 {
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      padding-top: 32px;
      color: #333333;
    }
    p {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      color: #797979;
    }
  }
  .second {
    height: 154px;
    width: 752px;
    border-radius: 4px;
    margin: auto;
    background-color: red;
    margin-top: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-itmes:center;
    justify-content:center;
    row-gap: 20px;
    .heading {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      color: #333333;
    }
    div {
      display: flex;
      justify-content: space-between;
      p{
        color: #333333;
        font-size:16px;
      }
    }
    .bold {
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #797979;
    }
  }
  .third {
    height: 276px;
    width: 752px;
    border-radius: 4px;
    margin: auto;
    background-color: red;
    margin-top: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-itmes:center;
    justify-content:center;
    row-gap: 20px;
    .heading {
      font-weight: 600;
      font-size: 24px;
      color: #333333;
    }
    div {
      display: flex;
      justify-content: space-between;
      p{
        font-size: 16px;
line-height: 22px;
color: #333333;
      }
    }
  }
`;

export const ConfirmationPage = () => {
  return (
    <Style>
      <div className="first">
        <h1>The Green House</h1>
        <p>Salt Lake , East Kolkata , Kolkata</p>
      </div>
      <div className="second">
        <p className="heading">Guest Details</p>
        <div>
          <p className="bold">Guest Name:</p>
          <p>Masuda Begam</p>
        </div>
        <div>
          <p className="bold">Phone No:</p>
          <p>9874563210</p>
        </div>
      </div>
      <div className="third">
        <p className="heading">Booking Sumarry</p>
        <div>
          <p>Task Status Confirmed</p>
          <p>Your Reservation is confirmed !Happy Dining.</p>
        </div>
        <div>
          <p>Date & Time</p>
          <p>1St DEC 2021, 5 : 30 PM</p>
        </div>
        <div>
          <p>Guests</p>
          <p>Guests</p>
        </div>
        <div>
          <p>Name</p>
          <p>Dharmesh</p>
        </div>
        <div>
          <p>ID</p>
          <p>1234567896</p>
        </div>
      </div>
    </Style>
  );
};

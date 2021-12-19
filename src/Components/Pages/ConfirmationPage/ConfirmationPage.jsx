import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getUser } from "../../../Redux/Users/action";

const Style = styled.div`
  padding-bottom: 100px;
  padding-top:100px;
  .first {
    margin: auto;
    text-align: center;
    margin-top: 40px;
    width: 752px;
    height: 144px;
    background: white;
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
    margin-top: 20px;
    background: white;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-itmes: center;
    justify-content: center;
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
      p {
        color: #333333;
        font-size: 16px;
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
    background-color: white;
    margin-top: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-itmes: center;
    justify-content: center;
    row-gap: 20px;
    .heading {
      font-weight: 600;
      font-size: 24px;
      color: #333333;
    }
    div {
      display: flex;
      justify-content: space-between;
      p {
        font-size: 16px;
        line-height: 22px;
        color: #333333;
      }
    }
  }
`;


export const ConfirmationPage = () => {


  const dispatch = useDispatch();

  const { data } = useSelector((store) => store?.user.user)

  
  useEffect(() => {
    
    const userId = JSON.parse(localStorage.getItem('dineout-userId'));
    
    dispatch(getUser(userId))

  }, [dispatch])

  const { restaurantName, locality, city, guests, timeSlot, date, _id } = data.bookings;

  const { name, mobile } = data;

  return (
    <Style>
      <div className="first">
        <h1>{restaurantName}</h1>
        <p>{locality} , {city}</p>
      </div>
      <div className="second">
        <p className="heading">Guest Details</p>
        <div>
          <p className="bold">Guest Name:</p>
          <p>{name}</p>
        </div>
        <div>
          <p className="bold">Phone No:</p>
          <p>{mobile}</p>
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
          <p>{date}, {timeSlot}</p>
        </div>
        <div>
          <p>Guests</p>
          <p>{guests}</p>
        </div>
        <div>
          <p>Name</p>
          <p>{name}</p>
        </div>
        <div>
          <p>ID</p>
          <p>{_id}</p>
        </div>
      </div>
    </Style>
  );
};

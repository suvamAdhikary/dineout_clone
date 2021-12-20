
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
  // const [data, setData] = useState({})

  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((store) => store?.user.user)

  
  // const setdata = async (id) => {
  //   const { data :{item} } = await axios.get(`https://dineout-clone.herokuapp.com/users/${id}`);
  //   console.log(item);
  //   setData(item)
  // }

  const userId = JSON.parse(localStorage.getItem('dineout-userId'));
  useEffect(() => {
    setTimeout(() => {

      dispatch(getUser(userId))

    }, 1500);

    return {
      clearTimeout
    }
    
  //   // setdata(userId)
  //   // const { data }  getAUser()

  }, [userId, dispatch])
// console.log(data);
  // const { restaurantName, locality, city, guests, timeSlot, date, _id } = resdata?.bookings;

  // const { name, mobile } = resdata;
  console.log(data, loading, error);
  return ( loading ? <h1>Loading...</h1> : error ? <h1>Something went wrong...</h1> :
    <Style>
      <div className="first">
        <h1>{data?.bookings?.restaurantName}</h1>
        <p>{data?.bookings?.locality} , {data?.bookings?.city}</p>
      </div>
      <div className="second">
        <p className="heading">Guest Details</p>
        <div>
          <p className="bold">Guest Name:</p>
          <p>{data?.name}</p>
        </div>
        <div>
          <p className="bold">Phone No:</p>
          <p>{data?.mobile}</p>
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
          <p>{data?.bookings?.date}, {data?.bookings?.timeSlot}</p>
        </div>
        <div>
          <p>Guests</p>
          <p>{data?.bookings?.guests}</p>
        </div>
        <div>
          <p>Name</p>
          <p>{data?.name}</p>
        </div>
        <div>
          <p>ID</p>
          <p>{data?.bookings?._id}</p>
        </div>
      </div>
    </Style>
  );
};

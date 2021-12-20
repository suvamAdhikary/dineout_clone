import styled from "styled-components";
import Path from "./Components/Path";
import directionArrow from "./Assets/direction.svg";
import SubMenu from "./Components/SubMenu";
import DineoutPay from "./Components/DineoutPay";
import FoodMenu from "./Components/FoodMenu";
import AboutUs from "./Components/AboutUs";
import l1 from "./Assets/Explore more restaurants.svg";
import l2 from "./Assets/missingInfo.svg";
import l3 from "./Assets/ratings.svg";
import l4 from "./Assets/Dineout pay text.svg";
import fassaiImg from "./Assets/fassai.svg";
import fassaiNoImg from "./Assets/fassaiNo.svg";
import doOfferImg from "./Assets/Dineout Pay Offers.svg";
import calIcon from "./Assets/calIcon.svg";
import noOfrImg from "./Assets/No offer.svg";
import downArrow from "./Assets/downArrowHead.svg";
import addImg from "./Assets/add.svg";
import removeImg from "./Assets/remove.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getARestaurant, updateUser } from "../../../Utils/Axios";
import { ConfirmReservation } from "../../Header/ConfirmReservation";
import TimeSlots from "./Components/TimeSlots";
import Footer from "../../Footer/Footer";
import { ScrollNavbar } from "../../Header/ScrollNavbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Utils/Firebase";
import Calender from "./Components/Calender";
import { useContext } from "react";
import { SigninContext } from "../../../Context/SignInContext";


const Wrapper = styled.div`
  width: 100vw;
  padding: 26px 10.56% 48px;
  background-color: #e5e5e5;
  color: #797979;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  /* width: 79vw; */
  display: flex;
  justify-content: space-between;
  gap: 1.143vw;
  margin: 30px 0px 24px;
`;

const Left = styled.div`
  width: 52.2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  > div {
    background-color: #ffffff;
    border-radius: 4px;
  }
`;
const Right = styled.div`
  width: 25.56vw;
  background-color: #ffffff;
  height: max-content !important;
  border-radius: 4px;
  > div {
    &:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #333333;
      color: #ffffff;
      height: 74px;
      border-radius: 4px 4px 0 0;

      > p {
        font-size: 18px;
        line-height: 28px;
        font-weight: 700;
      }
    }
  }

  .scroll__parent {
    max-height: 456px;
    overflow-y: scroll;
  }

  .reservation__offerAndTime {
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > div > img {
      margin: 16px 16px 11px;
    }

    > div {
      &:nth-child(2) {
        margin: 0 23px 16px;
        display: flex;
        align-items: center;

        > span {
          margin: 0 5px;
          padding-bottom: 2px;
        }
        > p,
        > span {
          color: #333333;
          font-size: 14px;
          line-height: 20px;
          font-weight: 700;
        }
      }
    }
  }

  .calendar__head--parent {
    display: flex;
    flex-direction: column;
    padding: 8px 24px 8px 16px;

    > p {
      color: #333333;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }

    .calendar__head {
      margin: 8px 0;
      height: 96px;
      display: flex;
      flex-direction: row;
      border-radius: 4px;
      box-shadow: 2px -1px 16px #00000028;

      /* Dharmesh */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      /* Dharmesh */

      .calenderIcon__parent {
        background-color: #3595ff;
        display: flex;
        flex-direction: column;
        width: 60px !important;
        padding: 17px 0 15px;
        align-items: center;
        gap: 9px;
        border-radius: 4px 0 0 4px;

        > p {
          background-color: #0b5b8f;
          color: #ffffff;
          font-size: 12px;
          line-height: 16px;
          font-weight: 400;
          width: max-content;
          padding: 2px 8px;
        }
      }

      .calender__slide--parent {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .calendar__dayes--parent {
        /* object-fit: contain; */
        display: flex;
        flex-direction: row;
        gap: 7px;
        padding: 20px;

      }
    }
  }

  .default__time {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 16px 0;
    > p > b {
      color: #333333;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;

      > p {
        &:nth-child(1) {
          color: #797979;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
        }

        &:nth-child(2) {
          background-color: #3595ff;
          width: 85px;
          height: 28px;
          color: #ffffff;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          padding: 6px 12px;
          border-radius: 4px;
          margin: 0 16px;
        }
      }
      > div {
        /* padding: 7.51px 5.35px; */
      }
    }
  }

  .noOffer__parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 16px;

    > div {
      &:nth-child(2) {
        text-align: center;
        padding: 16px;

        > p {
          color: #797979;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
        }
      }
    }
  }

  .select__guest--parent {
    padding: 16px 24px 16px 16px;
    display: flex;
    flex-direction: column;

    > h4 {
      color: #333333;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }

    > p {
      margin: 8px 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #797979;
    }

    .guest__count--parent {
      display: flex;
      padding: 10px;
      background-color: #f3f3f3;
      border-radius: 4px;
      align-items: center;
      margin: 1px 0;

      > h4 {
        font-size: 14px;
        line-height: 20px;
        font-weight: 700;
        color: #333333;
        margin: 0 12px;
      }
      > div {
        margin: 0 14px;
      }

      > button {
        border: none;
      }
    }

    .addGuest__special {
      display: flex;
      align-items: center;
      margin: 15px 0;

      > span {
        background-color: #f3f3f3;
        min-height: 18px;
        min-width: 25px;
        /* padding: 6px; */
        /* border-radius: 9px; */
        border-radius: 15px;
        text-align: center;
      }

      > p {
        margin: 0 6px;
        color: #797979;
        font-size: 12px;
        line-height: 16px;
        font-weight: 400;
      }
    }
  }
  .continue__parent {
    color: #ffffff;
    display: flex;
    background-color: white;
    height: 65px;
    /* flex-direction: column; */
    align-items: center;
    justifycontent: center;
    padding: 10px;

    button {
      height: 46px;
      color: #ffffff;
      border:none;
      background: #FF645A;
      width: 336px;
      border-radius: 4px;
      padding: 12px, 32px, 12px, 32px;
      :hover{
        background: #DC4F4A;
      }
    }
  }
`;

const Details = styled.div`
  .restaurant__mainImg--parent {
    width: 100%;
    height:430px;
    overflow: hidden;
    .leftArrow{
      width:80px;
    height:80px;
    position:relative;
    top:156px;
    left:-30px;
    border-radius:50px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #333333;
  }
  .rightArrow{
    width:80px;
    height:80px;
    position:relative;
    top:80px;
    left:660px;
    border-radius:50px;
    background: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    > img {
      width: 100%;
      position: static;
      margin-top:-160px;
      border-radius: 4px 4px 0 0;
    }
  }


  .restaurant__details {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    position: relative;
  }

  .restaurant__details--left {
    > h2 {
      color: #333333;
      font-weight: 700;
      line-height: 30px;
      font-size: 24px;
    }
  }

  .restaurant__details--sections {
    display: flex;
    flex-direction: row;
    margin-top: 16px;
    align-items: center;

    > p,
    > span {
      font-size: 14px;
      weight: 400;
      line-height: 20px;
    }

    > span {
      margin: 0 5px;
    }

    .restaurant__timing {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 7px;

      > span {
        &:nth-child(1) {
          color: #3595ff;
        }
      }
      > img {
        height: 9.3px;
        weight: 5.49px;
      }
    }
  }

  .direction {
    display: flex;
    flex-direction: row;
    color: #3595ff;
    line-height: 20px;
    font-size: 14px;
    font-weight: 700;
    margin-left: 7px;
  }

  .restaurant__details--right {
    > .restaurant__details--sections {
      background-color: #51ba64;
      height: 46px;
      width: 64px;
      color: #ffffff;
      font-weight: 700;
      font-size: 20px;
      line-height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0px;
      right: 16px;
      border-radius: 2px;

      > p,
      > span {
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
      }
      > p {
        margin-left: 10px;
      }
      > span {
        margin-right: 10px;
      }
    }

    > div {
      &:nth-child(2) {
        position: absolute;
        top: 94px;
        right: 16px;
        color: #3595ff;
        text-decoration: underline dotted #3595ff;
        text-underline-position: under;
        text-decoration-thickness: 2px;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      }
    }
  }
`;

const Fssai = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 48px;

  > img {
    &:nth-child(1) {
      height: 36px;
      weight: 74px;
    }
  }
`;

const RestaurantPage = () => {
  const [restaurantData, setRestaurantdata] = useState({});
  const [img, setImg] = useState([]);
  const [menuImg, setMenuImg] = useState([]);
  const [guestCount, setGuestCount] = useState(0);
  const [timeStatus, setTimeStatus] = useState("lunch");
  const [bookTime, setBookTime] = useState("");
  const [bookDate, setBookDate] = useState("");
  const [dineoutUserId, setDineoutUserId] = useState("");


  const restaurantId = useParams();

  const getRestaurantData = async ({ id }) => {
    try {
      const {
        data: { item },
      } = await getARestaurant(id);

      setRestaurantdata(item);
      setImg(item?.img);
      localStorage.setItem("dineout__miniImg", JSON.stringify(item?.img));
      setMenuImg(item?.menuImg);
    } catch (err) {
      console.log(err);
    }
  };

  let userId = JSON.parse(localStorage.getItem('dineout-userId'));
  useEffect(() => {
    setDineoutUserId(userId)

    getRestaurantData(restaurantId);
  }, [userId,restaurantId]);

  const { name, costForTwo, locality, city, rating, reviews, about } =
    restaurantData;

  const {
    northIndian,
    chinese,
    continental,
    fastFood,
    italian,
    indian,
    seafood,
    thai,
    southeastAsian,
    bengali,
  } = restaurantData;

  document.title = `Dineout - ${restaurantData.name}`;

  const { handleConfirmation, handleSignupModel } = useContext(SigninContext);

  const [user] = useAuthState(auth);

  const handleModel = () => {
    if (user) {

      handleConfirmation();
    } else {
      handleSignupModel();
    }
  };

  const handleReservation = async () => {
    
    const payload = {
      guests: guestCount,
      restaurantName: name,
      city: city,
      locality: locality,
      timeSlot: bookTime,
      date: bookDate,
      restaurantId: restaurantId.id
    }

      await updateUser(dineoutUserId, {bookings: payload})

  }

  return (
    <>
      <ScrollNavbar />
      <ConfirmReservation
        handleReservation={handleReservation}
        name={name}
        city={city}
        guest={guestCount}
        bookDate={bookDate}
        bookTime={bookTime}
      />
      <Wrapper>
        <Path city={city} locality={locality} resName={name} />
        <Main>
          <Left>
            <Details>
              <div className="restaurant__mainImg--parent">
                <div className="leftArrow">
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4833 1.18321C11.6378 1.3374 11.7604 1.52054 11.844 1.72217C11.9277 1.92379 11.9707 2.13993 11.9707 2.35821C11.9707 2.57649 11.9277 2.79263 11.844 2.99425C11.7604 3.19587 11.6378 3.37902 11.4833 3.53321L5.01663 9.99987L11.4833 16.4665C11.7949 16.7782 11.97 17.2008 11.97 17.6415C11.97 18.0822 11.7949 18.5049 11.4833 18.8165C11.1717 19.1282 10.749 19.3032 10.3083 19.3032C9.86759 19.3032 9.44493 19.1282 9.1333 18.8165L1.4833 11.1665C1.32879 11.0124 1.20621 10.8292 1.12258 10.6276C1.03894 10.426 0.995893 10.2098 0.995893 9.99154C0.995893 9.77326 1.03894 9.55712 1.12258 9.3555C1.20621 9.15388 1.32879 8.97073 1.4833 8.81654L9.1333 1.16654C9.76663 0.533207 10.8333 0.533207 11.4833 1.18321Z" fill="white"/>
</svg>

                </div>
                <div className="rightArrow">
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.516704 1.18321C0.362198 1.3374 0.239619 1.52054 0.155983 1.72217C0.0723472 1.92379 0.0292969 2.13993 0.0292969 2.35821C0.0292969 2.57649 0.0723472 2.79263 0.155983 2.99425C0.239619 3.19587 0.362198 3.37902 0.516704 3.53321L6.98337 9.99987L0.516704 16.4665C0.205075 16.7782 0.0300026 17.2008 0.0300026 17.6415C0.0300026 18.0822 0.205075 18.5049 0.516704 18.8165C0.828333 19.1282 1.25099 19.3032 1.6917 19.3032C2.13241 19.3032 2.55507 19.1282 2.8667 18.8165L10.5167 11.1665C10.6712 11.0124 10.7938 10.8292 10.8774 10.6276C10.9611 10.426 11.0041 10.2098 11.0041 9.99154C11.0041 9.77326 10.9611 9.55712 10.8774 9.3555C10.7938 9.15388 10.6712 8.97073 10.5167 8.81654L2.8667 1.16654C2.23337 0.533207 1.1667 0.533207 0.516704 1.18321Z" fill="white"/>
</svg>

                </div>
                <img src={img[0]} alt="restaurant" />
              </div>
              <div className="restaurant__details">
                <div className="restaurant__details--left">
                  <h2>{name}</h2>
                  <div className="restaurant__details--sections">
                    <p>&#8377; {costForTwo} for 2</p>
                    <span>&#124;</span>
                    <p>
                      {northIndian ? "North Indian," : null}{" "}
                      {chinese ? "Chinese," : null}{" "}
                      {continental ? "Continental," : null}{" "}
                      {fastFood ? "Fast Food," : null}{" "}
                      {italian ? "Italian" : null} {indian ? "Indian" : null}{" "}
                      {seafood ? "Seafood," : null} {thai ? "Thai," : null}{" "}
                      {southeastAsian ? "South East Asian" : null}{" "}
                      {bengali ? "Bengali" : null}
                    </p>
                  </div>
                  <div className="restaurant__details--sections">
                    <p>{locality}</p>
                    <span>&#124;</span>
                    <p>{city}</p>
                    <span>&#124;</span>
                    <div className="direction">
                      <img src={directionArrow} alt="directionArrow" />
                      <p>Get Direction</p>
                    </div>
                  </div>
                  <div className="restaurant__details--sections">
                    <p className="restaurant__timing">
                      Time: 11:00 AM to 10:30 PM
                      <span>(Open Now)</span>
                      <img src={downArrow} alt="downArrow" />
                    </p>
                  </div>
                </div>
                <div className="restaurant__details--right">
                  <div className="restaurant__details--sections">
                    <p>{rating}</p>
                    <span>&#9733;</span>
                  </div>
                  <div>
                    <p>{reviews} reviews</p>
                  </div>
                </div>
              </div>
            </Details>
            <SubMenu />
            <DineoutPay />
            <FoodMenu menuUrl={menuImg} />
            <AboutUs data={about} />
            <img src={l1} alt="l1" />
            <img src={l2} alt="l2" />
            <img src={l3} alt="l3" />
            <img src={l4} alt="l4" />
          </Left>
          <Right>
            <div>
              <p>Make a Reservation</p>
            </div>
            <div className="scroll__parent">
              <div className="reservation__offerAndTime">
                <div>
                  <img src={doOfferImg} alt="doOfferImg" />
                </div>
                <div>
                  <b>2021-12-16</b>
                  <span>&#124;</span>
                  <b>2:00 PM</b>
                </div>
              </div>
              <div className="calendar__head--parent">
                <p>Select Date</p>
                <div className="calendar__head">
                  <div className="calenderIcon__parent">
                    <p>DEC</p>
                    <img src={calIcon} alt="calIcon" />
                  </div>
                  <div className="calender__slide--parent">
                    <Calender setBookDate={setBookDate} bookDate={bookDate} />
                  </div>
                </div>
                <div className="default__time">
                  <p>
                    <b>Time</b>
                  </p>
                  <div>
                    <p>Choose an available time slot</p>
                    {bookTime.length ? (
                      <>
                        <p>{bookTime}</p>
                        <div onClick={() => setBookTime("")}>
                          <img src={downArrow} alt="downarrow" />
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
                {!bookTime.length ? (
                  <TimeSlots
                    timeStatus={timeStatus}
                    setTimeStatus={setTimeStatus}
                    setBookTime={setBookTime}
                  />
                ) : null}
              </div>
              {bookTime.length ? (
                <div className="noOffer__parent">
                  <div>
                    <img src={noOfrImg} alt="noofferimg" />
                  </div>
                  <div>
                    <p>
                      Sorry there are no Offers available for these timings.
                      Select guests to continue to reserve a table.
                    </p>
                  </div>
                </div>
              ) : null}
              <div className="select__guest--parent">
                <h4>Select Guest/s</h4>
                <p>Choose the number of guests going</p>
                <div className="guest__count--parent">
                  <h4>Guests:</h4>
                  <button
                    onClick={() => setGuestCount((n) => n - 1)}
                    disabled={guestCount < 1}
                  >
                    <img src={removeImg} alt="removeImg" />
                  </button>
                  <h4>{guestCount}</h4>
                  <button
                    onClick={() => setGuestCount((n) => n + 1)}
                    disabled={guestCount > 19}
                  >
                    <img src={addImg} alt="addImg" />
                  </button>
                </div>
                <div className="addGuest__special">
                  <span>+</span>
                  <p>Any special request (Optional)</p>
                </div>
              </div>
            </div>
            {guestCount > 0 ? (
              <div className="continue__parent">
                <button onClick={() => handleModel()}>Continue</button>
              </div>
            ) : null}
          </Right>
        </Main>
        <Fssai>
          <img src={fassaiImg} alt="fassai" />
          <img src={fassaiNoImg} alt="fassaino" />
        </Fssai>
      </Wrapper>
      <Footer />
    </>
  );
};

export default RestaurantPage;

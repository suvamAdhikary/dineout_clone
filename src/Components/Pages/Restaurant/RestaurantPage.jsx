import styled from "styled-components";
import Path from "./Components/Path";
import directionArrow from './Assets/direction.svg';
import SubMenu from './Components/SubMenu';
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
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../Redux/Users/action";
import { Link, useParams } from "react-router-dom";
import { getARestaurant } from "../../../Utils/Axios";
import CalenderComp from "./Components/Calender";
import TimeSlots from "./Components/TimeSlots";
import Footer from "../../Footer/Footer";
import { ScrollNavbar } from "../../Header/ScrollNavbar";
import Calender from "./Components/Calender";


const Wrapper = styled.div`
    width: 100vw;
    padding: 26px 10.56% 48px;
    background-color: #E5E5E5;
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
        background-color: #FFFFFF;
        border-radius: 4px;
    }
`;
const Right = styled.div`
    width: 25.56vw;
    background-color: #FFFFFF;
    height: max-content !important;
    border-radius: 4px;


    > div {
        &:nth-child(1){
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #333333;
            color: #FFFFFF;
            height: 74px;
            border-radius: 4px 4px 0 0;

            > p{
                font-size: 18px;
                line-height: 28px;
                font-weight: 700;
            }
        }
    }

    .scroll__parent{
        max-height: 456px;
        overflow-y: scroll;
    }

    .reservation__offerAndTime{
        background-color: #F8F8F8;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        > div > img {
            margin: 16px 16px 11px;
        }

        > div {
            &:nth-child(2){
                margin: 0 23px 16px;
                display: flex;
                align-items: center;

                > span {
                    margin: 0 5px;
                    padding-bottom: 2px;
                }
                > p, > span {
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

        .calendar__head{
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
                background-color: #3595FF;
                display: flex;
                flex-direction: column;
                width: 60px !important;
                padding: 17px 0 15px;
                align-items: center;
                gap: 9px;
                border-radius: 4px 0 0 4px;

                > p {
                    background-color: #0B5B8F;
                    color: #FFFFFF;
                    font-size: 12px;
                    line-height: 16px;
                    font-weight: 400;
                    width: max-content;
                    padding: 2px 8px;
                }

            }
            
            .calender__slide--parent{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .calendar__dayes--parent{
                /* object-fit: contain; */
                display: flex;
                flex-direction: row;
                gap: 7px;
                padding: 20px;
                /* width: 229px; */
                /* overflow: hidden; */
                /* flex-wrap: nowrap; */
                /* position: relative; */
                /* background-color: red; */
                /* color: white; */
                /* white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;  */

                /* .calender__dayes{
                    height: 52px;
                    width: 37.5px;

                    > p {
                        color: #797979;
                        font-size: 12px;
                        line-height: 16px;

                        &:nth-child(1){
                            font-weight: 400;
                        }
                        &:nth-child(2){
                            font-weight: 700;
                        }
                    }
                } */
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
                &:nth-child(1){
                    color: #797979;
                    font-size: 14px;
                    line-height: 20px;
                    font-weight: 400;
                }

                &:nth-child(2){
                    background-color: #3595FF;
                    width: 75px;
                    height: 28px;
                    color: #FFFFFF;
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

            &:nth-child(2){
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

    .select__guest--parent{
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

        .guest__count--parent{
            display: flex;
            padding: 10px;
            background-color: #F3F3F3;
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

        .addGuest__special{
            display: flex;
            align-items: center;
            margin: 15px 0;

            > span {
                background-color: #F3F3F3;
                min-height: 18px;
                min-width: 18px; 
                /* padding: 6px; */
                /* border-radius: 9px; */
                border-radius: 9px;
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
    .continue__parent{
        background-color: #FF645A;
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        align-items: center;

        > a > button {
            margin: 12px 0;
            border: none;
            color: #FFFFFF;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            background-color: inherit;
            
        }
    }
`;

const Details = styled.div`


    .restaurant__mainImg--parent{
        width: 100%;

        > img {
            width: 100%;
            border-radius: 4px 4px 0 0;
        }
    }

    .restaurant__details{
        display: flex;
        justify-content: space-between;
        padding: 16px;
        position: relative;
    }

    
    .restaurant__details--left{
        > h2 {
            color: #333333;
            font-weight: 700;
            line-height: 30px;
            font-size: 24px;
        }
    }
    
    .restaurant__details--sections{
        display: flex;
        flex-direction: row;
        margin-top: 16px;
        align-items: center;

        > p, > span {
            font-size: 14px;
            weight: 400;
            line-height: 20px;
        }

        > span {
            margin: 0 5px;
        }

        .restaurant__timing{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 7px;

            > span {
                &:nth-child(1) {
                    color: #3595FF;
                }
            }
            > img {
                height: 9.3px;
                weight: 5.49px;
            }
        }
    }

    .direction{
        display: flex;
        flex-direction: row;
        color: #3595FF;
        line-height: 20px;
        font-size: 14px;
        font-weight: 700;
        margin-left: 7px;
    }
    
    .restaurant__details--right{

        > .restaurant__details--sections{
            background-color: #51BA64;
            height: 46px;
            width: 64px;
            color: #FFFFFF;
            font-weight: 700;
            font-size: 22px;
            line-height: 26px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0px;
            right: 16px;
            border-radius: 2px;

            > p, > span {
                font-weight: 700;
                font-size: 22px;
                line-height: 26px;
            }
            > p {
                margin-left: 10px;
            }
            >span {
                margin-right: 10px;
            }
        }

        > div {
            &:nth-child(2){
                position: absolute;
                top: 94px;
                right: 16px;
                color: #3595FF;
                text-decoration: underline dotted #3595FF;
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
        &:nth-child(1){
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

    const restaurantId = useParams();

    const dispatch = useDispatch();

    // const data = useSelector((state) => state);

    // dispatch(getRestaurants())
    // dispatch(getUser('61b8d36a6c6b3bb63911d300'))

    const getRestaurantData = async ({id}) => {

        try {
            
            const { data: {item} } = await getARestaurant(id);
            
            setRestaurantdata(item);
            setImg(item?.img);
            setMenuImg(item?.menuImg);
            
        } catch (err) {
            console.log(err);
        }
    }
    
    
    
    useEffect(() => {
        
        getRestaurantData(restaurantId);
        
        
        
    }, [restaurantId]);
    
    console.log(restaurantData);
    
    const { name, costForTwo, locality, city, rating, reviews, about } = restaurantData;
    
    const { northIndian, chinese, continental, fastFood, italian, indian, seafood, thai, southeastAsian, bengali } = restaurantData;
    document.title = `Dineout - ${restaurantData.name}`;

    return(<>
        <ScrollNavbar />
        <Wrapper>
            <Path city={city} locality={locality} resName={name} />
            <Main>
            <Left>
                <Details>
                    <div className="restaurant__mainImg--parent">
                        <img src={img[0]} alt="restaurant" />
                    </div>
                    <div className="restaurant__details">
                        <div className="restaurant__details--left">
                            <h2>{name}</h2>
                            <div className="restaurant__details--sections">
                                <p>&#8377; {costForTwo} for 2</p>
                                <span>&#124;</span>
                                <p>
                                    {northIndian ? 'North Indian,' : null}
                                    {' '}
                                    {chinese ? 'Chinese,' : null}
                                    {' '}
                                    {continental ? 'Continental,' : null}
                                    {' '}
                                    {fastFood ? 'Fast Food,' : null}
                                    {' '}
                                    {italian ? 'Italian' : null}
                                    {' '}
                                    {indian ? 'Indian' : null}
                                    {' '}
                                    {seafood ? 'Seafood,' : null}
                                    {' '}
                                    {thai ? 'Thai,' : null}
                                    {' '}
                                    {southeastAsian ? 'South East Asian' : null}
                                    {" "}
                                    {bengali ? 'Bengali' : null}
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
                                    {/* <span>&#8964;</span> */}
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
                            {/* <div className="calendar__dayes--parent">
                                <div className="calender__dayes">
                                    <p>Today</p>
                                    <p>16</p>
                                </div>
                                <div className="calender__dayes">
                                    <p>Wed</p>
                                    <p>17</p>
                                </div>
                                <div className="calender__dayes">
                                    <p>Thu</p>
                                    <p>18</p>
                                </div>
                                <div className="calender__dayes">
                                    <p>Fri</p>
                                    <p>19</p>
                                </div>
                                <div className="calender__dayes">
                                    <p>Sat</p>
                                    <p>20</p>
                                </div>
                                <div className="calender__dayes">
                                    <p>Sun</p>
                                    <p>21</p>
                                </div>
                                <div className="calender__dayes">
                                    <p>Mon</p>
                                    <p>22</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="default__time">
                        <p><b>Time</b></p>
                        <div>
                            <p>Choose an available time slot</p>
                            {
                                bookTime.length ?
                                <>
                                <p>{bookTime}</p>
                                <div onClick={() => setBookTime("")}>
                                    <img src={downArrow} alt="downarrow" />
                                    {/* <span>&#8964;</span> */}
                                </div>
                                </> : null
                            }
                        </div>
                    </div>
                    {
                        !bookTime.length ?
                        <TimeSlots timeStatus={timeStatus} setTimeStatus={setTimeStatus} setBookTime={setBookTime} />
                        : null
                    }
                </div>
                {
                    bookTime.length ?
                    <div className="noOffer__parent">
                    <div>
                        <img src={noOfrImg} alt="noofferimg" />
                    </div>
                    <div>
                        <p>
                            Sorry there are no Offers available for these timings. Select guests to continue to reserve a table.
                        </p>
                    </div>
                    </div>
                    : null
                }
                <div className="select__guest--parent">
                    <h4>Select Guest/s</h4>
                    <p>Choose the number of guests going</p>
                    <div className="guest__count--parent">
                        <h4>Guests:</h4>
                        <button onClick={() => setGuestCount(n => n - 1)} disabled={guestCount < 1} >
                            <img src={removeImg} alt="removeImg" />
                        </button>
                        <h4>{guestCount}</h4>
                        <button onClick={() => setGuestCount(n => n + 1)} disabled={guestCount > 19} >
                            <img src={addImg} alt="addImg" />
                        </button>
                    </div>
                    <div className="addGuest__special">
                        <span>+</span>
                        <p>Any special request (Optional)</p>
                    </div>
                </div>
                </div>
                    {
                        guestCount > 0 ?
                        <div className="continue__parent">
                        <Link to="/confirm">
                            <button>
                                Continue
                            </button>
                        </Link>
                        </div> :
                        null
                    }
            </Right>
            </Main>
            <Fssai>
                <img src={fassaiImg} alt="fassai" />
                <img src={fassaiNoImg} alt="fassaino" />
            </Fssai>
        </Wrapper>
        <Footer />
    </>)

}

export default RestaurantPage;
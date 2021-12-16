import styled from "styled-components";
import Path from "./Components/Path";
import DemoImg from './Assets/image17.png';
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

const Wrapper = styled.div`
    background-color: #E5E5E5;
    display: flex;
    
`;

const Left = styled.div`

`;
const Right = styled.div`

`;

const Details = styled.div`


    .restaurant__details{
        display: flex;
    }

    .restaurant__details--sections, .direction{
        display: flex;
        flex-direction: row;
    }
`;

const RestaurantPage = () => {

    return(<>
        <Wrapper>
            <Left>
                <Path />
                <Details>
                    <div className="restaurant__mainImg--parent">
                        <img src={DemoImg} alt="restaurant" />
                    </div>
                    <div className="restaurant__details">
                        <div className="restaurant__details--left">
                            <h2>The Green House</h2>
                            <div className="restaurant__details--sections">
                                <p>&#8377; 1,000 for 2</p>
                                <span>&#124;</span>
                                <p>Italian, Continental</p>
                            </div>
                            <div className="restaurant__details--sections">
                                <p>Salt Lake</p>
                                <span>&#124;</span>
                                <p>Kolkata</p>
                                <span>&#124;</span>
                                <div className="direction">
                                    <img src={directionArrow} alt="directionArrow" />
                                    <p>Get Direction</p>
                                </div>
                            </div>
                            <div className="restaurant__details--sections">

                            </div>
                            <div className="restaurant__details--right">
                                <p>Time: 11:00 AM to 10:30 PM <span>(Open Now)</span> <span>&#8964;</span></p>
                            </div>
                        </div>
                        <div className="restaurant__details--right">
                            <div className="restaurant__details--sections">
                                <p>4</p>
                                <span>&#9733;</span>
                            </div>
                            <div>
                                <p>21 reviews</p>
                            </div>
                        </div>
                    </div>
                </Details>
                <SubMenu />
                <DineoutPay />
                <FoodMenu />
                <AboutUs />
                <img src={l1} alt="l1" />
                <img src={l2} alt="l2" />
                <img src={l3} alt="l3" />
                <img src={l4} alt="l4" />
                <div>
                    <img src={fassaiImg} alt="fassai" />
                    <img src={fassaiNoImg} alt="fassaino" />
                </div>
            </Left>
            <Right>
                <div>
                    <p>Make a Reservation</p>
                </div>
                <div>
                    <img src={doOfferImg} alt="doOfferImg" />
                </div>
                <div>
                    <b>2021-12-16</b>
                    <span>&#124;</span>
                    <b>2:00 PM</b>
                </div>
                <div>
                    <p>Select Date</p>
                    <div className="calendar__head">
                        <div>
                            <p>DEC</p>
                            <img src={calIcon} alt="calIcon" />
                        </div>
                        <div>
                            <div>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p><b>Time</b></p>
                    <div>
                        <p>Choose an available time slot</p>
                        <p>2:00 PM</p>
                        <span>&#8964;</span>
                    </div>
                    <div>
                        <img src={noOfrImg} alt="noofferimg" />
                    </div>
                    <div>
                        <p>
                            Sorry there are no Offers available for these timings. Select guests to continue to reserve a table.
                        </p>
                    </div>
                </div>
            </Right>
        </Wrapper>
    </>)

}

export default RestaurantPage;
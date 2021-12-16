import styled from "styled-components";
import cuisinImg from "../Assets/cuisine.svg";
import typeImg from "../Assets/type.svg";
import bestsellingImg from "../Assets/bestselling.svg";
import avgcostImg from "../Assets/avgcost.svg";
import facilityImg from "../Assets/facilities.svg";
import smokingImg from "../Assets/smoking.svg";
import airImg from "../Assets/snowflake.svg";
import homeImg from "../Assets/homedelivery.svg";
import parkingImg from "../Assets/parking.svg";
import takeawayImg from "../Assets/takeaway.svg";
import cardImg from "../Assets/card.svg";
import outdoorImg from "../Assets/outdoor.svg";
import walletImg from "../Assets/wallet.svg";

const Wrapper = styled.div`

`;
const DetailsWrapper = styled.div`

`;

const MiniCard = styled.div`

`;


const AboutUs = () => {

    return(<>
        <Wrapper>
            <h4>About Us</h4>
            <p>The Green House is a nice, elegant cafe with a subtle ambiance and comfortable seating. The menu incl...</p>
            <span>Read more</span>
            <DetailsWrapper>
                <div className="details__sections">
                    <img src={cuisinImg} alt="cuisinImg" />
                    <div className="details__section--right">
                        <h4>CUISINE</h4>
                        <p>Italian, Continental</p>
                    </div>
                </div>
                <div className="details__sections">
                    <img src={typeImg} alt="typeImg" />
                    <div className="details__section--right">
                        <h4>TYPE</h4>
                        <p>Cafe, Dineout Pay, Safe To Eat Out, Kolkata Operational, Hottest in Town</p>
                    </div>
                </div>
                <div className="details__sections">
                    <img src={bestsellingImg} alt="bestsellingImg" />
                    <div className="details__section--right">
                        <h4>BESTSELLING ITEMS</h4>
                        <p>Ceaser Salad, Pizza, Barbeque Chicken</p>
                    </div>
                </div>
                <div className="details__sections">
                    <img src={avgcostImg} alt="avgcostImg" />
                    <div className="details__section--right">
                        <h4>AVERAGE COST</h4>
                        <p>1,000 for Two People</p>
                    </div>
                </div>
                <div className="details__sections--last">
                    <img src={facilityImg} alt="facilityImg" />
                    <div className="details__section--last">
                        <MiniCard>
                            <img src={smokingImg} alt="smokingImg" />
                            <p>Smoking Area</p>
                        </MiniCard>
                        <MiniCard>
                            <img src={airImg} alt="airImg" />
                            <p>Air Conditioned</p>
                        </MiniCard>
                        <MiniCard>
                            <img src={homeImg} alt="homeImg" />
                            <p>Home Delivery</p>
                        </MiniCard>
                        <MiniCard>
                            <img src={parkingImg} alt="parkingImg" />
                            <p>Parking</p>
                        </MiniCard>
                        <MiniCard>
                            <img src={takeawayImg} alt="takeawayImg" />
                            <p>Take Away</p>
                        </MiniCard>
                        <MiniCard>
                            <img src={cardImg} alt="cardImg" />
                            <p>Cards Accepted</p>
                        </MiniCard>
                        <MiniCard>
                            <img src={outdoorImg} alt="outdoorImg" />
                            <p>Outdoor Seating</p>
                        </MiniCard>
                        <MiniCard>
                            <img src={walletImg} alt="walletImg" />
                            <p>Wallet Accepted</p>
                        </MiniCard>
                    </div>
                </div>
            </DetailsWrapper>
        </Wrapper>    
    </>)
}

export default AboutUs;
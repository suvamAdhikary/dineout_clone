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
    padding: 16px 24px 52px;

    > h4 {
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: #333333;
        margin-bottom: 16px;
    }

    > p {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
    }

    > span {
        font-weight: 700;
    }
`;
const DetailsWrapper = styled.div`
    margin-top: 24px;

    .details__sections{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;

        > img {
            margin-bottom: 28px;
        }

        .details__section--right{
            display: flex;
            flex-direction: column;
            height: 40px;
            margin-bottom: 18px;
            font-size: 14px;
            line-height: 20px;

            > h4 {
                color: #AC8E48;
                font-weight: 700;
                font-size: 14px;
                line-height: 20px;
            }

            > p {
                font-weight: 400;
                color: #
            }
        }
    }


    .details__sections--last {
        display: flex;
        flex-direction: column;
        
        > div {
            &:nth-child(1){
                display: flex;
                gap: 12px;

                > h4 {
                    font-size: 14px;
                    line-height: 20px;
                    color: #AC8E48;
                    font-weight: 700 !important;
                }
            }
        }


        .lastDetails__section--cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            padding-left: 50px;
        }
    }
`;

const MiniCard = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;

    > p {
        font-size: 14px;
        line-height: 20px;
        color: #333333;
        font-weight: 400;
        margin-left: 8px;
    }
`;


const AboutUs = ({data}) => {

    return(<>
        <Wrapper>
            <h4>About Us</h4>
            <p>{data ? `${data}...` : null}</p>
            <span>{data ? 'Read more' : null}</span>
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
                    <div>
                        <img src={facilityImg} alt="facilityImg" />
                        <h4>FACILITIES & FEATURES</h4>
                    </div>
                    <div className="lastDetails__section--cards">
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
import styled from "styled-components";
import menuImg from "../Assets/menu.png";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 24px 24px;
    position: relative;


    > h4 {
        font-size: 18px;
        line-height: 28px;
        font-weight: 700;
        color: #333333;
    }

    > div {

        > img {
            width: 136px;
            height: 120px;
            margin-top: 16px;
        }

        > div {
            background-color: #333333;
            color: #FFFFFF;
            width: 136px;
            padding: 4px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            z-index: 3;
            bottom: 16px;

            > p {
                font-size: 12px;
                line-height: 16px;
                font-weight: 700;
            }
        }
    }
`;

const FoodMenu = () => {
 
    return (<>
        <Wrapper>
            <h4>Menu</h4>
            <div className="foodMenu__parent">
                <img src={menuImg} alt="menuImg" />
                <div>
                    <p>Menu(19)</p>
                </div>
            </div>
        </Wrapper>
    </>)
}

export default FoodMenu;
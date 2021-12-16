import styled from "styled-components";
import menuImg from "../Assets/menu.png";

const Wrapper = styled.div`

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
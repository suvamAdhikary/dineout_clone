import styled from "styled-components";
import arrHeadImg from "../Assets/rightArrowHead.svg";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    >p {

        line-height: 16px;
        font-size: 12px;

        /* &:nth-child(odd){
            margin: 0 7px 0 7.5px;
        } */
    }

    > img {
        margin: 0 7px 0 7.5px;
        width: 5.49px;
        height: 9.3px;
    }
`;

const Path = () => {

    return(<>
        <Wrapper>
            <p>Dineout</p>
            {/* <p>&#10095;</p> */}
            <img src={arrHeadImg} alt="arrowhead" />
            <p>Kolkata</p>
            {/* <p>&#10095;</p> */}
            <img src={arrHeadImg} alt="arrowhead" />
            <p>Pet friendly restaurants</p>
            <img src={arrHeadImg} alt="arrowhead" />
            {/* <p>&#10095;</p> */}
            <p>The Green House</p>
        </Wrapper>
    </>)
}

export default Path;
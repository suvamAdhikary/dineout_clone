import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;


    > div {
        padding: 14px 28px;
        color: #333333;
        font-size: 16px;
        line-height: 22px;
        font-weight: 700;
    }

`;

const SubMenu = () => {

    return(<>
        <Wrapper>
            <div>Overview</div>
            <div>Menu</div>
            <div>About</div>
            <div>Reviews(21)</div>
            <div>Help</div>
        </Wrapper>
    </>)
}

export default SubMenu;
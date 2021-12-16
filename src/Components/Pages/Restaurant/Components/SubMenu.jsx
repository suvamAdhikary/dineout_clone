import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
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
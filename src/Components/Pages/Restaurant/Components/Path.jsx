import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Path = () => {

    return(<>
        <Wrapper>
            <p>Dineout</p>
            <p>&#10095;</p>
            <p>Kolkata</p>
            <p>&#10095;</p>
            <p>Pet friendly restaurants</p>
            <p>&#10095;</p>
            <p>The Green House</p>
        </Wrapper>
    </>)
}

export default Path;
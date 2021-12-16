import styled from "styled-components";
import payImg from "../Assets/do-pay.svg";


const Wrapper = styled.div`
    display: flex;

    
`;

const DineoutPay = () => {

    return (<>
        <Wrapper>
            <img src={payImg} alt="payImg" />
            <div>
                <p>Combine any offer with Dineout Pay to <b>save upto 10%</b> more on your bill and also get <b>20%</b> cashback.</p>
            </div>
        </Wrapper>    
    </>)
}

export default DineoutPay;
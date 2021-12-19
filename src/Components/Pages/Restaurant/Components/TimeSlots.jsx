import styled from 'styled-components';

const Wrapper = styled.div`
    object-fit: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* min-height: 210px !important; */
    

    .timestatus__parent{
        margin: 8px 8px 24px 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        border-radius: 4px;
        box-shadow: 2px -1px 16px #00000028;
        
        > button {
            height: 48px;
            width: 101.33px;
            font-size: 14px;
            line-height: 20px;
            font-weight: 400;
            color: #797979;
            background-color: #FFFFFF;

            
        }

        .focused__zone{
            color: #3595FF;
            font-weight: 700;
            box-shadow: inset 0px -4px 0px #3595FF;
        }
    }

    >div > button{
        border: none;
    }

    .show__times--parent{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 8px 89px 16px 22px !important;
        grid-gap: 10px;
        padding-left: 72px;

        > button {
            color: #333333;
            background-color: #DCDCDC;
            height: 40px;
            width: 6.88vw;
            > p {
               color: #333333; 
            }
        }
    }

`;

const TimeSlots = ({ timeStatus, setTimeStatus, setBookTime }) => {

    return(<>
        <Wrapper>
            <div className="timestatus__parent">
                <button
                    onClick={() => setTimeStatus("breakfast")}
                    className={timeStatus === 'breakfast' ? "focused__zone" : null} 
                >    
                    <p>Breakfast</p>
                </button>
                <button
                    onClick={() => setTimeStatus("lunch")}
                    className={timeStatus === 'lunch' ? "focused__zone" : null}
                >
                    <p>Lunch</p>
                </button>
                <button
                    onClick={() => setTimeStatus("dinner")}
                    className={timeStatus === 'dinner' ? "focused__zone" : null}
                >    
                    <p>Dinner</p>
                </button>
            </div>
            {
                timeStatus === 'breakfast' ?
                <div className="show__times--parent">
                <button onClick={() => setBookTime('9:00 AM')} ><p>9:00 AM</p></button>
                <button onClick={() => setBookTime('9:15 AM')} ><p>9:15 AM</p></button>
                <button onClick={() => setBookTime('9:30 AM')} ><p>9:30 AM</p></button>
                <button onClick={() => setBookTime('9:45 AM')} ><p>9:45 AM</p></button>
                <button onClick={() => setBookTime('10:00 AM')} ><p>10:00 AM</p></button>
                <button onClick={() => setBookTime('10:15 AM')} ><p>10:15 AM</p></button>
                <button onClick={() => setBookTime('10:30 AM')} ><p>10:30 AM</p></button>
                <button onClick={() => setBookTime('10:45 AM')} ><p>10:45 AM</p></button>
                <button onClick={() => setBookTime('11:00 AM')} ><p>11:00 AM</p></button>
                </div>
                : timeStatus === 'lunch' ?
                <div className="show__times--parent">
                <button onClick={() => setBookTime('1:00 PM')} ><p>1:00 PM</p></button>
                <button onClick={() => setBookTime('1:15 PM')} ><p>1:15 PM</p></button>
                <button onClick={() => setBookTime('1:30 PM')} ><p>1:30 PM</p></button>
                <button onClick={() => setBookTime('1:45 PM')} ><p>1:45 PM</p></button>
                <button onClick={() => setBookTime('2:00 PM')} ><p>2:00 PM</p></button>
                <button onClick={() => setBookTime('2:15 PM')} ><p>2:15 PM</p></button>
                <button onClick={() => setBookTime('3:30 PM')} ><p>3:30 PM</p></button>
                <button onClick={() => setBookTime('3:45 PM')} ><p>3:45 PM</p></button>
                <button onClick={() => setBookTime('4:00 PM')} ><p>4:00 PM</p></button>
                </div>
                :
                <div className="show__times--parent">
                <button onClick={() => setBookTime('5:00 PM')}><p>5:00 PM</p></button>
                <button onClick={() => setBookTime('5:15 PM')}><p>5:15 PM</p></button>
                <button onClick={() => setBookTime('5:30 PM')}><p>5:30 PM</p></button>
                <button onClick={() => setBookTime('5:45 PM')}><p>5:45 PM</p></button>
                <button onClick={() => setBookTime('6:00 PM')}><p>6:00 PM</p></button>
                <button onClick={() => setBookTime('6:15 PM')}><p>6:15 PM</p></button>
                <button onClick={() => setBookTime('6:30 PM')}><p>6:30 PM</p></button>
                <button onClick={() => setBookTime('7:00 PM')}><p>7:00 PM</p></button>
                <button onClick={() => setBookTime('7:15 PM')}><p>7:15 PM</p></button>
                </div>
            }
        </Wrapper>
    </>)
}

export default TimeSlots;
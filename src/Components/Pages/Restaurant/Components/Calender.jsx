
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import styled from 'styled-components';




const Wrapper = styled.div`

  padding: 20px 24px 20px 30px;
  max-width: 238px;

  position: relative;


  .arrow__head{

    position: absolute;
    cursor: pointer;

  }

  .prev__arrow{
    z-index: 1;
    top: 40px;
    left: 10px;
  }

  .next__arrow{
    z-index: 1;
    top: 40px;
    right: 18px;
  }

  .calender__dayes {
      height: 52px;
      width: 37.5px;
      border: none;
      background-color: #FFFFFF;

      .select__day {
          color: #797979;
          font-size: 12px;
          line-height: 16px;
          font-weight: 400;

      }

      .select__date {
          color: #797979;
          font-size: 12px;
          line-height: 16px;
          font-weight: 700;
        }
    }

    .active__date{

      .select__day {
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #333333;  
      }

      .select__date--parent{
        display: flex;
        animation: blinker 3000ms linear infinite;
        align-items: center;
        justify-content: center;

          background-color: #3595FF;
          color: #FFFFFF;
          height: 30px;
          width: 30px;
          border-radius: 15px;
          border: 3px solid #8CBCF2;
      }

      /* .blink__border {
        width: ;
        animation: blinker 3000ms linear infinite;
      } */
      @keyframes blinker { 
        50% { opacity: 0.7; } 
      } 

      .select__date{

          color: inherit;

      }

    }
`;




export default function Calender({bookDate, setBookDate}) {
  const settings = {
    dot: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    arrows: true,
    // nextArrow: <ArrowHead />,
    // prevArrow: <ArrowHead />,
  }

  
  return(<Wrapper>
    <div className="arrow__head prev__arrow">{'<'}</div>
    <div className="arrow__head next__arrow">{'>'}</div>
    <Slider {...settings}>
        <button className={bookDate === '19th DEC 2021' ? "calender__dayes active__date" : "calender__dayes"} onClick={() => setBookDate('19th DEC 2021')}>
          <p className="select__day">Today</p>
          <div className="select__date--parent">
            <div className="blink__border">
              <p className="select__date">19</p>
            </div>
          </div>
        </button>
        <button className={bookDate === '20th DEC 2021' ? "calender__dayes active__date" : "calender__dayes"} onClick={() => setBookDate('20th DEC 2021')}>
          <p className="select__day">Mon</p>
          <div className="select__date--parent">
            <p className="select__date">20</p>
          </div>
        </button>
        <button className={bookDate === '21st DEC 2021' ? "calender__dayes active__date" : "calender__dayes"} onClick={() => setBookDate('21st DEC 2021')}>
          <p className="select__day">Tue</p>
          <div className="select__date--parent">
            <p className="select__date">21</p>
          </div>
        </button>
        <button className={bookDate === '22nd DEC 2021' ? "calender__dayes active__date" : "calender__dayes"} onClick={() => setBookDate('22nd DEC 2021')}>
          <p className="select__day">Wed</p>
          <div className="select__date--parent">
            <p className="select__date">22</p>
          </div>
        </button>
        <button className={bookDate === '23rd DEC 2021' ? "calender__dayes active__date" : "calender__dayes"} onClick={() => setBookDate('23rd DEC 2021')}>
          <p className="select__day">Thu</p>
          <div className="select__date--parent">
            <p className="select__date">23</p>
          </div>
        </button>
        <button className={bookDate === '24th DEC 2021' ? "calender__dayes active__date" : "calender__dayes"} onClick={() => setBookDate('24th DEC 2021')}>
          <p className="select__day">Fri</p>
          <div className="select__date--parent">
            <p className="select__date">24</p>
          </div>
        </button>
        <button className={bookDate === '25th DEC 2021' ? "calender__dayes active__date" : "calender__dayes"} onClick={() => setBookDate('25th DEC 2021')}>
          <p className="select__day">Sat</p>
          <div className="select__date--parent">
            <p className="select__date">25</p>
          </div>
        </button>
        <button className={bookDate === '26th DEC 2021' ? "calender__dayes active__date" : "calender__dayes"} onClick={() => setBookDate('26th DEC 2021')}>
          <p className="select__day">Sun</p>
          <div className="select__date--parent">
            <p className="select__date">26</p>
          </div>
        </button>
        <button className={bookDate === '27th DEC 2021' ? "calender__dayes active__date" : "calender__dayes"} onClick={() => setBookDate('27th DEC 2021')}>
          <p className="select__day">Mon</p>
          <div className="select__date--parent">
            <p className="select__date">27</p>
          </div>
        </button>
        <button className={bookDate === '28th DEC 2021' ? "calender__dayes active__date" : "calender__dayes"} onClick={() => setBookDate('28th DEC 2021')}>
          <p className="select__day">Tue</p>
          <div className="select__date--parent">
            <p className="select__date">28</p>
          </div>
        </button>
        <button className={bookDate === '29th DEC 2021' ? "calender__dayes active__date" : "calender__dayes"} onClick={() => setBookDate('29th DEC 2021')}>
          <p className="select__day">Wed</p>
          <div className="select__date--parent">
            <p className="select__date">29</p>
          </div>
        </button>
    </Slider>
  </Wrapper>)
}

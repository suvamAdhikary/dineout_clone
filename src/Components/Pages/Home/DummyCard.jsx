import styled from "styled-components";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 272px;
  overflow: hidden;
  height: 230px;
  transition: box-shadow 0.4s;
  background: #ffffff;
  border-radius: 4px;
  :hover {
    box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.08);
  }
  .img-div {
    height: 168px;
    display: inline-block;
    overflow: hidden;
    width: 272px;
    border-radius: 0px;
    img {
      height: 168px;
      width: 272px;
      object-fit: cover;
      border-radius: 0px;
      overflow: hidden;
    }
  }
  .img-div img {
    display: block;
    transition: transform 0.6s;
  }
  .img-div:hover img {
    transform: scale(1.2);
    transform-origin: 50% 50%;
  }
  .details-section {
    height: 64px;
    width: 272px;
    border-radius: 0px;
    border-top: 4px solid #ff645a;
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.06);
    padding: 12px;
    .caffe-name {
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #333333;
    }
    .location-para {
      font-size: 12px;
      line-height: 16px;
      margin-top: 4px;
      color: #797979;
    }
    .rating-box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 4px 8px;
      position: static;
      width: 40px;
      height: 28px;
      left: 220px;
      top: 18px;
      background: #8cbb0f;
      border-radius: 2px;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
      position: relative;
      top: -35px;
      left: 210px;
    }
  }
`;

export const DummyCard = () => {
  return (
    <Style>
      <div className="img-div">
        <img
          src="https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*"
          alt=""
        />
      </div>
      <div className="details-section">
        <p className="caffe-name">caffe 360 Degree</p>
        <p className="location-para">Kakurgati, east kolgata</p>
        <div className="rating-box">4.5</div>
      </div>
    </Style>
  );
};

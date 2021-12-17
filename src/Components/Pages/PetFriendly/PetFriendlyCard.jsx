import styled from "styled-components";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 272px;
  overflow: hidden;
  height: 276px;
  transition: box-shadow 0.4s;
  background: #ffffff;
  border-radius: 4px;
  :hover {
    box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.08);
  }
  .img-div {
    height: 293px;
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
    height: 120px;
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
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      margin-top: 4px;
      color: #797979;
    }
    .location-para2 {
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      color: #797979;
    }
    .rating-box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 4px 8px;
      width: 40px;
      height: 28px;
      background: #8cbb0f;
      border-radius: 2px;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
      position: relative;
      top: -218px;
      left: 208px;
    }
  }
  span {
    height: 24px;
    width: 103px;
    border-radius: 4px;
    padding: 4px, 8px, 4px, 8px;
    position:relative;
    top:-20px;
    left:10px;
    background: #fff4f4;
    display:flex;
    gap:10px;
    align-items: center;

    p {
      padding-left:8px;
      font-size: 12px;
      line-height: 16px;
      color: #dc4f4a;
    }
  }
`;

export const PetFriendlyCard = () => {
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
        <p className="location-para2">Kakurgati, east kolgata</p>
        <div className="rating-box">4.5</div>
        <span>
        <p>Dineout Pay</p>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.49988 3.5H5.49988V2.5H4.49988V3.5ZM4.99988 9C2.79488 9 0.999878 7.205 0.999878 5C0.999878 2.795 2.79488 1 4.99988 1C7.20488 1 8.99988 2.795 8.99988 5C8.99988 7.205 7.20488 9 4.99988 9ZM4.99988 0C4.34327 0 3.69309 0.129329 3.08646 0.380602C2.47983 0.631876 1.92864 1.00017 1.46434 1.46447C0.526662 2.40215 -0.00012207 3.67392 -0.00012207 5C-0.00012207 6.32608 0.526662 7.59785 1.46434 8.53554C1.92864 8.99983 2.47983 9.36813 3.08646 9.6194C3.69309 9.87067 4.34327 10 4.99988 10C6.32596 10 7.59773 9.47322 8.53541 8.53554C9.4731 7.59785 9.99988 6.32608 9.99988 5C9.99988 4.34339 9.87055 3.69321 9.61928 3.08658C9.368 2.47996 8.99971 1.92876 8.53541 1.46447C8.07112 1.00017 7.51993 0.631876 6.9133 0.380602C6.30667 0.129329 5.65649 0 4.99988 0ZM4.49988 7.5H5.49988V4.5H4.49988V7.5Z"
            fill="#FC9292"
          />
        </svg>
      </span>
      </div>
    </Style>
  );
};

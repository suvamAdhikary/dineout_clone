import styled from "styled-components";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 272px;
  overflow: hidden;
  margin-bottom:20px;
  height: 276px;
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
  span {
    height: 44px;
    width: 272px;
    left: 0px;
    top: 64px;
    border-radius: 0px;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px, 12px, 16px, 12px;
    padding-left: 10px;
    p {
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #51ba64;
    }
  }
`;

export const FoodCard = () => {
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
      <span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5901 7.45799L15.0227 6.61245C14.9765 6.51665 14.9541 6.41108 14.9575 6.30476L15.0227 5.28076C15.0405 4.99777 14.9745 4.71582 14.8328 4.47018C14.6912 4.22455 14.4802 4.02616 14.2264 3.89983L13.3168 3.44445C13.2246 3.40058 13.1502 3.32625 13.1064 3.23399L12.635 2.29122C12.5072 2.0388 12.3087 1.82906 12.0637 1.68765C11.8187 1.54623 11.5378 1.47925 11.2553 1.49491L10.2301 1.56014C10.127 1.5657 10.0249 1.53715 9.93961 1.47891L9.06084 0.910297C8.82291 0.751439 8.54323 0.666656 8.25715 0.666656C7.97106 0.666656 7.69139 0.751439 7.45345 0.910297L6.61161 1.47891C6.50928 1.52386 6.39843 1.54611 6.28668 1.54414L5.26268 1.47891C4.97707 1.46956 4.69459 1.54079 4.44756 1.68444C4.20052 1.82809 3.9989 2.03837 3.86576 2.29122L3.41038 3.20199C3.36659 3.29359 3.29275 3.36743 3.20115 3.41122L2.29038 3.8666C1.77099 4.12753 1.4633 4.67891 1.4953 5.24753L1.56053 6.27153C1.56053 6.36999 1.5433 6.48322 1.4793 6.56445L0.910684 7.44076C0.585761 7.92814 0.585761 8.56199 0.910684 9.04937L1.4793 9.89491C1.52378 9.99735 1.54561 10.1082 1.5433 10.2198L1.4793 11.2426C1.4633 11.8285 1.77099 12.3638 2.29161 12.6408L3.19992 13.0961C3.29838 13.1441 3.36238 13.2254 3.41161 13.3054L3.86699 14.2161C4.12545 14.7355 4.67807 15.0445 5.24545 15.0125L6.26945 14.9472C6.36792 14.9472 6.48115 14.9632 6.56115 15.0285L7.40668 15.5811C7.64915 15.7435 7.92607 15.8248 8.20176 15.8248C8.47745 15.8248 8.75438 15.7435 8.99807 15.5811L9.84238 15.0125C9.9312 14.9612 10.0315 14.9333 10.1341 14.9312L11.1568 14.9964C11.4398 15.0144 11.7219 14.9485 11.9675 14.8068C12.2132 14.6651 12.4116 14.4541 12.5378 14.2001L12.9931 13.2894C13.0367 13.1973 13.1106 13.123 13.2024 13.0789L14.1131 12.6235C14.6325 12.3651 14.9415 11.8112 14.9082 11.2426L14.8762 10.2358C14.8762 10.1374 14.8922 10.0241 14.9575 9.94291L15.5088 9.08137C15.915 8.56199 15.915 7.92814 15.5901 7.45676V7.45799ZM5.53099 4.68507C6.37899 4.68507 7.06945 5.37553 7.06945 6.22353C7.06945 7.07153 6.37899 7.76199 5.53099 7.76199C4.66699 7.76199 3.99253 7.0863 3.99253 6.22353C3.99253 5.37553 4.68299 4.68507 5.53099 4.68507ZM5.65776 11.6685C5.57167 11.7541 5.4555 11.8027 5.33407 11.8038C5.23192 11.8038 5.13592 11.522 5.03376 11.4371C4.98952 11.3974 4.95414 11.3488 4.92992 11.2945C4.9057 11.2402 4.89319 11.1814 4.89319 11.122C4.89319 11.0625 4.9057 11.0038 4.92992 10.9495C4.95414 10.8952 4.98952 10.8466 5.03376 10.8069L10.7864 5.0543C10.8261 5.01006 10.8747 4.97468 10.9289 4.95046C10.9832 4.92624 11.042 4.91372 11.1015 4.91372C11.1609 4.91372 11.2197 4.92624 11.274 4.95046C11.3282 4.97468 11.3768 5.01006 11.4165 5.0543C11.5864 5.24137 11.5642 5.74599 11.3771 5.91583L5.65776 11.6685ZM10.4541 12.5115C9.60607 12.5115 8.91561 11.8211 8.91561 10.9731C8.91561 10.1251 9.60607 9.4346 10.4541 9.4346C11.3168 9.4346 11.9925 10.1103 11.9925 10.9731C11.9925 11.8211 11.3021 12.5115 10.4541 12.5115Z"
            fill="#51BA64"
          />
        </svg>
        <p>Flat 10% off on total bill.</p>
      </span>
    </Style>
  );
};

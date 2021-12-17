import styled from "styled-components";

const Style = styled.div`
  margin-top: 100px;
  .Input_div {
    height: 40px;
    width: 560px;
    border-radius: 4px;
    display:flex;
    div{
        width:30px;
        display:flex;
        align-item:center;
        justify-content:center;
        height:100%;
    }
  }
`;

export const Explore = () => {
  return (
    <Style>
      <div className="Input_div">
        <div>
          <svg
            width="15"
            height="23"
            viewBox="0 0 15 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.833 20V17.833H3.167V20H6.417C6.42543 19.7183 6.54321 19.451 6.74538 19.2547C6.94755 19.0584 7.21822 18.9485 7.50001 18.9484C7.78181 18.9483 8.05258 19.0579 8.25493 19.254C8.45728 19.4501 8.57531 19.7173 8.584 19.999L11.834 20H11.833ZM11.833 7H3.167V15.667H11.833V7ZM11.833 4.833V2.667H3.167V4.833H11.833ZM2.086 0.5H12.914C13.514 0.5 14 0.983 14 1.582V21.085C14 21.682 13.514 22.167 12.914 22.167H2.086C1.486 22.167 1 21.684 1 21.085V1.582C1 0.984 1.486 0.5 2.086 0.5Z"
              fill="#797979"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </div>
        <input type="text" />
        <button>Send Link</button>
      </div>
    </Style>
  );
};

import React from 'react'

import DatePicker from "react-horizontal-datepicker";
import styled from 'styled-components';

const CalStyle = styled.div`
.App {
    font-family: sans-serif;
    text-align: center;
    padding: 15px;
    background: white;
  }
`

export default function CalenderComp() {
    const selectedDay = val => {
        console.log(val);
      };
      return (
          <CalStyle>
        <div className="App">
          <DatePicker
            getSelectedDay={selectedDay}
            labelFormat={"MMMM"}
            color={"#308fe7"}
          />
        </div>
        </CalStyle>
      );
}



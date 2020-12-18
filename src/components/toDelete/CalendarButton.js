import React from "react";
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Button.css";
import TimeSelectorComponent from "./TimeSelector.js";
import calendar from "../assets/icon-calendar.png";
// import axios from "axios";

const Calendar = (props) => {
  // const [name, setname] = React.useState("");

  // const handleChange = (event) => {
  //   setname(event.target.value);
  // };

  return (
    <div>
      <Button className="primary" id="PopoverLegacy" type="button">
        <img src={calendar} alt="calendar icon" />
      </Button>
      <UncontrolledPopover
        trigger="legacy"
        placement="top"
        target="PopoverLegacy"
      >
        <PopoverHeader>Select deadline for your task:</PopoverHeader>
        <PopoverBody>
          <form>
            <label>
              <TimeSelectorComponent />
            </label>
            <input type="submit" name="Submit" />
          </form>
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  );
};

export default Calendar;

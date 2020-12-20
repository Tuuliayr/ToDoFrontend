import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import calendar from "../assets/icon-calendar.png";
// import TimeSelectorComponent from "./TimeSelector.js";
import DateFnsUtils from "@date-io/date-fns";
import fiLocale from "date-fns/locale/fi";
import "./Button.css";

import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const Calendar = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const locale = "fi-FI";

  const toggle = () => {
    setPopoverOpen(!popoverOpen);
    props.handleDateSubmit(selectedDate);
  };

  const handleDateChange = async (date) => {
    const current = new Date();
    let newDate = new Date(date);
    newDate.setHours(
      current.getHours(),
      current.getMinutes(),
      current.getSeconds()
    );
    setSelectedDate(newDate);
    props.handleDateSubmit(newDate);
  };

  const handleTimeChange = (date) => {
    let newTime = new Date(selectedDate);
    newTime.setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    setSelectedDate(newTime);
    props.handleDateSubmit(newTime);
  };

  return (
    <div>
      <Button className="primary">
        <img src={calendar} alt="calendar-icon" id="Popover1" type="button" />
      </Button>
      <Popover
        placement="top"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverHeader>Select deadline for your task:</PopoverHeader>
        <PopoverBody>
          <form>
            <label>
              <div className="selected-time-view" onChange={handleTimeChange}>
                {selectedDate.toLocaleDateString(locale) +
                  ` at ${selectedDate
                    .getHours()
                    .toString()
                    .padStart(
                      2,
                      "0"
                    )}.${selectedDate
                    .getMinutes()
                    .toString()
                    .padStart(2, "0")}`}
              </div>
              <br />
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fiLocale}>
                <DatePicker
                  value={selectedDate}
                  variant="dialog" //dialog/inline/static
                  inputVariant="outlined" //standard/outlined/filled
                  onChange={handleDateChange}
                  label="Select day"
                  format="d.M.yyyy"
                  okLabel="OK"
                  cancelLabel="Cancel"
                  // shouldDisableDate={(date) => date.getDay() === 0}
                  disablePast={true}
                  minDateMessage="This day has passed already!"
                  // uncommenting these disables validation:
                  //error={false}
                  //helperText={null}
                />
                <br />
                <br />

                <TimePicker
                  value={selectedDate}
                  variant="dialog" //dialog/inline/static
                  inputVariant="outlined"
                  onChange={handleTimeChange}
                  label="Choose time"
                  format="HH.mm"
                  ampm={false}
                  okLabel="OK"
                  cancelLabel="Cancel"
                />
              </MuiPickersUtilsProvider>
            </label>
            <Button
              onClick={toggle}
              style={{ display: "block", background: "rgb(187, 153, 255)" }}
            >
              Select
            </Button>
          </form>
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default Calendar;

import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";

import DateFnsUtils from "@date-io/date-fns";
import fiLocale from "date-fns/locale/fi";
import differenceInMinutes from "date-fns/differenceInMinutes";

import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

export default function TimeSelectorComponent() {
  const locale = "fi-FI";

  let intervalHandle = useRef(null);

  const [selectedDate, changeCalVal] = useState(new Date());

  function handleDateChange(date) {
    let d = new Date(date);
    const current = new Date();
    d.setHours(current.getHours(), current.getMinutes(), current.getSeconds());
    changeCalVal(d);
  }

  function handleTimeChange(date) {
    let d = new Date(selectedDate);
    d.setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    changeCalVal(d);
  }

  function checkTimeLeft() {
    console.log(
      `Minutes left: ${differenceInMinutes(selectedDate, new Date())}`
    );
  }

  useEffect(() => {
    if (intervalHandle.current === null) {
      intervalHandle.current = setInterval(() => checkTimeLeft(), 1000);
      return () => {
        clearInterval(intervalHandle.current);
        intervalHandle.current = null;
      };
    }
  });

  return (
    <div className="App">
      <Calendar
        onChange={handleDateChange}
        locale={locale}
        value={selectedDate}
        minDetail="month"
        className="cal"
        tileClassName={(date, view) => {
          return date.date.getDay() === 0 ? "sunday" : "day-item";
        }}
        tileContent={(date, view) => {
          return date.date.getDay() === 0 ? " " : null;
        }}
      />

      <div className="selected-time-view" onChange={handleTimeChange}>
        {selectedDate.toLocaleDateString(locale) +
          ` at ${selectedDate
            .getHours()
            .toString()
            .padStart(2, "0")}.${selectedDate
            .getMinutes()
            .toString()
            .padStart(2, "0")}`}
      </div>

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
          shouldDisableDate={(date) => date.getDay() === 2}
          disablePast={true}
          minDateMessage="This day has passed already!"
          // uncommenting these disables validation:
          //error={false}
          //helperText={null}
        />
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
    </div>
  );
}

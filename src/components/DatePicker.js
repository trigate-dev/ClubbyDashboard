import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import nl from "date-fns/locale/nl";
import { format } from "date-fns";

// zie https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md

/* As the selection of the date is in current local time (I'm in CET time), and the storage is in UTC, local time gets shifted by one hour backward when stored.
https://github.com/Hacker0x01/react-datepicker/issues/1018
Solution: use moments */

export default function DatePickerComponent(props) {
  registerLocale('nl', nl)
  console.log('Datepicker ontvangt',props.startDate)
  return (
    
      <DatePicker 
        selected={props.startDate}
        onChange={props.onStartDateChange}
        value={props.startDate}
        dateFormat="yyyy-MM-dd"
        showWeekNumbers
        locale="nl"
        maxDate={Date.now()}
      />
  );
}


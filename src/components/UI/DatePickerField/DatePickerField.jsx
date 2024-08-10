import DatePicker from "react-datepicker";
import { useState, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { registerLocale } from "react-datepicker";
import { FaRegCalendar } from "react-icons/fa";
import enGB from "date-fns/locale/en-GB";
import { format, parse } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import clsx from "clsx";
import "./DatePickerField.css";
import css from "./DatePickerField.module.css";

const dataFormat = "yyyy-MM-dd";

const customLocale = {
  ...enGB,
  localize: {
    ...enGB.localize,
    day: (n) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][n],
  },
};
registerLocale("custom-en-GB", customLocale);

const DatePickerInput = ({ name, setValue, value }) => {
  const [selectedDate, setSelectedDate] = useState(
    value ? parse(value, dataFormat, new Date()) : null
  );
  const {
    formState: { errors },
  } = useFormContext();
  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = format(date, dataFormat);
    setValue(name, formattedDate);
  };

  useEffect(() => {
    setSelectedDate(value ? parse(value, dataFormat, new Date()) : null);
  }, [value]);

  const handleIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  return (
    <div className="datepicker__wrapper">
      <DatePicker
        ref={datePickerRef}
        className="datepicker"
        calendarClassName="datepicker__calendar"
        wrapperClassName="datepicker__wrapper"
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="0000-00-00"
        showPopperArrow={false}
        locale="custom-en-GB"
        dateFormat={dataFormat}
      />
      <FaRegCalendar className="datepicker__icon" onClick={handleIconClick} />
      {errors[name] && (
        <span className={clsx(css.message, css.error)}>
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default DatePickerInput;

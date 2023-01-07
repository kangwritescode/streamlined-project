import './DatePicker.scss';
import classNames from 'classnames';
import React, { useState } from 'react';

interface DatePickerProps {
  className?: string;
}

function DatePicker(props: DatePickerProps) {
  const { className } = props;
  const [date, setDate] = useState("")
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)
  return (
    <input className="m-date-picker" onChange={onChange} type="date" value={date} />
  );
}

export default DatePicker;

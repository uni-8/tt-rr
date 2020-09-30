import React, { useState } from 'react';
import './Calendar.scss';

export const Calendar = () => {
  const [currentDate] = useState(new Date());
  const [currentMonth, setMonth] = useState(currentDate.getMonth());

  const currentMonthName = new Date(null, currentMonth + 1, null)
    .toLocaleDateString('en', {month: 'long'});

  const currentMonthFirstDay = new Date(currentDate.getFullYear(), currentMonth);
  const currentMonthLastDay = new Date(currentDate.getFullYear(), currentMonth + 1, 0);
  const prewMonthLastDay = new Date(currentDate.getFullYear(), currentMonth, 0);

  const prewMonthDays = [...Array(currentMonthFirstDay.getDay())]
    .map((_, i, arr) => (
      new Date(
        prewMonthLastDay.getFullYear(),
        prewMonthLastDay.getMonth(),
        (prewMonthLastDay.getDate() - arr.length + 1 + i)
      )
    ));

  const currentMonthDays = [...Array(currentMonthLastDay.getDate())]
    .map((_, i) => (
      new Date(
        currentDate.getFullYear(),
        currentMonth,
        i + 1
      )
    ));

  const nextMonthDays = [...Array(6 - currentMonthLastDay.getDay())]
    .map((_, i) => (
      new Date(
        currentDate.getFullYear(),
        currentMonth + 1,
        i + 1
      )
    ));

  const weekDayNames = Array.from({length: 7}, (_, i) => (
    new Date(null, null, i).toLocaleDateString('en', {weekday: 'long'})
  ));

  return (
    <div className="Calendar">
      <div className="Calendar__nav">
        <button
          className="Calendar__change-month-button"
          onClick={() => setMonth(currentMonth - 1)}
        >
          <span className="material-icons">
            {'keyboard_arrow_left'}
          </span>
        </button>

        <span className="Calendar__title">
        {`${currentMonthName} ${currentDate.getFullYear()}`}
        </span>

        <button
          className="Calendar__change-month-button"
          onClick={() => setMonth(currentMonth + 1)}
        >
          <span className="material-icons">
            {'keyboard_arrow_right'}
          </span>
        </button>
      </div>

      <div className="Calendar__body">
        {prewMonthDays.map(day => (
          <div
            key={Math.random()}
            className="Calendar__day Calendar__day--disabled"
          >
            {day.getDate()}
          </div>
        ))}

        {currentMonthDays.map(day => (
          <div
            key={Math.random()}
            className={
              `Calendar__day${
                (day.getDate() === currentDate.getDate()
                && day.getMonth() === currentDate.getMonth()
                && day.getFullYear() === currentDate.getFullYear())
                  ? ' Calendar__day--active'
                  : ''
              }`
            }
          >
            {day.getDate()}
          </div>
        ))}

        {nextMonthDays.map(day => (
          <div
            key={Math.random()}
            className="Calendar__day Calendar__day--disabled"
          >
            {day.getDate()}
          </div>
        ))}
      </div>

      <div className="Calendar__daysNames">
        {weekDayNames.map(day => (
          <div
            key={Math.random()}
            className="Calendar__dayName"
          >
            {day[0]}
          </div>
        ))}
      </div>
    </div>
  )
}

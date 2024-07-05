import React from 'react';
import sty from './calendar.module.css';
import useCalendar from './hooks/useCalander';
import useMonth from './hooks/useMonth';
import CalendarDate from './CalendarDate';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export type SelectDate = dayjs.Dayjs | [dayjs.Dayjs, dayjs.Dayjs] | null;

interface CalendarProps {
  handleSelectDate: (selectDate: SelectDate) => void;
}

export default function Canlender({ handleSelectDate }: CalendarProps) {
  const { selectDate, daysOfMonth, handleClickPrevMonth, handleClickNextMonth, handleClickDate } = useCalendar({
    handleSelectDate,
  });
  const { currentMonth, currentMonthDays } = useMonth({ daysOfMonth });

  return (
    <div className={sty.calendar_wrap}>
      <div className={sty.calendar_btn_wrap}>
        <button type='button' onClick={handleClickPrevMonth}>
          이전
        </button>
        <button type='button' onClick={handleClickNextMonth}>
          다음
        </button>
      </div>
      <h5 className={sty.calendar_tit}>{currentMonth}</h5>
      <div className={sty.calendar_date_wrap}>
        <div className={sty.calendar_date_tag}>
          {Object.values(['일', '월', '화', '수', '목', '금', '토']).map((day) => (
            <span key={day}>{day.charAt(0)}</span>
          ))}
        </div>
        {currentMonthDays.map((day, i) =>
          day ? (
            <CalendarDate key={i} date={day} selectDate={selectDate} handleClickDate={handleClickDate(day)} />
          ) : (
            <span key={i} className={sty.no_date}>
              <button type='button'>&nbsp;</button>
            </span>
          )
        )}
      </div>
    </div>
  );
}

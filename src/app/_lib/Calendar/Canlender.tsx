import React from 'react';
import sty from './calendar.module.css';
import useCalendar from './hooks/useCalander';
import useMonth from './hooks/useMonth';
import CalendarDate from './CalendarDate';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {ITimeRange} from './hooks/useCalander';


dayjs.locale('ko');
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export type SelectDate = dayjs.Dayjs | [dayjs.Dayjs, dayjs.Dayjs] | null;


type CalendarProps = {
  handleSelectDate: (selectDate: SelectDate , timeRange :ITimeRange) => void;
  timeRange: ITimeRange;
};

export default function Canlender({ handleSelectDate, timeRange }: CalendarProps) {
  const { selectDate, daysOfMonth, handleClickPrevMonth, handleClickNextMonth, handleClickDate } = useCalendar({
    handleSelectDate,
    timeRange
  });


  const { currentMonth, currentMonthDays } = useMonth({ daysOfMonth });

  // timeRange 지정 날짜가 있을 경우 그 이전 이후 달로 넘어가지 않게 분기처리
  const checkIsBefore = dayjs(daysOfMonth[0]).isSameOrBefore(dayjs(timeRange?.s_time),'month');
  const checkIsAfter = dayjs(daysOfMonth[0]).isSameOrAfter(dayjs(timeRange?.f_time),'month');

  const handleCheckPrevEvent = () => {
    if (checkIsBefore && timeRange) return;
    handleClickPrevMonth();
  };

  const handleCheckNextEvent = () => {
    if (checkIsAfter && timeRange) return;
    handleClickNextMonth();
  };

  return (
    <div className={sty.calendar_wrap}>
      <div className={sty.calendar_btn_wrap}>
        <button type='button' onClick={handleCheckPrevEvent}>
          <FaChevronLeft />
          이전
        </button>
        <button type='button' onClick={handleCheckNextEvent}>
          다음
          <FaChevronRight />
        </button>
      </div>
      <h5 className={sty.calendar_tit}>{currentMonth}</h5>
      <div className={sty.calendar_date_wrap}>
        {Object.values(['일', '월', '화', '수', '목', '금', '토']).map((day) => (
          <span key={day} className={sty.calendar_week_tag}>
            <button type='button'>{day.charAt(0)}</button>
          </span>
        ))}
        {currentMonthDays.map((day, i) =>
          day ? (
            <CalendarDate key={i} date={day} selectDate={selectDate} handleClickDate={ handleClickDate(day,timeRange)} timeRange={timeRange}/>
          ) : (
            <span key={i}>
              <button type='button' className={sty.no_date}>
                &nbsp;
              </button>
            </span>
          )
        )}
      </div>
    </div>
  );
}

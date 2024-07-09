'use client';

import React, { useRef } from 'react';
import sty from './calendar.module.css';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { ITimeRange } from './hooks/useCalander';

dayjs.locale('ko');

const cx = classNames.bind(sty);

type SelectDate = dayjs.Dayjs | [dayjs.Dayjs, dayjs.Dayjs] | null;

interface CalendarDateProps {
  className?: string;
  date: dayjs.Dayjs;
  selectDate: SelectDate;
  handleClickDate: () => void;
  timeRange?: ITimeRange;
}

export default function CalendarDate({ className, date, selectDate, handleClickDate, timeRange }: CalendarDateProps) {
  const isToday = date.isSame(dayjs(), 'day');

  const isStartDay =
    selectDate === null ? false : Array.isArray(selectDate) ? selectDate[0].isSame(date, 'day') : false;

  const isEndDay = selectDate === null ? false : Array.isArray(selectDate) ? selectDate[1].isSame(date, 'day') : false;

  const isSelectDate =
    selectDate === null
      ? false
      : Array.isArray(selectDate)
      ? selectDate[0].isSame(date, 'day') || selectDate[1].isSame(date, 'day')
      : selectDate.isSame(date, 'day');

  const isBetweenSelectDay =
    selectDate === null || !date
      ? false
      : Array.isArray(selectDate)
      ? date.isAfter(selectDate[0], 'day') && date.isBefore(selectDate[1], 'day')
      : false;

  // 하루씩 날짜 더하고 빼야함
  const isBeforeTimeRange =
    timeRange === null ? false : date.isBefore(dayjs(timeRange?.s_time).subtract(1, 'day'), 'day');
  const isAfterTimeRange = timeRange === null ? false : date.isAfter(dayjs(timeRange?.f_time).add(1, 'day'), 'day');


  return (
    <span>
      <button
        type='button'
        disabled={!(isToday || date.isAfter(dayjs(), 'day'))}
        className={cx({
          is_today: isToday,
          is_start_day: isStartDay,
          is_end_day: isEndDay,
          is_select_day: isSelectDate,
          is_between_select_day: isBetweenSelectDay,
          is_before_time_range: isBeforeTimeRange,
          is_after_time_range: isAfterTimeRange,
        })}
        onClick={handleClickDate}
      >
        {date.format('D')}
      </button>
    </span>
  );
}

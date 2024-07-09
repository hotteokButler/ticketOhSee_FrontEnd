'use client';

import React from 'react';
import sty from './calendar.module.css';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import {ITimeRange} from './hooks/useCalander';
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
        })}
        onClick={handleClickDate}
      >
        {date.format('D')}
      </button>
    </span>
  );
}

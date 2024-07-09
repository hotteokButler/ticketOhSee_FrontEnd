'use client';

import React, { useEffect, useState } from 'react';
import Canlender from './Canlender';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

type SelectDate = dayjs.Dayjs | [dayjs.Dayjs, dayjs.Dayjs] | null;

interface IProp {
  s_time?: string | Date;
  f_time?: string | Date;
}

export default function CalendarModule({ s_time, f_time }: IProp) {
  const [selectDate, setSelectDate] = useState<SelectDate>(null);
  const [timeRange, setTimeRange] = useState<IProp | null>(null);
  useEffect(() => {
    if (s_time && f_time) setTimeRange({ s_time, f_time });
  }, []);

  const handleSelectDate = (selectDate: SelectDate): void => {
    setSelectDate(selectDate);
    console.log(selectDate);
  };

  return <Canlender handleSelectDate={handleSelectDate} timeRange={timeRange} />;
}

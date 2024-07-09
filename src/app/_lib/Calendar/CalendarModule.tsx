'use client';

import React, { useEffect, useState } from 'react';
import Canlender from './Canlender';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { ITimeRange } from './hooks/useCalander';
dayjs.locale('ko');

type SelectDate = dayjs.Dayjs | [dayjs.Dayjs, dayjs.Dayjs] | null;

interface IProp {
  getTimeRange: ITimeRange;
}

export default function CalendarModule({ getTimeRange }: IProp) {
  const [selectDate, setSelectDate] = useState<SelectDate>(null);
  const [timeRange, setTimeRange] = useState<ITimeRange>(null);

  const handleSelectDate = (selectDate: SelectDate): void => {
    setSelectDate(selectDate);
    console.log(selectDate);
  };

  return <Canlender handleSelectDate={handleSelectDate} timeRange={getTimeRange} />;
}

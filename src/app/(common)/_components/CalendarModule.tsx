'use client';

import React, { useState } from 'react';
import Canlender from '@/app/_lib/Calendar/Canlender';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');


type SelectDate = dayjs.Dayjs | [dayjs.Dayjs, dayjs.Dayjs] | null;

export default function CalendarModule() {
  const [selectDate, setSelectDate] = useState<SelectDate>(null);

  const handleSelectDate = (selectDate: SelectDate): void => {
    setSelectDate(selectDate);
    console.log(selectDate);
  };

  return <Canlender handleSelectDate={handleSelectDate} />;
}

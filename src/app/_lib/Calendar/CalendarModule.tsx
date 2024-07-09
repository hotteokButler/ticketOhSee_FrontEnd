import React from 'react';
import Canlender from './Canlender';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { ITimeRange } from './hooks/useCalander';
dayjs.locale('ko');

type SelectDate = dayjs.Dayjs | [dayjs.Dayjs, dayjs.Dayjs] | null;

interface IProp {
  getTimeRange: ITimeRange;
  setOtherModuleState?: (selectDate: SelectDate) => void;
}

export default function CalendarModule({ getTimeRange, setOtherModuleState }: IProp) {

  const handleSelectDate = (selectDate: SelectDate): void => {
    setOtherModuleState && setOtherModuleState(selectDate);
  };

  return <Canlender handleSelectDate={handleSelectDate} timeRange={getTimeRange} />;
}

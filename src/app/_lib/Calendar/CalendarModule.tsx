import React from 'react';
import Canlender from './Canlender';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { ITimeRange, SelectDate, SelectDateProp } from './hooks/useCalander';
dayjs.locale('ko');

type ISelectDate = SelectDate | SelectDateProp | SelectDateProp[]| string | string[];

interface IProp {
  getTimeRange: ITimeRange;
  setOtherModuleState?: (selectDate: ISelectDate) => void;
}

export default function CalendarModule({ getTimeRange, setOtherModuleState }: IProp) {

  const handleSelectDate = (selectDate: ISelectDate): void => {
    if (setOtherModuleState && selectDate) {
      if (Array.isArray(selectDate)) {
        const [{ $d: $s_d }, { $d: $f_d }] = selectDate as SelectDateProp[];
        setOtherModuleState([dayjs($s_d).format('YYYY-MM-DD'),dayjs($f_d).format('YYYY-MM-DD')]);
       }
      else {
        const {$d} = selectDate as SelectDateProp;
        setOtherModuleState(dayjs($d).format('YYYY-MM-DD'));
      }
    }
  };

  return <Canlender handleSelectDate={handleSelectDate} timeRange={getTimeRange} />;
}

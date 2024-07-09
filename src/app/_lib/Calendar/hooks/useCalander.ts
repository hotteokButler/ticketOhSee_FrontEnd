'use client';

import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export type SelectDateProp = {
  $D: number | string;
  $H: number | string;
  $L: string;
  $M: number | string;
  $W: number | string;
  $d: string;
  $m: number;
  $ms: number | string;
  $s: number | string;
  $x:string;
  $y: number | string;
  $isDayjsObject: boolean | string;
};

export type SelectDate = dayjs.Dayjs | [dayjs.Dayjs, dayjs.Dayjs] | null;

export type ITimeRange = { s_time: string | Date; f_time: string | Date } | null;

interface useCalendarProps {
  handleSelectDate: (selectDate: SelectDate) => void;
}

const date_mapper = {
  date: {
    monthFirstDay: (day: dayjs.Dayjs): dayjs.Dayjs => {
      // 인수로 전해준 날짜가 포함된 달의 첫째날을 반환하는 함수
      return day.startOf('month').startOf('month');
    },
    prevMonthFirstDay: (day: dayjs.Dayjs): dayjs.Dayjs => {
      // 인수로 전해준 날짜 기준 이전 달의 첫째날을 반환하는 함수
      return day.startOf('month').subtract(1, 'day').startOf('month');
    },
    nextMonthFirstDay: (day: dayjs.Dayjs): dayjs.Dayjs => {
      // 인수로 전해준 날짜 기준 다음 달의 첫째날을 반환하는 함수
      return day.endOf('month').add(1, 'day').startOf('month');
    },
    dateOfMonths: (day: dayjs.Dayjs): dayjs.Dayjs[] => {
      // 인수로 전해준 날짜가 포함된 달의 모든 일을 반환하는 함수
      return Array.from({ length: date_mapper.date.monthFirstDay(day).daysInMonth() }, (_, i) =>
        dayjs(day).startOf('month').add(i, 'day')
      );
    },
  },
};

export default function useCalendar({ handleSelectDate }: useCalendarProps) {
  const [selectDate, setSelectDate] = useState<SelectDate>(null);
  const [daysOfMonth, setDaysOfMonth] = useState(date_mapper.date.dateOfMonths(dayjs()));

  const handleClickPrevMonth = () => {
    setDaysOfMonth(date_mapper.date.dateOfMonths(date_mapper.date.prevMonthFirstDay(daysOfMonth[0])));
  };

  const handleClickNextMonth = () => {
    setDaysOfMonth(date_mapper.date.dateOfMonths(date_mapper.date.nextMonthFirstDay(daysOfMonth[0])));
  };

  const handleClickDate =
    (date: dayjs.Dayjs, timeRange: ITimeRange ) => {
      if (selectDate) {
        // 이미 선택한 날짜가 있을 때
        if (Array.isArray(selectDate)) {
          if (selectDate.length === 2) {
            // 선택했던 날짜가 구간 선택 일 때
            if (date.isSame(selectDate[0]) || date.isSame(selectDate[1])) {
              // 새롭게 선택한 날짜가 선택했던 날짜와 같을 때
              if (date.isSame(selectDate[0])) {
                // 새롭게 선택한 날짜가 선택했던 날짜의 첫번째와 같으면 첫번째 날짜 선택 취소
                setSelectDate(selectDate[1]);
              }

              if (date.isSame(selectDate[1])) {
                // 새롭게 선택한 날짜가 선택했던 날짜의 두번째와 같으면 두번째 날짜 선택 취소
                setSelectDate(selectDate[0]);
              }
            } else {
              // 새롭게 선택한 날짜가 선택했던 날짜와 같지 않을 때
              // 현재 하루만 선택되어 있고 두번째로 선택한 날짜와 이미 선택되어 있는 날짜를
              // sort를 해서 날짜 순서대로 배열을 정리 후 상태에 추가
              const sortDates = [selectDate[0], date].sort((a, b) => (a.isAfter(b) ? 1 : -1)) as [
                dayjs.Dayjs,
                dayjs.Dayjs
              ];

              setSelectDate(sortDates);
            }
          }
        } else {
          // 선택했던 날짜가 하루 일 때
          if (date.isSame(selectDate)) {
            // 선택했던 날짜와 선택한 날짜가 같을 때 선택 해제
            setSelectDate(null);
          } else {
            // 선택했던 날짜와 선택한 날짜가 같지 않아서
            // 날짜 구간선택 (정렬 로직은 위와 동일)
            const sortDates = [selectDate, date].sort((a, b) => (a.isAfter(b) ? 1 : -1)) as [dayjs.Dayjs, dayjs.Dayjs];

            setSelectDate(sortDates);
          }
        }

        if (!Array.isArray(selectDate) && timeRange) {
          setSelectDate((p) => date);
        }
      } else {
        // 이미 선택한 날짜가 없을 때
        setSelectDate((p) => date);
      }
    };

  useEffect(() => {
    // Calendar 내부에서 사용하는 상태 값을
    // Calendar 외부에서 사용하는 상태 값으로 전달하는 핸들러를 전달받아
    // 날짜를 선택할 때 마다 상태 값을 업데이트 하는 useEffect
    handleSelectDate(selectDate);
  }, [selectDate]);

  return {
    selectDate,
    daysOfMonth,
    handleClickPrevMonth,
    handleClickNextMonth,
    handleClickDate,
  };
}

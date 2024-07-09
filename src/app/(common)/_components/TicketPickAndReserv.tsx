'use client';

import React, { useState } from 'react';
import sty from './ticketDetail.module.css';
import CalendarModule from '@/app/_lib/Calendar/CalendarModule';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

type ISelectDate = dayjs.Dayjs | [dayjs.Dayjs, dayjs.Dayjs] | null;

export default function TicketPickAndReserv() {
  const [selectDate, setSelectDate] = useState<ISelectDate>(null);

  const handleClickBtn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(selectDate);
  };

  return (
    <div className={sty.ticket_reserv_date_wrap}>
      <div className={sty.ticket_reserv_date_sticky}>
        <div className={sty.ticket_reserv_date_con}>
          <h5>관람일</h5>
          <CalendarModule
            getTimeRange={{ s_time: '2024-06-20', f_time: '2024-08-27' }}
            setOtherModuleState={setSelectDate}
          />
        </div>
        <button
          type='button'
          onClick={handleClickBtn}
          className={sty.ticket_reserv_btn}
          disabled={selectDate ? false : true}
        >
          예매하기
        </button>
      </div>
    </div>
  );
}

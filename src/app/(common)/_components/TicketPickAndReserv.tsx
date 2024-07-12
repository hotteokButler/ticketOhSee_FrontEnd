'use client';

import React, { useState} from 'react';
import sty from './ticketDetail.module.css';
import CalendarModule from '@/app/_lib/Calendar/CalendarModule';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { SelectDate, SelectDateProp } from '@/app/_lib/Calendar/hooks/useCalander';
import Link from 'next/link';

dayjs.locale('ko');


type ISelectDate = SelectDateProp | SelectDateProp[] | SelectDate;


export default function TicketPickAndReserv({ticket_id} : {ticket_id: string }) {
  const [selectDate, setSelectDate] = useState<ISelectDate> (null);

  const handleClickBtn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if(Array.isArray(selectDate)) {
      alert('올바르지않은 형식입니다');
    } else {
      const {$d} = selectDate as SelectDateProp;
      selectDate && console.log(dayjs($d).format('YYYY-MM-DD'));
    }
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
        <Link href={`/ticket/${ticket_id}/buy`} > 예매하기</Link>
      </div>
    </div>
  );
}

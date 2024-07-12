'use client';

import React, { useState } from 'react';
import sty from './ticketDetail.module.css';
import CalendarModule from '@/app/_lib/Calendar/CalendarModule';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { SelectDate, SelectDateProp } from '@/app/_lib/Calendar/hooks/useCalander';
import Link from 'next/link';
import classNames from 'classnames/bind';

const cx = classNames.bind(sty);

dayjs.locale('ko');

type ISelectDate = SelectDateProp | SelectDateProp[] | SelectDate | string | string[];

export default function TicketPickAndReserv({ ticket_id }: { ticket_id: string }) {
  const [selectDate, setSelectDate] = useState<ISelectDate>(null);
  const [btnActive, setBtnActive] = useState(false);

  const handleClickBtn: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (Array.isArray(selectDate)) {
      alert('올바르지않은 형식입니다');
    } else {
      setBtnActive((p) => !p);
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

        <Link
          onClick={handleClickBtn}
          className={cx('ticket_reserv_btn', { ticket_reserv_btn_disable: !selectDate && !btnActive })}
          href={{
            pathname: `/ticket/${ticket_id}/buy`,
            query: { date: String(selectDate)},
          }}
          scroll={false}
        >
          예매하기
        </Link>
      </div>
    </div>
  );
}

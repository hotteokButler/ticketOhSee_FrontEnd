'use client';

import React, { useEffect, useState } from 'react';
import sty from './ticketReservModal.module.css';
import { useRouter } from 'next/navigation';
import TicketSeat from './TicketSeat';
import Link from 'next/link';
import { IoAlertCircleOutline } from "react-icons/io5";
import classNames from 'classnames/bind';

const cx = classNames.bind(sty);

export type SelectedSeat = { seat_number: number; grade: number | string; id:number; };
export type SelectedSeatState = SelectedSeat[] | null;

export default function TicketReservModal({ id, date }: { id: string; date?: string }) {
  const router = useRouter();
  const [selectedSeat, setSelectedSeat] = useState<SelectedSeatState>(null);

  const resetSeat : React.MouseEventHandler<HTMLButtonElement> = ( e) => {
    e.preventDefault();
    setSelectedSeat(prev => null);
  }

  useEffect(() => {
    if (date === undefined || date === '') {
      alert('날짜를 다시 선택해주세요');
      router.replace(`/ticket/${id}`, { scroll: false });
      return;
    }
  }, [date ,selectedSeat]);

  const dommyPrice = [
    {
      id: 1,
      grade: 'vip',
      remain: 210,
      price: 180000,
    },
    {
      id: 2,
      grade: 'r',
      remain: 249,
      price: 150000,
    },
    {
      id: 3,
      grade: 's',
      remain: 160,
      price: 120000,
    },
    {
      id:4,
      grade: 'a',
      remain: 100,
      price: 90000,
    },
  ];

  return (
    <div area-label='reservation_modal' className={sty.ticket_modal_wrap}>
      <div className={sty.ticket_modal_con}>
        <div className={sty.ticket_modal_top}>
          <h4>
            <span className={sty.ticket_modal_tit}>공연이름</span>
            <span>{date}</span>
            <span>14:25</span>
          </h4>
        </div>
        <div className={sty.ticket_modal_main}>
          <TicketSeat setSelectedSeat={setSelectedSeat} />

          <div className={sty.ticket_modal_aside}>
            <div className={sty.ticket_modal_aside_top}>
              {/* 좌석등급 / 잔여석 */}
              <div className={sty.ticket_modal_price_remain}>
                <h5>좌석등급/잔여석</h5>
                <menu type='toolbar'>
                  {dommyPrice.map(({ id, grade, remain, price }) => (
                    <button type='button' key={id} className={cx('ticket_seat_btn', { [`ticket_${grade}_seat`]: grade })}>
                      <span>
                        <span className={sty.ticket_uppercase}>{grade.toUpperCase()}석</span>
                        <span className={sty.ticket_remain}>&#40;{remain}&#41;</span>
                      </span>
                      <span>{Number(price).toLocaleString('ko-KR')}원</span>
                    </button>
                  ))}
                </menu>
              </div>
              {/* 우선 ui구조만 먼저 */}
              {selectedSeat && (
                <div className={sty.ticket_modal_selected}>
                  <div>
                  {
                    selectedSeat.map(({id,seat_number,grade}) => (
                    <button type='button' key={id} className={cx('ticket_seat_btn', 'ticket_selected_btn', { [`ticket_${grade}_seat`]: grade })}>
                      <span>
                        <span className={sty.ticket_uppercase}>{String(grade).toUpperCase()}석</span>
                      </span>
                      <span>{seat_number}번</span>
                    </button>
                    ))
                  }     
                  </div>
                  <p className={sty.ticket_selected_seat_notice}>총 {selectedSeat.length}석 선택되었습니다.</p>
                </div>
              )}
            </div>

            <div className={sty.ticket_modal_aside_btm}>
              <Link
                href="#"
                className={cx({disabled : !selectedSeat})}
              >
                좌석 선택 완료
              </Link>
              <div className={sty.ticket_modal_aside_btm_btns}>
                <button type='button'>취소 후 창닫기</button>
                <button type='button' onClick={resetSeat}>좌석 다시 선택</button>
              </div>
            </div>
            <button type='button' className={sty.seat_help_info}>
              <IoAlertCircleOutline/> 좌석 선택시 유의사항
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

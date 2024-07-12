'use client';

import React, { useEffect, useState } from 'react';
import sty from './ticketReservModal.module.css';
import { useRouter } from 'next/navigation';
import TicketSeat from './TicketSeat';
import Link from 'next/link';
import classNames from 'classnames/bind';

const cx = classNames.bind(sty);

export type SelectedSeat = { seat_number: number; grade: number };
export type SelectedSeatState = SelectedSeat[] | null;

export default function TicketReservModal({ id, date }: { id: string; date?: string }) {
  const router = useRouter();
  const [selectedSeat, setSelectedSeat] = useState<SelectedSeatState>(null);

  useEffect(() => {
    if (date === undefined || date === '') {
      alert('날짜를 다시 선택해주세요');
      router.replace(`/ticket/${id}`, { scroll: false });
      return;
    }
  }, [date]);

  const dommyPrice = [
    {
      id: 'vip',
      remain: 210,
      price: 180000,
    },
    {
      id: 'r',
      remain: 249,
      price: 150000,
    },
    {
      id: 's',
      remain: 160,
      price: 120000,
    },
    {
      id: 'a',
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
                  {dommyPrice.map(({ id, remain, price }) => (
                    <button type='button' key={id} className={sty.ticket_seat_btn}>
                      <span>
                        <span className={sty.ticket_uppercase}>{id}석</span>
                        <span className={sty.ticket_remain}>&#40;{remain}&#41;</span>
                      </span>
                      <span className={sty.ticket_price}>{price}</span>
                    </button>
                  ))}
                </menu>
              </div>
              {/* 우선 ui구조만 먼저 */}
              <div className={sty.ticket_modal_selected}>
                <button type='button' className={sty.ticket_seat_btn}>
                  <span>
                    <span className={sty.ticket_uppercase}>A석</span>
                  </span>
                  <span className={sty.ticket_price}>1석</span>
                </button>
                {selectedSeat && 
                  <p className={sty.ticket_selected_seat_notice}>
                    총 {selectedSeat.length}석 선택되었습니다.
                  </p>
                  }
              </div>
            </div>

            <div className={sty.ticket_modal_aside_btm}>
              <Link
                href={{
                  pathname: '#',
                }}
              >좌석 선택 완료</Link>
              <div className={sty.ticket_modal_aside_btm_btns}>
                <button type="button">취소 후 창닫기</button>
                <button type="button">좌석 다시 선택</button>
              </div>
            </div>
            <button type="button" className={sty.seat_help_info}>좌석 선택시 유의사항</button>
          </div>
        </div>
      </div>
    </div>
  );
}

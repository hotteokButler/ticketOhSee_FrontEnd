'use client';

import React, { SetStateAction, useEffect } from 'react';
import sty from './ticketReservModal.module.css';
import TicketSeat from './TicketSeat';
import { IoAlertCircleOutline } from 'react-icons/io5';
import classNames from 'classnames/bind';
import { SeatDataState, SelectedSeatState } from './TicketReservModal';
import { useRouter } from 'next/navigation';

const cx = classNames.bind(sty);

type IProp = {
  id: string;
  date?: string;
  setSelectedSeat: React.Dispatch<SetStateAction<SelectedSeatState>>;
  seatData: SeatDataState;
  selectedSeat: SelectedSeatState;
  setSeatInfoActive : React.Dispatch<SetStateAction<boolean>>;
  setSeatValid :React.Dispatch<SetStateAction<boolean>>;

};

export default function TicketReservModaSeat({ id, date, setSelectedSeat, seatData, selectedSeat ,setSeatInfoActive ,setSeatValid}: IProp) {
  const router = useRouter();

  const goBackRoute: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.back();
  };

  const handleSeatInfoActive : React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setSeatInfoActive(prev => !prev);
  }
  const handleSeatValid : React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setSeatValid(prev => !prev);
  }

  const resetSeat: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setSelectedSeat((prev) => null);
  };

 
  useEffect(() => {
    

  },[date,selectedSeat])

  return (
    <>
      <div className={sty.ticket_modal_top}>
        <h4>
          <span className={sty.ticket_modal_tit}>공연이름</span>
          <span>{date}</span>
          <span>14:25</span>
        </h4>
      </div>
      {/* ticket_modal_main START ====== */}
      <div className={sty.ticket_modal_main}>
        <TicketSeat setSelectedSeat={setSelectedSeat} />

        {/* ticket_modal_aside START ====== */}
        <div className={sty.ticket_modal_aside}>
          {/* ticket_modal_aside_top START ====== */}
          <div className={sty.ticket_modal_aside_top}>
            {/* 좌석등급 / 잔여석 */}
            <div className={sty.ticket_modal_price_remain}>
              <h5>좌석등급/잔여석</h5>
              <menu type='toolbar'>
                {seatData &&
                  seatData.map(({ id, grade, remain, price }) => (
                    <button 
                      type='button'
                      key={id}
                      className={cx('ticket_seat_btn', { [`ticket_${grade}_seat`]: grade })}
                    >
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
                  {selectedSeat.map(({ id, seat_number, grade }) => (
                    <button
                      type='button'
                      key={id}
                      className={cx('ticket_seat_btn', 'ticket_selected_btn', { [`ticket_${grade}_seat`]: grade })}
                    >
                      <span>
                        <span className={sty.ticket_uppercase}>{String(grade).toUpperCase()}석</span>
                      </span>
                      <span>{seat_number}번</span>
                    </button>
                  ))}
                </div>
                <p className={sty.ticket_selected_seat_notice}>총 {selectedSeat.length}석 선택되었습니다.</p>
              </div>
            )}
          </div>
          {/* ticket_modal_aside_top E N D ====== */}

          {/* ticket_modal_aside_btm START ====== */}
          <div className={sty.ticket_modal_aside_btm}>
            <button type="button" onClick={handleSeatValid} className={cx({ disabled: !selectedSeat })}>
              좌석 선택 완료
            </button>
            <div className={sty.ticket_modal_aside_btm_btns}>
              <button type='button' onClick={goBackRoute}>
                취소 후 창닫기
              </button>
              <button type='button' onClick={resetSeat}>
                좌석 다시 선택
              </button>
            </div>
          </div>
          {/* ticket_modal_aside_btm E N D ====== */}

          <button type='button' onClick={handleSeatInfoActive} className={sty.seat_help_info}>
            <IoAlertCircleOutline /> 좌석 선택시 유의사항
          </button>
        </div>
      </div>
      {/* ticket_modal_main E N D ====== */}
    </>
  );
}

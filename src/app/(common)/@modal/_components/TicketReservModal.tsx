'use client';

import React, { useEffect, useState } from 'react';
import sty from './ticketReservModal.module.css';
import { useRouter } from 'next/navigation';
import classNames from 'classnames/bind';
import TicketHelpInfo from './TicketHelpInfo';
import TicketReservModaSeat from './TicketReservModalSeat';
import TicketReservModalBuy from './TicketReservModalBuy';

const cx = classNames.bind(sty);

export type SeatGrade = 'vip' | 'r' | 's' | 'a';
export type SelectedSeat = { seat_number: number; grade: SeatGrade; id: number };
export type SelectedSeatState = SelectedSeat[] | null;
export type SeatData = { id: number; grade: SeatGrade; remain: number; price: number };
export type SeatDataState = SeatData[] | null;

export default function TicketReservModal({ id, date }: { id: string; date?: string }) {
  const router = useRouter();
  const [selectedSeat, setSelectedSeat] = useState<SelectedSeatState>(null);
  const [seatData, setSeatData] = useState<SeatDataState>(null);
  const [seatInfoActive, setSeatInfoActive] = useState<boolean>(false);
  const [seatValid, setSeatValid] = useState<boolean>(false);


  useEffect(() => {
    if (date === undefined || date === '') {
      alert('날짜를 다시 선택해주세요');
      router.replace(`/ticket/${id}`, { scroll: false });
      return;
    }
    setSeatData([
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
        id: 4,
        grade: 'a',
        remain: 100,
        price: 90000,
      },
    ]);
  }, [date, selectedSeat, seatValid,seatInfoActive]);

  return (
    <div area-label='reservation_modal' className={sty.ticket_modal_wrap}>
      {/* ticket_modal_con START ====== */}
      <div className={sty.ticket_modal_con}>
        {!seatValid && ( // 좌석 선택 전
          <TicketReservModaSeat
            id={id}
            date={date}
            setSelectedSeat={setSelectedSeat}
            seatData={seatData}
            selectedSeat={selectedSeat}
            setSeatInfoActive={setSeatInfoActive}
            setSeatValid={setSeatValid}
          />
        )}
        {seatValid && <TicketReservModalBuy />}

        {
          // TicketHelpInfo modal  ======
          seatInfoActive && <TicketHelpInfo set_active={setSeatInfoActive} />
        }
      </div>
      {/* ticket_modal_con E N D ====== */}
    </div>
  );
}

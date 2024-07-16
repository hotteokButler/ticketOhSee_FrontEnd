"use client";

import React, { useState ,useEffect } from 'react';
import sty from './ticketSeat.module.css'
import { SelectedSeatState } from './TicketReservModal';
import classNames from 'classnames/bind';

const cx = classNames.bind(sty);

type IProp = {
  setSelectedSeat : React.Dispatch<React.SetStateAction<SelectedSeatState>>
}

export default function TicketSeat({setSelectedSeat} : IProp) {
  const [seats, setSeats] = useState<SelectedSeatState>(null);
  const handleSeatSelect = () => {
    const dommy : SelectedSeatState = [{ id:1, seat_number: 12, grade: 'a'},{ id:2, seat_number: 25, grade: 'r'}];
    setSeats(dommy);
  }

  useEffect(()=>{
    seats &&  setSelectedSeat( prev => {
      if(prev){ 
       const ft_prev= prev.filter(prev_seat => seats.findIndex((seat) => seat.seat_number === prev_seat.seat_number && seat.grade == prev_seat.grade) < 0)
        return [...ft_prev,...seats]
      }
      else{return seats};
    });
  },[seats])
  return (
    <div onClick={handleSeatSelect} className={cx('ticket_seat_wrap','ticket_seat_wrap_dommy')}>TicketSeat</div>
  )
}

"use client";

import React from 'react';
import sty from './ticketSeat.module.css'
import { SelectedSeatState } from './TicketReservModal';

type IProp = {
  setSelectedSeat : React.Dispatch<React.SetStateAction<SelectedSeatState>>
}

export default function TicketSeat({setSelectedSeat} : IProp) {

  return (
    <div className={sty.ticket_seat_wrap}>TicketSeat</div>
  )
}

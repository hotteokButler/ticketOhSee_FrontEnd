import React from 'react'
import sty from './ticketDetail.module.css';
import CalendarModule from '@/app/_lib/Calendar/CalendarModule';


export default function TicketPickAndReserv() {
  return (
    <div className={sty.ticket_reserv_date}>
      <CalendarModule/>
    </div>
  )
}

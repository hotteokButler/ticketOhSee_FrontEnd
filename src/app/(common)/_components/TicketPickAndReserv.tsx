import React from 'react'
import sty from './ticketDetail.module.css';
import CalendarModule from '@/app/_lib/Calendar/CalendarModule';


export default function TicketPickAndReserv() {
  return (
    <div className={sty.ticket_reserv_date}>
      <CalendarModule s_time='2024-06-20' f_time='2024-08-27'/>
    </div>
  )
}

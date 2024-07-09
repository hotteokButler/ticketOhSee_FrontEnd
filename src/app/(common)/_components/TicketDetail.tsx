import React from 'react';
import sty from './ticketDetail.module.css';
import StarRating from './StarRating';

export default function TicketDetail({ ticket_id }: { ticket_id: string }) {
  return (
    <article aria-label='티켓 상세' className={sty.ticket_detail_con}>
      <div className={sty.ticket_tag_area}>
        <button type='button'>판매중</button>
        <button type='button'>관심 공연</button>
      </div>

      <div className={sty.ticket_header}>
        <h3 className={sty.ticket_title}>
          공연 타이틀
          <StarRating rating={5}/>
        </h3>
      </div>
    </article>
  );
}

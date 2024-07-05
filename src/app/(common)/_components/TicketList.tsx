import React from 'react';
import sty from './ticketList.module.css';
import Link from 'next/link';
import { FaRegHeart, FaHeart, FaStar } from 'react-icons/fa';
import dayjs from 'dayjs';

type ITicketList = {
  listData: {
    id: number;
    title: string;
    place: string;
    ticketImgUrl: string;
    period_start: string | Date;
    period_end: string | Date;
    is_liked?: boolean;
    star: number;
    review: number;
  };
};

export default function TicketList({
  listData: { title, place, period_start, ticketImgUrl, is_liked, period_end, star, review },
}: ITicketList) {
  return (
    <div className={sty.ticket_wrap}>
      <Link href='#'>
        <div className={sty.ticket_img}>
          <img src={ticketImgUrl} alt={title} />
        </div>

        <h5 className={sty.ticket_tit}>
          <span>{title}</span>
          {is_liked ? <FaHeart /> : <FaRegHeart />}
        </h5>
        <p className={sty.ticket_place}>{place}</p>
        <p className={sty.ticket_period}>{`${dayjs(period_start).format('YYYY년MM월DD일')}~${dayjs(period_end).format('YYYY년MM월DD일')}`}</p>
        <p className={sty.ticket_review}>
          <FaStar />
          <span>{star}</span>
          <span>{`리뷰 ${review}`}</span>
        </p>
      </Link>
    </div>
  );
}

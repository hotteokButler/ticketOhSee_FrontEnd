import React from 'react';
import sty from './ticketList.module.css';
import Link from 'next/link';
import { FaRegHeart, FaHeart, FaStar } from 'react-icons/fa';
import dayjs from 'dayjs';
import { ITicketData } from './SearchList';
import NoImage from './NoImage';


type ITicketList = {
  listData: ITicketData
};

export default function TicketList({
  listData: { title, place, period_start, ticketImgUrl, is_liked, period_end, star, review },
}: ITicketList) {
  return (
    <div className={sty.ticket_wrap}>
      <Link href='#' scroll={false}>
        <div className={sty.ticket_img}>
          {ticketImgUrl ?  <img src={ticketImgUrl} alt={title} /> : <NoImage/>}
        </div>
        <h5 className={sty.ticket_tit}>
          <span>{title}</span>
          {is_liked ? <FaHeart /> : <FaRegHeart />}
        </h5>
        <p className={sty.ticket_place}>{place}</p>
        <p className={sty.ticket_period}>{`${dayjs(period_start).format('YYYY\/MM\/DD')} ~ ${dayjs(period_end).format('YYYY년\/MM\/DD')}`}</p>
        <p className={sty.ticket_review}>
          <FaStar />
          <span>&#40;{star}&#41;</span>
          <span>{`리뷰 ${review}`}</span>
        </p>
      </Link>
    </div>
  );
}

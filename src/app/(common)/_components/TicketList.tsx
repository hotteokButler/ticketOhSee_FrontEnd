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
  listData: { id,title, place, s_time, ticketImgUrl, is_liked, f_time, star, review },
}: ITicketList) {
  return (
    <div className={sty.ticket_wrap}>
      <Link href={`/ticket/${id}`} scroll={false}>
        <div className={sty.ticket_img}>
          {ticketImgUrl ?  <img src={ticketImgUrl} alt={title} /> : <NoImage/>}
        </div>
        <h5 className={sty.ticket_tit}>
          <span>{title}</span>
          {is_liked ? <FaHeart /> : <FaRegHeart />}
        </h5>
        <p className={sty.ticket_place}>{place}</p>
        <p className={sty.ticket_period}>{`${dayjs(s_time).format('YYYY\/MM\/DD')} ~ ${dayjs(f_time).format('YYYY\/MM\/DD')}`}</p>
        <p className={sty.ticket_review}>
          <FaStar />
          <span>&#40;{star}&#41;</span>
          <span>{`리뷰 ${review}`}</span>
        </p>
      </Link>
    </div>
  );
}

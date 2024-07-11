'use client';

import React, { MouseEventHandler, useEffect, useState } from 'react';
import sty from './ticketDetail.module.css';
import StarRating from './StarRating';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import dayjs from 'dayjs';

import { faker } from '@faker-js/faker';
import NoImage from './NoImage';

export default function TicketDetail({ ticket_id , children}: { ticket_id: string , children?: React.ReactNode }) {
  const [isLike, setIsLike] = useState(false);
  const [isHaveIntermission, setIntermission] = useState('20분');
  const [fakerImg, setFakerImg] = useState<string | null>(null);
  
  const handleIsLike: MouseEventHandler<HTMLSpanElement> = (e) => {
    e.preventDefault();
    setIsLike((p) => !p);
  };

  useEffect(() => {
    // 추후 ticket id 값으로 정보 받아 올 예정
    //dommny
    setIsLike((p) => true);
    setFakerImg(faker.image.urlLoremFlickr({ category: 'cat', height: 650 }));
  }, []);

  return (
    <article aria-label='티켓 상세' className={sty.ticket_detail_con}>
      <div className={sty.ticket_tag_area}>
        <button type='button'>판매중</button>
        <button type='button'>관심 공연</button>
      </div>

      <div className={sty.ticket_header}>
        <h3 className={sty.ticket_title}>
          <p>공연 타이틀</p>
          <StarRating rating={7.2} />
        </h3>
        <span onClick={handleIsLike} className={sty.ticket_islicked}>
          {isLike ? <FaHeart /> : <FaRegHeart />}
        </span>
      </div>

      <div className={sty.ticket_info_sum}>
        <div className={sty.ticket_poster}>{fakerImg ? <img src={fakerImg} alt='' /> : <NoImage />}</div>
        <ul className={sty.ticket_sum}>
          <li>
            <b>장소</b> <span>블루스퀘어 신한카드홀</span>
          </li>
          <li>
            <b>공연기간</b>
            <span>
              {dayjs().format('YYYY.MM.DD')} ~ {dayjs().format('YYYY.MM.DD')}
            </span>
          </li>
          <li>
            <b>공연시간</b>
            <span>
              180분
              {isHaveIntermission && (
                <span className={sty.ticket_intermission}>&#40;인터미션 {isHaveIntermission} 포함&#41;</span>
              )}
            </span>
          </li>
          <li>
            <b>관람연령</b> 
            <span>초등학생이상 관람가</span>
          </li>
          <li>
            <b>가격</b>
            <ul className={sty.ticket_pirce}>
              <li>
                <b>VIP석</b> <span>180,000원</span>
              </li>
              <li>
                <b>R석</b> <span>150,000원</span>
              </li>
              <li>
                <b>S석</b> <span>120,000원</span>
              </li>
              <li>
                <b>A석</b> <span>90,000원</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {children && children}
    </article>
  );
}

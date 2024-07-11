import React from 'react';
import sty from './ticketReviewList.module.css';
import StarRating from './StarRating';
import { useRouter } from 'next/navigation';
import TicketReview from './TicketReview';

export default function TicketReviewList() {
  const rating = 7.2;
  const total_review = 1100;

  return (
    <article aria-label='관람 평점'>
      <div className={sty.ticket_review_list_tit}>
        <div className={sty.ticket_review_rating}>
          <h3>관람 평점</h3>
          <StarRating rating={rating} />
          <span>|</span>
          <span className={sty.ticket_review_total}>후기 총 {total_review} 건</span>
        </div>
        <button type='button'>리뷰 쓰기</button>
      </div>

      <ul className={sty.ticket_review_list}>
        <TicketReview/>
      </ul>
    </article>
  );
}

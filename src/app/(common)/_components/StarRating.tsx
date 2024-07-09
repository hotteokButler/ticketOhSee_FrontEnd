import React from 'react';
import sty from './ticketDetail.module.css';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function StarRating({ rating }: { rating: number }) {
  const rate = Number((rating / 2).toFixed(1));

  const rendering = () => {
    const result = [];
    for (let i = 1; i <= 5; i++) {
      const ck = rate - i;
      if (ck >= 0) {
        result.push(<span key={i}>{<FaStar />}</span>);
      } else if (ck < 0 && ck > -1 && Math.abs(ck) <= 0.5) {
        result.push(<span key={i}>{<FaStarHalfAlt />}</span>);
      } else if (ck < 0) {
        result.push(<span key={i}>{<FaRegStar />}</span>);
      }
    }
    return result;
  };

  return (
    <div className={sty.star_rating}>
      {rendering()}
      <span className={sty.str_rating_txt}>&#40;{String(rating).trim()}&#41;</span>
    </div>
  );
}

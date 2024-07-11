'use client';
import React, { useContext, useEffect } from 'react';
import { TicketDetailContext, TicketDetailContextVal } from './TicketDetailProvider';
import sty from './ticketDetail.module.css';
import TicketReviewList from './TicketReviewList';
import classNames from 'classnames/bind';

const cx = classNames.bind(sty);

export default function TicketDetailContents() {
  const { detail, setDetail } = useContext(TicketDetailContext);

  const handleTabClick  : React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement; //name 접근 위해 명시 필요
    const name  = target.name as TicketDetailContextVal; //value 정해져 있어 명시 필요
    setDetail(name);
  }

  useEffect(() => {
    console.log(detail);
  }, [detail]);


  return (
  <article className={sty.ticket_main_info_wrap} aria-label={detail}>
    <menu className={sty.ticket_tab}>
      <button type="button" onClick={handleTabClick} name="ticket_info" className={cx({'on': detail === 'ticket_info'})}>공연정보</button>
      {/* ticket_review 추후 확장예정 */}
      {/* <button type="button" onClick={handleTabClick} name="ticket_review" className={cx({'on': detail === 'ticket_review'})}>관람후기&#40;999+&#41;</button> */}
    </menu>

    {detail === 'ticket_info' && <div className={sty.ticket_main_info_detail}>공연상세</div>}
    {/* ticket_review 추후 확장예정 */}
    {/* {detail === 'ticket_review' && <TicketReviewList/>} */}
  </article>
  );
}

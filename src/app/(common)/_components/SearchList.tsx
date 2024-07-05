'use client';

import React, { useEffect, useState } from 'react';
import sty from './searchPage.module.css';
import TicketList from './TicketList';
import { faker } from '@faker-js/faker';

type ISearchSortFillter = {
  sort: 'all' | 'more_correct' | 'immediate' | 'hit';
  setSort: () => void;
};

export type ITicketData = {
  id: number;
  title: string;
  place: string;
  ticketImgUrl?: string;
  period_start: string | Date;
  period_end: string | Date;
  is_liked?: boolean;
  star: number;
  review: number;
};

export default function SearchList() {
  const [sort, setSort] = useState<ISearchSortFillter>();
  const [listData, setListData] = useState<ITicketData[]>();

  const handleSortBtn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const { name } = e.target as HTMLButtonElement;
    console.log(name);
  };

  useEffect(() => {
    setListData((p) => [
      {
        id: 1,
        title: '타이틀',
        place: '공연장소',
        is_liked: true,
        period_start: new Date(),
        period_end: new Date(),
        star: 9.8,
        review: 980,
      },
      {
        id: 2,
        title: '타이틀',
        place: '공연장소',
        period_start: new Date(),
        period_end: new Date(),
        star: 9.8,
        review: 980,
      },
      {
        id: 3,
        title: '타이틀',
        place: '공연장소',
        period_start: new Date(),
        period_end: new Date(),
        star: 9.8,
        review: 980,
      },
      {
        id: 4,
        title: '타이틀',
        place: '공연장소',
        period_start: new Date(),
        period_end: new Date(),
        star: 9.8,
        review: 980,
      },
    ]);
  }, []);

  return (
    <div className={sty.search_list_wrap} aria-label='티켓 리스트'>
      <div className={sty.search_list_top}>
        <h3>
          티켓<span className={sty.search_list_total}>&#40;{listData && listData.length}&#41;</span>
        </h3>
        <menu className={sty.search_sort_btn}>
          <button type='button' name='more_correct' onClick={handleSortBtn}>
            정확도순
          </button>
          <button type='button' name='immediate' onClick={handleSortBtn}>
            공연임박순
          </button>
          <button type='button' name='hit' onClick={handleSortBtn}>
            판매많은순
          </button>
        </menu>
      </div>

      <div className={sty.search_list_con} aria-label='티켓 리스트'>
        {listData && listData.map((ticket) => <TicketList key={ticket.id} listData={ticket} />)}
        {listData && listData.map((ticket) => <TicketList key={ticket.id} listData={ticket} />)}
      </div>
    </div>
  );
}

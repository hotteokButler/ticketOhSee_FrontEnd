'use client';

import React, { useState } from 'react';
import sty from './searchPage.module.css';
import TicketList from './TicketList';
import { faker } from '@faker-js/faker';

type ISearchSortFillter = {
  sort: 'all' | 'more_correct' | 'immediate' | 'hit';
  setSort: () => void;
};

export default function SearchList() {
  const [sort, setSort] = useState<ISearchSortFillter>();

  const listData = [
    {
      id: 1,
      title: '타이틀',
      place: '공연장소',
      ticketImgUrl: faker.image.urlPicsumPhotos({ width: 280 }),
      is_liked : true,
      period_start: new Date(),
      period_end: new Date(),
      star: 9.8,
      review: 980,
    },
    {
      id: 2,
      title: '타이틀',
      place: '공연장소',
      ticketImgUrl: faker.image.urlPicsumPhotos({ width: 280 }),
      period_start: new Date(),
      period_end: new Date(),
      star: 9.8,
      review: 980,
    },
    {
      id: 3,
      title: '타이틀',
      place: '공연장소',
      ticketImgUrl: faker.image.urlPicsumPhotos({ width: 280 }),
      period_start: new Date(),
      period_end: new Date(),
      star: 9.8,
      review: 980,
    },
    {
      id: 4,
      title: '타이틀',
      place: '공연장소',
      ticketImgUrl: faker.image.urlPicsumPhotos({ width: 280 }),
      period_start: new Date(),
      period_end: new Date(),
      star: 9.8,
      review: 980,
    },
  ];

  if (!listData) return;

  return (
    <div aria-label='티켓 리스트'>
      <div className={sty.search_list_top}>
        <h3>
          티켓<span className={sty.search_list_total}>&#40;{listData.length}&#41;</span>
        </h3>
        <menu className={sty.search_sort_btn}>
          <button type='button' data-id='more_correct'>
            정확도순
          </button>
          <button type='button' data-id='immediate'>
            공연임박순
          </button>
          <button type='button' data-id='hit'>
            판매많은순
          </button>
        </menu>
      </div>

      <div className={sty.search_list_con} aria-label='티켓 리스트'>
        {listData.map((ticket) => (
          <TicketList key={ticket.id} listData={ticket} />
        ))}
      </div>
    </div>
  );
}

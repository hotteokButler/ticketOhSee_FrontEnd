'use client';

import React, { useState } from 'react';
import sty from './searchPage.module.css';
import CalendarModule from '../../_lib/Calendar/CalendarModule';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import { SelectDate, SelectDateProp } from '@/app/_lib/Calendar/hooks/useCalander';

type IFillterCatData = {
  id: number;
  title: string;
  ariaId: string;
  isMultiSelect: boolean;
  FillterBtns: string[] | [];
};

type ISelectDate = SelectDateProp | SelectDateProp[] | SelectDate | string | string[];

const cx = classNames.bind(sty);

export default function SearchPageFillter() {
  const [selectedDate, setSelectedDate] = useState<ISelectDate>(null);

  if (selectedDate) {
    if (Array.isArray(selectedDate)) {
      const [{ $d: $s_d }, { $d: $f_d }] = selectedDate as SelectDateProp[];

      console.log('시작 ', $s_d);
      console.log('끝', $f_d);
    } else {
      const { $d } = selectedDate as SelectDateProp;
      console.log('선택 ', $d);
    }
  }

  const fillterCatData: IFillterCatData[] = [
    {
      id: 1,
      title: '장르',
      ariaId: 'genre',
      isMultiSelect: true,
      FillterBtns: ['연극', '뮤지컬', '콘서트', '아동/가족', '클래식/무용', '전시/행사'],
    },
    {
      id: 2,
      title: '판매상태',
      ariaId: 'state',
      isMultiSelect: false,
      FillterBtns: ['판매중', '판매종료'],
    },
    {
      id: 3,
      title: '날짜',
      ariaId: 'date',
      isMultiSelect: false,
      FillterBtns: [],
    },
    {
      id: 4,
      title: '지역',
      ariaId: 'loaction',
      isMultiSelect: true,
      FillterBtns: [
        '서울',
        '경기',
        '부산',
        '전라',
        '강원',
        '인천',
        '대구',
        '경남',
        '충청',
        '대전',
        '울산',
        '제주',
        '광주',
        '경북',
      ],
    },
  ];

  return (
    <aside className={sty.search_fillter_wrap}>
      <div className={sty.search_fillter_con}>
        <h4>필터</h4>

        {fillterCatData &&
          fillterCatData.map(({ id, title, ariaId, isMultiSelect, FillterBtns }) => {
            if (title !== '날짜') {
              // 날짜 카테고리의 경우 캘린더 import
              return (
                <div className={sty.search_input_con} key={id}>
                  <h5>
                    {title}
                    {isMultiSelect && <span className={sty.search_input_sub}>&#40;중복 선택 가능&#41;</span>}
                  </h5>
                  {FillterBtns.length > 0 && (
                    <menu className={cx({ search_multiple_select: isMultiSelect })} data-wrap={ariaId}>
                      {FillterBtns.map((btns, idx) => (
                        <button type='button' name={btns} key={idx}>
                          {btns}
                        </button>
                      ))}
                    </menu>
                  )}
                </div>
              );
            } else {
              return (
                <div className={sty.search_input_con} key={id}>
                  <h5>{title}</h5>
                  <div className={sty.search_calender} data-wrap={ariaId}>
                    {/* 날짜 범위 없을 때는 null 명시 */}
                    <CalendarModule getTimeRange={null} setOtherModuleState={setSelectedDate} />
                  </div>
                </div>
              );
            }
          })}
      </div>
    </aside>
  );
}

'use client';

import React from 'react';
import sty from './searchPage.module.css';
import CalendarModule from './CalendarModule';

export default function SearchPageFillter() {
  return (
    <aside className={sty.search_fillter_wrap}>
      <div className={sty.search_fillter_con}>
        <h4>필터</h4>

        <div className={sty.search_input_con}>
          <h5>장르 <span className={sty.search_input_sub}>&#40;중복 선택 가능&#41;</span></h5>
          <menu>
            <button type="button" name='연극'>연극</button>
            <button type="button" name='뮤지컬'>뮤지컬</button>
            <button type="button" name='콘서트'>콘서트</button>
            <button type="button" name='아동/가족'>아동&#47;가족</button>
            <button type="button" name='클래식/무용'>클래식&#47;무용</button>
            <button type="button" name='전시/행사'>전시&#47;행사</button>
          </menu>
        </div>

        <div className={sty.search_input_con}>
          <h5>판매상태</h5>
          <menu>
            <button type="button" name='판매중'>판매중</button>
            <button type="button" name='판매종료'>판매종료</button>
          </menu>
        </div>

        <div className={sty.search_input_con}>
          <h5>날짜</h5>
          <div className={sty.search_calender}>
            <CalendarModule/>
          </div>
        </div>


        <div className={sty.search_input_con}>
          <h5>지역 <span className={sty.search_input_sub}>&#40;중복 선택 가능&#41;</span></h5>
          <menu>
            <button type="button" name='서울'>서울</button>
            <button type="button" name='경기'>경기</button>
            <button type="button" name='부산'>부산</button>
            <button type="button" name='전라'>전라</button>
            <button type="button" name='강원'>강원</button>
            <button type="button" name='인천'>인천</button>
            <button type="button" name='대구'>대구</button>
            <button type="button" name='경남'>경남</button>
            <button type="button" name='충청'>충청</button>
            <button type="button" name='대전'>대전</button>
            <button type="button" name='울산'>울산</button>
            <button type="button" name='제주'>제주</button>
            <button type="button" name='광주'>광주</button>
            <button type="button" name='경북'>경북</button>
          </menu>
        </div>

      </div>
    </aside>
  );
}

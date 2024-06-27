'use client';

import React, { useEffect, useRef } from 'react';
import { register } from 'swiper/element-bundle';
import classNames from 'classnames/bind';
import sty from './mainArticle.module.css';
import { SwiperRef } from '@/type/swiper';
import { LuCalendarClock } from 'react-icons/lu';
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import Link from 'next/link';

const cx = classNames.bind(sty);

export default function MainArticleSlide() {
  const swiperRef = useRef<SwiperRef>(null);
  const swiperNextBtnRef = useRef<HTMLButtonElement>(null);
  const swiperPrevBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    register();

    const params = {
      speed: 500,
      loop: true,
      loopedSlides: 12,
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: swiperNextBtnRef.current,
        prevEl: swiperPrevBtnRef.current,
      },
      injectStyles: [
        `
        ::slotted(swiper-slide) {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        `,
      ],
      // autoplay: {
      //   delay: 5000,
      // },
    };

    swiperRef.current && Object.assign(swiperRef.current, params);
    swiperRef.current?.initialize();
  }, []);

  return (
    <div className={cx('mainArticleSl_outer')}>
      <div className={cx('mainArticleSl_wrap', '')}>
        <swiper-container id='swiper-article' init={false} ref={swiperRef}>
          <swiper-slide>
            <Link href='#' scroll={false}>
              <div className={cx('mainArticleSl_li')}>
                <div className={cx('img_con')}>
                  <img src='./test/li_01.jpeg' alt='sl01' />
                </div>
                <div className={cx('li_tag')}>
                  <button type='button'>단독판매</button>
                  <button type='button'>인기</button>
                </div>
                <h5 className={cx('li_tit')}>타이틀</h5>
                <p className={cx('li_sub')}>공연장소</p>
                <span className={cx('li_time')}>
                  <LuCalendarClock />
                  <span data-datetime='open'>2024-01-01</span>
                  ~
                  <span data-datetime='close'>2024-04-01</span>
                </span>
              </div>
            </Link>
          </swiper-slide>
          <swiper-slide>
            <Link href='#' scroll={false}>
              <div className={cx('mainArticleSl_li')}>
                <div className={cx('img_con')}>
                  <img src='./test/li_02.jpeg' alt='sl02' />
                </div>
                <div className={cx('li_tag')}>
                  <button type='button'>단독판매</button>
                  <button type='button'>인기</button>
                </div>
                <h5 className={cx('li_tit')}>타이틀</h5>
                <p className={cx('li_sub')}>공연장소</p>
                <span className={cx('li_time')}>
                  <LuCalendarClock />
                  <span data-datetime='open'>2024-01-01</span>
                  ~
                  <span data-datetime='close'>2024-04-01</span>
                </span>
              </div>
            </Link>
          </swiper-slide>
          <swiper-slide>
            <Link href='#' scroll={false}>
              <div className={cx('mainArticleSl_li')}>
                <div className={cx('img_con')}>
                  <img src='./test/li_03.jpeg' alt='sl03' />
                </div>
                <div className={cx('li_tag')}>
                  <button type='button'>단독판매</button>
                  <button type='button'>인기</button>
                </div>
                <h5 className={cx('li_tit')}>타이틀</h5>
                <p className={cx('li_sub')}>공연장소</p>
                <span className={cx('li_time')}>
                  <LuCalendarClock />
                  <span data-datetime='open'>2024-01-01</span>
                  ~
                  <span data-datetime='close'>2024-04-01</span>
                </span>
              </div>
            </Link>
          </swiper-slide>
          <swiper-slide>
            <Link href='#' scroll={false}>
              <div className={cx('mainArticleSl_li')}>
                <div className={cx('img_con')}>
                  <img src='./test/li_04.jpeg' alt='sl04' />
                </div>
                <div className={cx('li_tag')}>
                  <button type='button'>단독판매</button>
                  <button type='button'>인기</button>
                </div>
                <h5 className={cx('li_tit')}>타이틀</h5>
                <p className={cx('li_sub')}>공연장소</p>
                <span className={cx('li_time')}>
                  <LuCalendarClock />
                  <span data-datetime='open'>2024-01-01</span>
                  ~
                  <span data-datetime='close'>2024-04-01</span>
                </span>
              </div>
            </Link>
          </swiper-slide>
          <swiper-slide>
            <Link href='#' scroll={false}>
              <div className={cx('mainArticleSl_li')}>
                <div className={cx('img_con')}>
                  <img src='./test/li_05.jpeg' alt='sl05' />
                </div>
                <div className={cx('li_tag')}>
                  <button type='button'>단독판매</button>
                  <button type='button'>인기</button>
                </div>
                <h5 className={cx('li_tit')}>타이틀</h5>
                <p className={cx('li_sub')}>공연장소</p>
                <span className={cx('li_time')}>
                  <LuCalendarClock />
                  <span data-datetime='open'>2024-01-01</span>
                  ~
                  <span data-datetime='close'>2024-04-01</span>
                </span>
              </div>
            </Link>
          </swiper-slide>
          <swiper-slide>
            <Link href='#' scroll={false}>
              <div className={cx('mainArticleSl_li')}>
                <div className={cx('img_con')}>
                  <img src='./test/li_06.jpeg' alt='sl06' />
                </div>
                <div className={cx('li_tag')}>
                  <button type='button'>단독판매</button>
                  <button type='button'>인기</button>
                </div>
                <h5 className={cx('li_tit')}>타이틀</h5>
                <p className={cx('li_sub')}>공연장소</p>
                <span className={cx('li_time')}>
                  <LuCalendarClock />
                  <span data-datetime='open'>2024-01-01</span>
                  ~
                  <span data-datetime='close'>2024-04-01</span>
                </span>
              </div>
            </Link>
          </swiper-slide>
        </swiper-container>

      <button ref={swiperPrevBtnRef} className={cx('mainArticleSl_btn','mainArticleSl_btn_prev')} type="button"><GoChevronLeft/></button>
      <button ref={swiperNextBtnRef} className={cx('mainArticleSl_btn','mainArticleSl_btn_next')} type="button"><GoChevronRight/></button>
      </div>
    </div>
  );
}

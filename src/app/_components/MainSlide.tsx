'use client';

import React, { useEffect, useRef } from 'react';
import { Swiper } from 'swiper/types';
import { register } from 'swiper/element-bundle';
import classNames from 'classnames/bind';
import sty from './mainSlide.module.css';

const cx = classNames.bind(sty);

type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void };

export default function MainSlide() {
  const swiperRef = useRef<SwiperRef>(null);
  const swiperTumbRef = useRef<SwiperRef>(null);

  useEffect(() => {
    register();

    const params = {
      speed: 500,
      loop: true,
      loopedSlides: 6,
      thumbs: {
        swiper: swiperTumbRef.current,
      },
      injectStyles: [
        `
        ::slotted(swiper-slide) {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: grab;
        }
        `,
        `
        ::slotted(swiper-slide):active {
          cursor:grabbing;
        }
        `

      ],
      // autoplay: {
      //   delay: 5000,
      // },
    };

    const thumbParams = {
      slidesPerView: 6,
      speed: 500,
      loop: false,
      loopedSlides: 6,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 15,
      injectStyles: [
        `
        ::slotted(swiper-slide) {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2px;
          border :2px solid var(--white-color);
          cursor: pointer;
        }
        `,
        `
        ::slotted(swiper-slide.swiper-slide-thumb-active) {
          border-color: var(  --input-focus);
        }
        `,
      ],
    };

    swiperRef.current && Object.assign(swiperRef.current, params);
    swiperTumbRef.current && Object.assign(swiperTumbRef.current, thumbParams);
    swiperRef.current?.initialize();
    swiperTumbRef.current?.initialize();
  }, []);

  return (
    <div className={cx('mainSl_outer')}>
      <div className={cx('mainSl_wrap', 'mainSl_main_wrap')}>
        <swiper-container id='swiper-main' init={false} ref={swiperRef}>
          <swiper-slide>
            <img src='./test/sl_01.jpeg' alt='sl01' />
          </swiper-slide>
          <swiper-slide>
            <img src='./test/sl_02.jpeg' alt='sl02' />
          </swiper-slide>
          <swiper-slide>
            <img src='./test/sl_03.jpeg' alt='sl03' />
          </swiper-slide>
          <swiper-slide>
            <img src='./test/sl_04.jpeg' alt='sl04' />
          </swiper-slide>
          <swiper-slide>
            <img src='./test/sl_05.jpeg' alt='sl05' />
          </swiper-slide>
          <swiper-slide>
            <img src='./test/sl_06.jpeg' alt='sl06' />
          </swiper-slide>
        </swiper-container>
      </div>
      <div className={cx('mainSl_wrap', 'mainSl_thumb_wrap')}>
        <div className={cx('mainSl_thumb_con')}>
          <swiper-container id='swiper-thumb' init={false} ref={swiperTumbRef}>
            <swiper-slide>
              <div className={cx('mainSl_thumb_img')}>
                <img src='./test/sl_01.jpeg' alt='sl01' />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className={cx('mainSl_thumb_img')}>
                <img src='./test/sl_02.jpeg' alt='sl02' />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className={cx('mainSl_thumb_img')}>
                <img src='./test/sl_03.jpeg' alt='sl03' />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className={cx('mainSl_thumb_img')}>
                <img src='./test/sl_04.jpeg' alt='sl04' />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className={cx('mainSl_thumb_img')}>
                <img src='./test/sl_05.jpeg' alt='sl05' />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className={cx('mainSl_thumb_img')}>
                <img src='./test/sl_06.jpeg' alt='sl06' />
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
  );
}

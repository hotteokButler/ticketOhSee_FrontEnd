'use client';

import React, { useEffect, useRef } from 'react';
import { Swiper } from 'swiper/types';
import { register } from 'swiper/element-bundle';

type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void };

export default function MainSlide() {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    register();

    const params = {
      speed: 500,
      loop: true,
      // autoplay: {
      //   delay: 5000,
      // },
    };

    swiperRef.current && Object.assign(swiperRef.current, params);
    swiperRef.current?.initialize();
  }, []);

  return (
    <div>
      <swiper-container init={false} ref={swiperRef}>
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
  );
}

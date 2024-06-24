'use client';
import Link from 'next/link';
import React from 'react';
import sty from './css/header.module.css';


export default function HeaderTabs() {
  const me = {
    user_id: 'anonymus',
    user_name: '테스트 익명',
  };

  return (
    <nav className={sty.headerTab_btn}>
      <Link href='/login'>로그인</Link>
      <Link href='/signup'>회원가입</Link>
      {(me.user_id && me.user_id !=='')  && <Link href={`/users/${me.user_id}`}>마이페이지</Link>}
    </nav>
  );
}

"use client";

import Link from 'next/link';
import React from 'react';
import sty from './login.module.css';

export default function LoginNavBtns() {
  return (
    <nav className={sty.login_navBtn_wrap}>
      <Link href="/user/find-user">아이디 찾기</Link>
      <Link href="/user/find-password">비밀번호 찾기</Link>
      <Link href="/signup">회원가입</Link>
    </nav>
  )
}

"use client";

import Link from 'next/link';
import React from 'react'

export default function LoginNavBtns() {
  return (
    <nav>
      <Link href="/user/find-user">아이디 찾기</Link>
      <Link href="/user/find-password">비밀번호 찾기</Link>
      <Link href="/signup">회원가입</Link>
    </nav>
  )
}

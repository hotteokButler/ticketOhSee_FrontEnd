'use client';
import Link from 'next/link';
import React from 'react';
import sty from './footer.module.css';



export default function FooterNav() {
  return (
    <ul className={sty.footer_nav}>
      <li><Link href="#">이용약관</Link></li>
      <li><Link href="#">개인정보처리방침</Link></li>
      <li><Link href="#">위치기반서비스 이용약관</Link></li>
      <li><Link href="#">티켓판매안내</Link></li>
      <li><Link href="#">고객센터</Link></li>
    </ul>
  )
}

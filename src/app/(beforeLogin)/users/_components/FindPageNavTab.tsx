'use client';

import React from 'react';
import sty from './findPage.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames/bind';

const cx = classNames.bind(sty);

export default function FindPageNavTab() {
  const pathname = usePathname();
  const ft_pathname = pathname.split('/');

  return (
    <nav className={sty.find_nav_wrap}>
      <Link className={cx({ "on": ft_pathname.includes('find-user') })} href='/users/find-user'>
        아이디 찾기
      </Link>
      <Link className={cx({ "on": ft_pathname.includes('find-password') })} href='/users/find-password'>
        비밀번호 찾기
      </Link>
    </nav>
    
  );
}

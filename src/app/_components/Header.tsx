import React from 'react';
import Logo from './Logo';
import sty from './header.module.css';
import SearchCon from './SearchCon';
import HeaderTabs from './HeaderTabs';

export default function Header() {
  return (
    <header className={sty.header_wrap}>
      <div  className={sty.header}>
        <Logo />
        <SearchCon />
      </div>
    </header>
  );
}

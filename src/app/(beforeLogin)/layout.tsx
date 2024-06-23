import React from 'react';
import sty from './_components/beforeLoginLayout.module.css';
import Logo from '../_components/Logo';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={sty.main_wrapper}>
      <div className={sty.main_top}>
        <Logo />
      </div>
      <div className={sty.main_con}>{children}</div>
    </main>
  );
}

import React from 'react';
import sty from '../_components/main.module.css';

export default function CommonLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <main className={sty.main_wrapper}>
      {children} 
      {modal}
    </main>
  );
}

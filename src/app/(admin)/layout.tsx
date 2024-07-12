import React from 'react';
import sty from './_components/adminLayout.module.css';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <div className={sty.main_wrapper}>
        <Header />
        <div className={sty.main_con}>{children}</div>
      </div>
      <Footer />
    </>
  );
}

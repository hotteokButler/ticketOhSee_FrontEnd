import React from 'react';
import sty from './mainArticle.module.css';

interface IProp {
  children: React.ReactNode;
  sub_title?: string;
}

export default function MainArticle({ children, sub_title }: IProp) {
  return (
    <article className={sty.mainArticle_wrap}>
      {sub_title && ( // sub_title 있을 시
        <h3>{sub_title}</h3>
      )}
      {
        //slide + button 영역
        children
      }
    </article>
  );
}

'use client';
import Link from 'next/link';
import React from 'react';
import sty from './mainArticle.module.css';
import { HiMiniChevronRight } from 'react-icons/hi2';

type IProp = {
  mf?: string; // from main_page_fillter_query,
  btn_txt: string;
};

export default function MainArticleBtn({ mf, btn_txt }: IProp) {
  return (
    <Link href={`/search?mf=${mf}`} className={sty.mainArticleSl_more_btn}>
      {btn_txt}
      <HiMiniChevronRight />
    </Link>
  );
}

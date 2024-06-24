import React from 'react';
import sty from './signUp.module.css';

export default function Subtitle({ sub_text }: { sub_text: string }) {
  return <h3 className={sty.sub_title}>{sub_text}</h3>;
}

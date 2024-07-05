import React from 'react';
import { MdHideImage } from 'react-icons/md';
import sty from './noImage.module.css';

export default function NoImage() {
  return (
    <div className={sty.noImage_wrap}>
      <p className={sty.noImage_con}>
        <MdHideImage />
      </p>
    </div>
  );
}

import React from 'react';
import sty from './findPage.module.css';
import FindPageNavTab from './FindPageNavTab';
import FindPasswordForm from './FindPasswordForm';

export default function FindPassword() {
  return (
    <div className={sty.find_wrap}>
      <FindPageNavTab />
      <span className={sty.find_help}><sup>*</sup> 비밀번호를 찾을 방법을 선택해 주세요</span>
      <FindPasswordForm findUserWith="email"/>
      <FindPasswordForm findUserWith="phone"/>
    </div>
  );
}

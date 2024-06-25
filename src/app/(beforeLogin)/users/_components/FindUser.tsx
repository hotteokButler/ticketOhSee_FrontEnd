import React from 'react';
import sty from './findPage.module.css';
import FindPageNavTab from './FindPageNavTab';
import FindUserForm from './FindUserForm';

export default function FindUser() {
  return (
    <div className={sty.find_wrap}>
      <FindPageNavTab />
      <span className={sty.find_help}><sup>*</sup> 아이디를 찾을 방법을 선택해 주세요</span>
      <br />
      <FindUserForm findUserWith='email'/>
      <FindUserForm findUserWith='phone'/>
    </div>
  );
}

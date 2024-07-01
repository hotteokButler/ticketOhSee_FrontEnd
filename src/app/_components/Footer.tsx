import React from 'react';
import sty from './footer.module.css';
import Logo from './Logo';
import FooterNav from './FooterNav';

export default function Footer() {
  return (
    <footer className={sty.footer_wrap}>
      <FooterNav/>
      <div className={sty.footer_top}>
        <div className={sty.footer_logo}>
          <Logo />
        </div>
      </div>
      <dl className={sty.footer_btm}>
          <dd>서울 00구 00대로 1234 0000빌딩 0층[012334]</dd>
          <dd>
            <span><b>사업자등록번호</b>000-00-00000</span>
            <span><b>고객센터</b>0000-0000</span>
            <span><b>이메일</b>ticket-ohsee@ticket.com</span>
          </dd>
          <dd className={sty.footer_copyright}>Copyright &copy; TicketOhSee Corp. All Rights Reserved.</dd>
      </dl>
    </footer>
  );
}

import React, { SetStateAction } from 'react';
import sty from './ticketHelpInfo.module.css';
import { IoClose } from 'react-icons/io5';

type IProp = {
  set_active: React.Dispatch<SetStateAction<boolean>>;
};

export default function TicketHelpInfo({ set_active }: IProp) {

  const handleHelpActive : React.MouseEventHandler<HTMLButtonElement>= (e) => {
    e.preventDefault();
    set_active(prev => !prev);
  }

  return (
    <div className={sty.ticket_help_wrap}>
      <div className={sty.ticket_help_con}>
        <div className={sty.ticket_help_top}>
          <h5>좌석 선택시 유의사항</h5>
          <button type='button' onClickCapture={handleHelpActive}>
            <IoClose />
          </button>
        </div>
        <p className={sty.ticket_help_txt}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate itaque doloremque nulla non voluptatum quae
          id nisi nostrum aspernatur. Atque, earum facilis. Nam odit consectetur, excepturi fugiat aspernatur atque id!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate itaque doloremque nulla non voluptatum quae
          id nisi nostrum aspernatur. Atque, earum facilis. Nam odit consectetur, excepturi fugiat aspernatur atque id!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate itaque doloremque nulla non voluptatum quae
          id nisi nostrum aspernatur. Atque, earum facilis. Nam odit consectetur, excepturi fugiat aspernatur atque id!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate itaque doloremque nulla non voluptatum quae
          id nisi nostrum aspernatur. Atque, earum facilis. Nam odit consectetur, excepturi fugiat aspernatur atque id!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate itaque doloremque nulla non voluptatum quae
          id nisi nostrum aspernatur. Atque, earum facilis. Nam odit consectetur, excepturi fugiat aspernatur atque id!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate itaque doloremque nulla non voluptatum quae
          id nisi nostrum aspernatur. Atque, earum facilis. Nam odit consectetur, excepturi fugiat aspernatur atque id!
        </p>
      </div>
    </div>
  );
}

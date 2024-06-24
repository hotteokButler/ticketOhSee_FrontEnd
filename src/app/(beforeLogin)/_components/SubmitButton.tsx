import React from 'react';
import sty from '../_components/submitButton.module.css';

type IProp = {
  btn_text: string;
  btn_type: 'button' | 'submit' | 'reset' | undefined;
  isDisabled: boolean;
};

export default function SubmitButton({ btn_text, btn_type, isDisabled }: IProp) {
  return (
    <button className={sty.submit_btn} type={btn_type !== undefined ? btn_type : 'button'} disabled={isDisabled}>
      {btn_text}
    </button>
  );
}

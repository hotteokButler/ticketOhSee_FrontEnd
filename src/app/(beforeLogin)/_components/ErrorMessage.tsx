import React from 'react';
import { IoIosAlert } from 'react-icons/io';
import sty from '../_components/signUp.module.css'

interface IError {
  message: string;
}

export default function ErrorMessage(props: IError) {
  const { message } = props;

  return (
    <div className={sty.error_message}>
      <IoIosAlert /> <span>{message}</span>
    </div>
  );
}
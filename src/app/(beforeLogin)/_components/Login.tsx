'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useState } from 'react';
import sty from './login.module.css';
import ErrorMessage from './ErrorMessage';
import classNames from 'classnames/bind';
import SubmitButton from './SubmitButton';
import Subtitle from './Subtitle';

const cx = classNames.bind(sty);

interface ILoginForm {
  user_id: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ILoginForm>({ mode: 'all' });

  // handle submit
  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    const { user_id, password } = data;

    const new_data = {
      user_id: user_id.trim(),
      password: password,
    };

    console.log(new_data);

    reset();
  };

  return (
    <>
    <Subtitle sub_text="로그인"/>
      <div className={sty.login_wrap}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 아이디 */}
          <div className={sty.signup_input_con}>
            <input
              type='text'
              id='user_id'
              placeholder='아이디'
              {...register('user_id', {
                required: '필수입력사항입니다.',
                pattern: {
                  value: /^[a-zA-Z0-9]{6,20}$/,
                  message: '입력양식에 맞지 않습니다',
                },
              })}
            />
          </div>
          {errors.user_id && <ErrorMessage message={String(errors.user_id.message)} />}

          {/* 비밀번호 */}
          <div className={sty.signup_input_con}>
            <input
              type='password'
              id='password'
              placeholder='비밀번호'
              {...register('password', {
                required: '필수입력사항입니다.',
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[?!@#$%^*+=-])(?=.*[0-9]).{6,20}$/,
                  message: '입력양식에 맞지 않습니다',
                },
              })}
            />
          </div>
          {errors.password && <ErrorMessage message={String(errors.password.message)} />}
          <SubmitButton btn_type='submit' btn_text='로그인' isDisabled={!isValid} />
        </form>
      </div>
    </>
  );
}

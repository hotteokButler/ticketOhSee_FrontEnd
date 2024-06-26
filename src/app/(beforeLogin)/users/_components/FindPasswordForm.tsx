'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import sty from './findPage.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import classNames from 'classnames/bind';
import ErrorMessage from '../../_components/ErrorMessage';

interface IFindPasswordForm {
  user_id: string;
  user_name: string;
  email?: string;
  phone?: number | string;
}

type IProp = {
  findUserWith: 'email' | 'phone';
};

const cx = classNames.bind(sty);

export default function FindPasswordForm({ findUserWith }: IProp) {
  const [toggle, setToggle] = useState(true);
  let subtit = '';

  switch (findUserWith) {
    case 'email':
      subtit = '등록된 이메일로 찾기';
      break;

    case 'phone':
      subtit = '등록된 휴대폰번호로 찾기';
      break;

    default:
      subtit = '등록된 이메일로 찾기';
      break;
  }

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<IFindPasswordForm>({ mode: 'onChange' });

  const handleToggleForm: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setToggle((prev) => !prev);
  };

  const onSubmit: SubmitHandler<IFindPasswordForm> = async (data) => {
    const { user_id, user_name, email, phone } = data;

    let new_data: IFindPasswordForm = {
      user_id: user_id.trim(),
      user_name: user_name.trim(),
    };

    if (email) {
      new_data = {
        ...new_data,
        email: email.trim(),
      };
    }
    if (phone) {
      new_data = {
        ...new_data,
        phone: typeof phone === 'string' ? phone.trim() : phone,
      };
    }
    console.log(new_data);

    reset();
  };
  return (
    <div className={sty.find_form_wrap}>
      <button type='button' className={cx('find_form_toggle', { active: toggle })} onClick={handleToggleForm}>
        <span>{subtit}</span> <IoIosArrowDown />
      </button>
      <div className={cx('find_form', { active: toggle })}>
        <form name={`w_${findUserWith}`} onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            placeholder='아이디'
            {...register('user_id', {
              required: '필수 입력 값입니다.',
              pattern: {
                value: /^[a-zA-Z0-9]{6,20}$/,
                message: '올바른 형식으로 입력해주세요',
              },
            })}
          />
          {errors.user_id?.message && <ErrorMessage message={String(errors.user_id?.message)} />}
          <input
            type='text'
            placeholder='이름'
            {...register('user_name', {
              required: '필수 입력 값입니다.',
              pattern: {
                value: /^[ㄱ-ㅎ가-힣a-zA-Z]*$/,
                message: '한글 또는 영문으로 입력해주세요',
              },
            })}
          />
          {errors.user_name?.message && <ErrorMessage message={String(errors.user_name?.message)} />}

          {findUserWith == 'email' && (
            <input
              type='text'
              placeholder='이메일'
              {...register('email', {
                required: '필수 입력 값입니다.',
                validate: {
                  emailSelected: (val) => {
                    const regexWithConfig = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;
                    let test = val ? regexWithConfig.test(val) : false;
                    return test ? true : '이메일이 형식에 맞지 않습니다.';
                  },
                },
              })}
            />
          )}
          {errors?.email?.message && findUserWith == 'email' && (
            <ErrorMessage message={String(errors?.email?.message)} />
          )}

          {findUserWith == 'phone' && (
            <input
              type='text'
              placeholder='등록된 휴대폰번호 (-없이 입력)'
              {...register('phone', {
                required: '필수 입력 값입니다.',
                pattern: {
                  value: /^([0-9]{3})([0-9]{3,4})([0-9]{4})$/,
                  message: '하이픈(-)을 빼고 전화번호를 입력해주세요',
                },
              })}
            />
          )}
          {errors?.phone?.message && findUserWith == 'phone' && (
            <ErrorMessage message={String(errors?.phone?.message)} />
          )}

          <button className={sty.find_form_submit} type='submit' disabled={!isValid}>
            확인
          </button>
        </form>
      </div>
    </div>
  );
}

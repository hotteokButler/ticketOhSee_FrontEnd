'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import sty from './header.module.css';
import { GoSearch } from "react-icons/go";

type Input = {
  searchQuery: string;
};

export default function SearchCon() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className={sty.search_con} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='searchQuery' className={sty.search_input}>
        <input type='text' id='searchQuery' placeholder='Search' {...register('searchQuery',{required: true})} />
        <span><GoSearch/></span>
      </label>
    </form>
  );
}

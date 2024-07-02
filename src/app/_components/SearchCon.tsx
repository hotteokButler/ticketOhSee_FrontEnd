'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import sty from './header.module.css';
import { GoSearch } from "react-icons/go";
import { useRouter, useSearchParams } from 'next/navigation';

type Input = {
  searchQuery: string;
};

export default function SearchCon() {

  const searchParams = useSearchParams();
  const searchQ = searchParams.get('q') || null;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>({defaultValues:{searchQuery : searchQ || ''}});


  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    router.push(`/search?q=${data.searchQuery}`);
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

'use client';

import Link from 'next/link';
import React from 'react';
import sty from './header.module.css'

export default function Logo() {
  return (
    <Link href="/" className={sty.logo}> 
      Ticket-OhSee
    </Link>
  )
}

'use client';
import React, { createContext, useState } from 'react';


// export type TicketDetailContextVal = 'ticket_info' | 'ticket_review';
export type TicketDetailContextVal = 'ticket_info';

export const TicketDetailContext = createContext({
  detail: 'ticket_info',
  setDetail: (value: TicketDetailContextVal) => {}
});

export default function TicketDetailProvider({ children }: { children: React.ReactNode }) {
  const [detail, setDetail] = useState('ticket_info');
  return <TicketDetailContext.Provider value={{ detail, setDetail }}>{children}</TicketDetailContext.Provider>;
}

import TicketReservModal from '../../../_components/TicketReservModal';

export default function BuyTicketParallelPage({
  params: { id },
  searchParams: { date },
}: {
  params: { id: string };
  searchParams: { date ?: string   };
}) {
  return <TicketReservModal id={id} date={ date} />;
}

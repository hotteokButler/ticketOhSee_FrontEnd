import TicketReservModal from "@/app/(common)/@modal/_components/TicketReservModal";

export default function BuyTicketPage({
  params: { id },
  searchParams: { date },
}: {
  params: { id: string };
  searchParams: { date ?: string };
}) {
  return <TicketReservModal id={id} date={date} />;
}

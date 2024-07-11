import Footer from '../../../_components/Footer';
import Header from '../../../_components/Header';
import TicketDetail from '../../_components/TicketDetail';
import sty from '../../_components/ticketDetail.module.css';
import TicketDetailContents from '../../_components/TicketDetailContents';
import TicketDetailProvider from '../../_components/TicketDetailProvider';
import TicketPickAndReserv from '../../_components/TicketPickAndReserv';

export default function TicketPage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className={sty.ticket_detail_wrapper}>
        <Header />
        <main className={sty.ticket_detail_main}>
          {/* 티켓 상세 좌측 */}
          <TicketDetail ticket_id={params.id}>
            <TicketDetailProvider>
              <TicketDetailContents/>
            </TicketDetailProvider>
          </TicketDetail>
          {/* 티켓 상세 우측 예약 */}
          <TicketPickAndReserv />
        </main>
      </div>
      <Footer />
    </>
  );
}

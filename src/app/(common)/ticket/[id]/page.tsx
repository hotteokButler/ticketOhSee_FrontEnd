import Footer from '../../../_components/Footer';
import Header from '../../../_components/Header';
import TicketDetail from '../../_components/TicketDetail';
import sty from '../../_components/ticketDetail.module.css'
import TicketPickAndReserv from '../../_components/TicketPickAndReserv';


export default function TicketPage() {
  return (
    <>
      <div className={sty.ticket_detail_wrapper}>
        <Header />
        <main className={sty.ticket_detail_con}>
            <TicketDetail/>
            <TicketPickAndReserv/>
        </main>
      </div>
      <Footer />
    </>
  );
}

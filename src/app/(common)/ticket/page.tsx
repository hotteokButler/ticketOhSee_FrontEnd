import Footer from '../../_components/Footer';
import Header from '../../_components/Header';
import sty from '../_components/searchPage.module.css'


export default function TicketPage() {
  return (
    <>
      <div className={sty.main_search_wrapper}>
        <Header />

      </div>
      <Footer />
    </>
  );
}

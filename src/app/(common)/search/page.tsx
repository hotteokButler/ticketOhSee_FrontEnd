import Footer from '../../_components/Footer';
import Header from '../../_components/Header';
import SearchList from '../_components/SearchList';
import SearchPageFillter from '../_components/SearchPageFillter';
import sty from '../_components/searchPage.module.css'


export default function SearchPage() {
  return (
    <>
      <div className={sty.main_search_wrapper}>
        <Header />
        <main className={sty.main_search_con}>
          <SearchPageFillter/>
          <SearchList/>
        </main>
      </div>
      <Footer />
    </>
  );
}

import Footer from './_components/Footer';
import Header from './_components/Header';
import MainArticle from './_components/MainArticle';
import MainArticleBtn from './_components/MainArticleBtn';
import MainArticleSlide from './_components/MainArticleSlide';
import MainSlide from './_components/MainSlide';
import sty from './_components/main.module.css';

export default function Home() {
  return (
    <>
      <div className={sty.main_wrapper}>
        <Header />
        <MainSlide />
        {/* ticket open */}
        <MainArticle sub_title='TICKET OPEN'>
          <MainArticleSlide />
          <MainArticleBtn mf='upcomming' btn_txt='오픈예정 전체보기' />
        </MainArticle>
        {/* popular list */}
        <MainArticle sub_title='Popular List'>
          <MainArticleSlide />
          <MainArticleBtn mf='popular' btn_txt='인기 공연 전체보기' />
        </MainArticle>
      </div>
      <Footer />
    </>
  );
}

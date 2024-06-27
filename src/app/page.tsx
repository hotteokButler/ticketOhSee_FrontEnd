import Header from './_components/Header';
import MainArticle from './_components/MainArticle';
import MainArticleSlide from './_components/MainArticleSlide';
import MainSlide from './_components/MainSlide';
import sty from './_components/main.module.css';

export default function Home() {
  return (
    <div className={sty.main_wrapper}>
      <Header />
      <MainSlide />
      {/* ticket open */}
      <MainArticle sub_title='TICKET OPEN'>
        <MainArticleSlide />
      </MainArticle>
      {/* popular list */}
      <MainArticle sub_title='Popular List'>
        <MainArticleSlide />
      </MainArticle>
    </div>
  );
}

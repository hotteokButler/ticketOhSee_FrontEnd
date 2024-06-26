import Header from './_components/Header';
import MainSlide from './_components/MainSlide';
import sty from './_components/main.module.css';

export default function Home() {
  return (
    <div className={sty.main_wrapper}>
      <Header />
      <MainSlide />
    </div>
  );
}

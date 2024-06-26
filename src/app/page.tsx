import Header from './_components/Header';
import sty from './_components/main.module.css'

export default function Home() {
  return <div className={sty.main_wrapper}>
    <Header/>
  </div>;
}

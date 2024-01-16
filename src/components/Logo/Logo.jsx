/* eslint-disable max-len */
import s from './Logo.module.scss';
import logoSvg from './logo.svg'; // 2-Й способ
// import { ReactComponent as LogoSvg } from './logo.svg'; 3-й способ для react-app

export const Logo = () => (
  <div>
    <a className={s.link} href="/">
      <img className={s.img} src={logoSvg} alt="Логотип мебельного маркета Koff" />  {/* 2-Й способ */}
      {/* <img src="/img/logo.svg" alt="Логотип мебельного маркета Koff" />   1-Й способ */}
    </a>
  </div>
);

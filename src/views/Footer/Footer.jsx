import { Container } from '../Container/Container';
import s from './Footer.module.scss';

export const Footer = () => (
  <footer className={s.footer}>
    <Container className={s.footer__container}>
      <a href="/">
        <img
          className={s.footer__logo}
          src="/img/logo.svg"
          alt="Логотип мебельного маркета Koff" />
      </a>
      <div className={s.footer__contacts}>
        <a className={s.contacts__phone} href="tel:+7 (939) 839 12 97"></a>
      </div>
      <ul className={s.footer__developerList}>
        Developers
      </ul>
      <p className={s.footer__copyright}>
        © Koff, 2023
      </p>
    </Container>
  </footer>
);

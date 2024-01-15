import s from './Footer.module.scss';
import { Container } from '../Container/Container';
import { Logo } from '../../components/Logo/Logo';
import { Contacts } from '../../components/Contacts/Contacts';
import { Developers } from '../../components/Developers/Developer';

export const Footer = () => (
  <footer className={s.footer}>
    <Container className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.contacts}>
        <Contacts />
      </div>
      <div className={s.developers}>
        <Developers />
      </div>
      <p className={s.copyright}>© Koff, 2024</p>
    </Container>
  </footer>
);

{/* <footer className={s.footer}>
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
</footer> */}

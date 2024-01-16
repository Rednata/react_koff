import s from './Navigation.module.scss';
import CartIcon from './bag.svg?react';
import { HeartIcon } from '../HeartIcon/HeartIcon';


export const Navigation = () => (
  <nav className={s.navigation}>
    <a className={s.link} href="/favotite">
      <span className={s.text}>Избранное</span>
      <HeartIcon className={s.svg}/>
    </a>
    <a className={s.link} href="/cart">
      <span className={s.text}>Корзина</span>
      <span>(0)</span>
      <CartIcon className={s.svg}/>
    </a>
  </nav>
);

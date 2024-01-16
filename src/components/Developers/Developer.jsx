/* eslint-disable no-unused-vars */
import s from './Developer.module.scss';

export const Developers = () => (
  <div>
    <ul className={s.developers}>
      <li className={s.item}>link
        Designer:&nbsp;
      <a
        className={s.link}
        href="#" target="_blank" rel="noreferrer">Anastasia Ilina</a>
      </li>
      <li className={s.item}>
        Developer:&nbsp;<a
          className={s.link}
          href="#" target="_blank" rel="noreferrer"></a>
      </li>
    </ul>
  </div>
);

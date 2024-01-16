import s from './CardItem.module.scss';
import { HeartIcon } from '../HeartIcon/HeartIcon';


export const CardItem = () => {
  console.log();
  return (
    <article className={s.card}>
      <img className={s.img} src="/img/photo.jpg" alt="Изображение" />
      <h3 className={s.title}>Кресло с подлокотниками</h3>
      <p className={s.price}>5 000 ₽</p>
      <button className={s.btn}>В корзину</button>
      <button className={s.like}>
        <HeartIcon />
      </button>
    </article>
  );
};

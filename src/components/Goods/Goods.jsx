import { Container } from '../../views/Container/Container';
import s from './Goods.module.scss';
import { CardItem } from '../CardItem/CardItem';

export const Goods = () => {
  console.log();
  return (
    <section className={s.goods}>
      <Container >
        <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
        <ul className={s.list}>
          <li>
            <CardItem />
          </li>
          <li>
            <CardItem />
          </li>
          <li>
            <CardItem />
          </li>
          <li>
            <CardItem />
          </li>
        </ul>
      </Container>
    </section>
  );
};

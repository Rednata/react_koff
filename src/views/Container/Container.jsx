import s from '../Container/Container.module.scss';

export const Container = (props) => {
  console.log();
  return props.className ?
    <div className={`${s.container} ${props.className}`}>
      {props.children}
    </div> :
    <div className={s.container}>{props.children}</div>
  ;
};

/* eslint-disable max-len */
import s from './SearchForm.module.scss';
import SearchIcon from './search-normal.svg?react';

export const SearchForm = () => (
  <div>
    <form className={s.form}>
      <input
        className={s.input}
        type="search" name="search" placeholder="Введите запрос"/>
      <button className={s.button} type="submit">
        <SearchIcon />
      </button>
    </form>
  </div>
);

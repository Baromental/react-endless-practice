import React, { useState } from 'react';
import s from '../styles.module.css';

export default function Searchbar({ handleSetQuery }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeValue = e => {
    setSearchValue(e.target.value);
    // this.setState({ searchValue: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleSetQuery(searchValue);
    setSearchValue('');
    // this.setState({ searchValue: '' });
  };

  return (
    <div>
      <header className={s.Searchbar}>
        <form onSubmit={handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            value={searchValue}
            onChange={handleChangeValue}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
}

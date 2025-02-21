import React from 'react';
import s from '../styles.module.css';

export default class Searchbar extends React.Component {
  state = {
    searchValue: '',
  };

  handleChangeValue = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSetQuery(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <div>
        <header className={s.Searchbar}>
          <form onSubmit={this.handleSubmit} className={s.SearchForm}>
            <button type="submit" className={s.SearchForm_button}>
              <span className={s.SearchForm_button_label}>Search</span>
            </button>

            <input
              className={s.SearchForm_input}
              value={this.state.searchValue}
              onChange={this.handleChangeValue}
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
}

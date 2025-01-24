import React from 'react';
import s from './Phonebook.module.css';
export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={s.wrapper} onSubmit={this.handleSubmit} action="">
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              onChange={this.handleChangeInput}
              value={name}
              required
            />
          </label>
          <label htmlFor="">
            Number
            <input
              type="tel"
              name="number"
              onChange={this.handleChangeInput}
              value={number}
              required
            />
          </label>
          <button>Add contact</button>
        </form>
      </>
    );
  }
}

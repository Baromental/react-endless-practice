import React, { useState } from 'react';
import s from './Phonebook.module.css';

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.wrapper} onSubmit={handleSubmit} action="">
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            onChange={handleChangeInput}
            value={name}
            required
          />
        </label>
        <label htmlFor="">
          Number
          <input
            type="tel"
            name="number"
            onChange={handleChangeInput}
            value={number}
            required
          />
        </label>
        <button>Add contact</button>
      </form>
    </>
  );
}

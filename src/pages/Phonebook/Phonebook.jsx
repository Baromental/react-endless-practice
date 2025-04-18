import React from 'react';
import ContactForm from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import s from './Phonebook.module.css';

export default function Phonebook() {
  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

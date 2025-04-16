import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import s from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/phonebook/selectors';

export default function Phonebook() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const storedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (storedContacts?.length) {
  //     setContacts(storedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const handleAddContact = ({ name, number }) => {
  //   const newContact = {
  //     id: nanoid(),
  //     name: name,
  //     number: number,
  //   };
  //   if (contacts.some(contact => contact.name === name)) {
  //     return alert(`${name} already in contacts.`);
  //   }
  //   setContacts(prev => [...prev, newContact]);
  // };

  // const getFilteredContact = e => {
  //   setFilter(e.target.value);
  // };

  const loweredFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(loweredFilter) ||
      contact.number.toLowerCase().includes(loweredFilter)
  );

  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter onFilter={getFilteredContact} filter={filter} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
}

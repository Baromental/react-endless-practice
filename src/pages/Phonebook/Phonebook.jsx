import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import s from './Phonebook.module.css';

export default function Phonebook() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts?.length) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} already in contacts.`);
    }
    setContacts(prev => [...prev, newContact]);
  };

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const getFilteredContact = e => {
    setFilter(e.target.value);
  };

  const loweredFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(loweredFilter) ||
      contact.number.toLowerCase().includes(loweredFilter)
  );

  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onFilter={getFilteredContact} filter={filter} />
      <ContactList onDelete={handleDeleteContact} contacts={visibleContacts} />
    </div>
  );
}

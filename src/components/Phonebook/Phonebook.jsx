import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import s from './Phonebook.module.css';

export class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  hadleAddContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} already in contacts.`);
    }
    this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
  };

  handleDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredContact = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const loweredFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(loweredFilter) ||
        contact.number.toLowerCase().includes(loweredFilter)
    );

    return (
      <div className={s.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.hadleAddContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.getFilteredContact} filter={filter} />
        <ContactList
          onDelete={this.handleDeleteContact}
          contacts={visibleContacts}
        />
      </div>
    );
  }
}

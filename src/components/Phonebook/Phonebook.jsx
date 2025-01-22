import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

export class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmitForm = e => {
    e.preventDefault();
    console.log('Suuuuuuuuuuuuuper');

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const tel = form.elements.number.value;
  };
  handleDeleteContact = id => {};
  getFilteredContact = () => {};

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmitForm} action="">
          <label htmlFor="">Name</label>
          <input type="text" name="name" required />
          <label htmlFor="">Number</label>
          <input type="tel" name="number" required />
          <button>Add contact</button>
        </form>
        <h2>Contacts</h2>
        <Filter onFilter={this.getFilteredContact} filter={filter} />
        <ContactList onDelete={this.handleDeleteContact} contacts={contacts} />
      </div>
    );
  }
}

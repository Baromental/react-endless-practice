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
    console.log('start');

    // const { contacts } = this.state;
    // const newContact = {
    //   id: nanoid(),
    //   name: this.name,
    //   number: this.number,
    // };
    // console.log(newContact);

    // this.setState({contacts:})
  };
  handleDeleteContact = id => {};
  getFilteredContact = () => {};

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmitForm} />
        <h2>Contacts</h2>
        <Filter onFilter={this.getFilteredContact} filter={filter} />
        <ContactList onDelete={this.handleDeleteContact} contacts={contacts} />
      </div>
    );
  }
}

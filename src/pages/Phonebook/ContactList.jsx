import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/phonebook/actions';
import { selectContacts, selectFilter } from '../../redux/phonebook/selectors';

import s from './Phonebook.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const loweredFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(loweredFilter) ||
      contact.number.toLowerCase().includes(loweredFilter)
  );

  return (
    <div className={s.wrapper}>
      <ul>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={() => dispatch(removeContact(id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

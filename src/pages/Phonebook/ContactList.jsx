import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/phonebook/actions';

import s from './Phonebook.module.css';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={() => dispatch(removeContact(id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

import React from 'react';
import s from './Phonebook.module.css';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={s.wrapper}>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={() => onDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

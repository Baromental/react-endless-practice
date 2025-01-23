import React from 'react';

export const ContactList = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li>
            {contact.name}: {contact.number} <button>Delete</button>{' '}
          </li>
        ))}
      </ul>
    </>
  );
};

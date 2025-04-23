import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/phonebook/operations';
import { selectError, selectIsLoading } from '../../redux/phonebook/slice';
import ContactForm from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import s from './Phonebook.module.css';

export default function Phonebook() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {loading && <h1>Loading...</h1>}
      {!error ? (
        <ContactList />
      ) : (
        <h1>Something went wrong! Try again later...</h1>
      )}
    </div>
  );
}

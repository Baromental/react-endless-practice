import React from 'react';
import s from './Phonebook.module.css';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/phonebook/actions';

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const submit = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };
    console.log(newContact);
    dispatch(addContact(newContact));
    reset();
  };

  return (
    <>
      <form className={s.wrapper} onSubmit={handleSubmit(submit)} action="">
        <label htmlFor="">
          Name
          <input {...register('name')} type="text" name="name" required />
        </label>
        <label htmlFor="">
          Number
          <input {...register('number')} type="tel" name="number" required />
        </label>
        <button>Add contact</button>
      </form>
    </>
  );
}

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addContactThunk } from '../../redux/phonebook/operations';
import s from './Phonebook.module.css';

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const submit = ({ name, number }) => {
    dispatch(
      addContactThunk({
        name,
        number,
      })
    );
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

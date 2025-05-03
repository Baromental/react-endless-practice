import React from 'react';
import { useForm } from 'react-hook-form';
import s from './Form.module.css';
import { Link } from 'react-router-dom';

export const Form = () => {
  const { register, reset, handleSubmit } = useForm();
  const submit = data => {
    console.log(data);
    reset();
  };
  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit(submit)}>
        <div className={s.input}>
          <label htmlFor="name">Name:</label>
          <input id="name" placeholder="Enter name" {...register('name')} />
        </div>
        <div className={s.input}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            placeholder="Enter email"
            {...register('email')}
            type="email"
          />
        </div>
        <div className={s.input}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            placeholder="Enter password"
            {...register('password')}
            type="password"
          />
        </div>
        <button>Register</button>
        <p>
          If you already have account please go to{' '}
          <Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

import React from 'react';
import { useForm } from 'react-hook-form';
import s from './Form.module.css';
import { Link } from 'react-router-dom';

export const Form = ({ onDataSubmit, formType }) => {
  const { register, reset, handleSubmit } = useForm();
  const submit = data => {
    onDataSubmit(data);
    reset();
  };
  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit(submit)}>
        {formType === 'register' && (
          <div className={s.input}>
            <label htmlFor="name">Name:</label>
            <input id="name" placeholder="Enter name" {...register('name')} />
          </div>
        )}
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
        <button className={s.button}>
          {formType === 'register' ? 'Register' : 'Login'}
        </button>
        <p className={s.text}>
          {formType === 'register' ? (
            <>
              If you already have an account please{' '}
              <Link to="/login">Login</Link>
            </>
          ) : (
            <>
              If you don't have an account please{' '}
              <Link to="/register">Register</Link>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

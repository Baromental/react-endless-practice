import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import s from './Form.module.css';

export const Form = ({ onDataSubmit, formType, values }) => {
  const [type, setType] = useState('password');
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: values,
  });
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
            <input
              id="name"
              placeholder="Enter name"
              {...register('name', {
                required: { message: 'Name is required!', value: true },
                minLength: {
                  value: 3,
                  message: 'Name must be more than 3 chars!',
                },
                maxLength: {
                  value: 30,
                  message: 'Name must be less than 30 chars!',
                },
              })}
            />
            {errors?.name && <span>{errors.name.message}</span>}
          </div>
        )}
        <div className={s.input}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            placeholder="Enter email"
            {...register('email', {
              required: { message: 'Email is required!', value: true },
            })}
            type="email"
          />
          {errors?.email && <span>{errors.email.message}</span>}
        </div>
        <div className={s.input}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            placeholder="Enter password"
            {...register('password', {
              required: { message: 'Password is required!', value: true },
              minLength: {
                value: 6,
                message: 'Password must be more than 6 chars!',
              },
              maxLength: {
                value: 20,
                message: 'Password must be less than 20 chars!',
              },
            })}
            type={type}
          />
          <button
            type="button"
            onClick={() => setType(type === 'password' ? 'text' : 'password')}
            className={s.iconBtn}
          >
            {type === 'password' ? <FaEyeSlash /> : <FaEye />}
          </button>
          {errors?.password && <span>{errors.password.message}</span>}
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

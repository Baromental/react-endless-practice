import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { InputField } from './InputField';
import { PasswordInputField } from './PasswordInputField';
import { yupResolver } from '@hookform/resolvers/yup';

import s from './Form.module.css';

export const Form = ({ onDataSubmit, formType, schema }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submit = data => {
    onDataSubmit(data);
    reset();
  };
  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit(submit)}>
        {formType === 'register' && (
          <InputField
            register={register}
            errors={errors}
            label="Name:"
            placeholder="Enter name"
            name="name"
          />
        )}
        <InputField
          register={register}
          errors={errors}
          label="Email:"
          placeholder="Enter email"
          name="email"
        />
        <PasswordInputField
          register={register}
          errors={errors}
          label="Password:"
          placeholder="Enter password"
          name="password"
        />
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

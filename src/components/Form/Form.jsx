import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { InputField } from './InputField';
import { PasswordInputField } from './PasswordInputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import s from './Form.module.css';

export const Form = ({ onDataSubmit, formType, values }) => {
  const schema = yup
    .object({
      name: yup
        .string()
        .required('Name is required!')
        .max('Must be less than 15 chars!')
        .min('Must be more than 3 chars!'),
      email: yup
        .string()
        .required('Email is required!')
        .email('Email is not valid!'),
      password: yup.string().required(),
    })
    .required();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: values,
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
        <PasswordInputField
          register={register}
          errors={errors}
          label="Confirm password:"
          placeholder="Enter password"
          name="confirmPassword"
        />
        {/* <div className={s.input}>
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
        </div> */}
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

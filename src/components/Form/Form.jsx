import React from 'react';
import { useForm } from 'react-hook-form';
import s from './Form.module.css';

export const Form = () => {
  const { register, reset, handleSubmit } = useForm();
  const submit = data => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Name</label>
          <input placeholder="Enter name" {...register('name')} />
        </div>
        <div>
          <label>Email</label>
          <input
            placeholder="Enter email"
            {...register('email')}
            type="email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            placeholder="Enter password"
            {...register('password')}
            type="password"
          />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

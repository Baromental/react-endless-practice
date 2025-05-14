import React from 'react';
import s from './Form.module.css';

export const InputField = ({ register, errors, label, name, placeholder }) => {
  return (
    <div className={s.input}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        placeholder={placeholder}
        {...register(name, {
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
      {errors[name] && <span>{errors[name].message}</span>}
    </div>
  );
};

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import s from './Form.module.css';

export const PasswordInputField = ({
  register,
  errors,
  label,
  name,
  placeholder,
}) => {
  const [type, setType] = useState('password');
  return (
    <div className={s.input}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        placeholder={placeholder}
        {...register(name)}
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
  );
};

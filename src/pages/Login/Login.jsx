import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operation';
import { Form } from 'components/Form/Form';

export const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(loginThunk(data));
  };
  return (
    <div>
      <Form onDataSubmit={handleLogin} formType="login" />
    </div>
  );
};

import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginThunk } from '../../redux/auth/operation';
import { Form } from 'components/Form/Form';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(data => {
        toast.success(`Welcome, ${data.user.name}`);
        navigate('/contacts');
      })
      .catch(error => {
        toast.error(`Invalid email or password`);
      });
  };
  const values = {
    email: 'petrokiprik@mail.com',
    password: '11111111',
  };
  return (
    <div>
      <Form onDataSubmit={handleLogin} formType="login" values={values} />
    </div>
  );
};

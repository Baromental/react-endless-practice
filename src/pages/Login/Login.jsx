import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginThunk } from '../../redux/auth/operation';
import { Form } from 'components/Form/Form';
import { loginSchema } from '../../schemas/loginSchema';

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(data => {
        toast.success(`Welcome, ${data.user.name}`);
        navigate(location.state?.from || '/', { replace: true });
      })
      .catch(error => {
        toast.error(`Invalid email or password`);
      });
  };


  return (
    <div>
      <Form
        onDataSubmit={handleLogin}
        schema={loginSchema}
        formType="login"
      />
    </div>
  );
};

import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operation';
import { Form } from 'components/Form/Form';
import { registerSchema } from '../../schemas/registerSchema';

export const Register = () => {
  const dispatch = useDispatch();
  const handleRegister = data => {
    dispatch(registerThunk(data));
  };

  return (
    <div>
      <Form
        onDataSubmit={handleRegister}
        schema={registerSchema}
        formType="register"
      />
    </div>
  );
};

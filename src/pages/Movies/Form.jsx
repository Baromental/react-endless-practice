import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const submit = data => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input {...register('query')} type="text" />
        <button></button>
      </form>
    </div>
  );
};

export default Form;

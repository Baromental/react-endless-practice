import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ setSearchParams }) => {
  const { register, handleSubmit, reset } = useForm();
  const submit = data => {
    console.log(data);
    setSearchParams(data.query ? { query: data.query } : {});
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input {...register('query')} type="text" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Form;

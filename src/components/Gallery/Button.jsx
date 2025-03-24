import React from 'react';
import s from '../styles.module.css';

export const Button = ({ handleLoadMore }) => {
  return (
    <>
      <button className={s.Button} onClick={handleLoadMore}>
        Load more
      </button>
    </>
  );
};

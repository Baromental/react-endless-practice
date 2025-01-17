import React from 'react';
import s from './Feedback.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={s.wrapper}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

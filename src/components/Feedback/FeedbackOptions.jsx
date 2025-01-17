import React from 'react';
import s from './Feedback.module.css';

export const FeedbackOptions = ({ onChangeFeedback }) => {
  return (
    <>
      <ul className={s.list}>
        <li>
          <button onClick={() => onChangeFeedback('good')}>Good</button>
        </li>
        <li>
          <button onClick={() => onChangeFeedback('neutral')}>Neutral</button>
        </li>
        <li>
          <button onClick={() => onChangeFeedback('bad')}>Bad</button>
        </li>
      </ul>
    </>
  );
};

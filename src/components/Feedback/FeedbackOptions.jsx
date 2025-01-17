import React from 'react';

export const FeedbackOptions = ({ onChangaMark }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <ul>
        <li>
          <button onClick={() => onChangaMark('good')}>Good</button>
        </li>
        <li>
          <button onClick={() => onChangaMark('neutral')}>Neutral</button>
        </li>
        <li>
          <button onClick={() => onChangaMark('bad')}>Bad</button>
        </li>
      </ul>
    </div>
  );
};

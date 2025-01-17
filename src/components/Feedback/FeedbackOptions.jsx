import React from 'react';

export const FeedbackOptions = ({ onChangeFeedback }) => {
  return (
    <div>
      <ul>
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
    </div>
  );
};

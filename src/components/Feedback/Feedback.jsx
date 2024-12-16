import React from 'react';

export const Feedback = () => {
  return (
    <div>
      <div>
        <h2>Please leave feedback</h2>
        <ul>
          <li>
            <button>Good</button>
          </li>
          <li>
            <button>Neutral</button>
          </li>
          <li>
            <button>Bad</button>
          </li>
        </ul>
      </div>
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {}</li>
          <li>Neutral: {}</li>
          <li>Bad: {}</li>
          <li>Total: {}</li>
          <li>Positive feedback: {}%</li>
        </ul>
      </div>
    </div>
  );
};

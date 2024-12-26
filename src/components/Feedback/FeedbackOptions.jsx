import React from 'react';

export const FeedbackOptions = () => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <ul>
        <li>
          <button onClick={() => this.setState()}>Good</button>
        </li>
        <li>
          <button>Neutral</button>
        </li>
        <li>
          <button>Bad</button>
        </li>
      </ul>
    </div>
  );
};

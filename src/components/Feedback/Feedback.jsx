import React from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeGood() {}

  handleChangeNeutral() {}

  handleChangeBad() {}

  render() {
    return (
      <div>
        <FeedbackOptions />
        <Statistics />
      </div>
    );
  }
}

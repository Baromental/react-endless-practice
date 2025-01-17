import React from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeMark = key => {
    this.setState(prev => ({ [key]: prev[key] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage =
      countTotalFeedback === 0
        ? 0
        : ((good / countTotalFeedback) * 100).toFixed(0);
    return (
      <>
        <FeedbackOptions onChangaMark={this.handleChangeMark} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}

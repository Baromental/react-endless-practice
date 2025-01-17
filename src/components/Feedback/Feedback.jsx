import React from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeFeedback = key => {
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
        <Section title="Please leave feedback">
          <FeedbackOptions
            title="Please leave feedback"
            onChangeFeedback={this.handleChangeFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

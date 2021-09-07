import React, { Component } from "react";

import { FeedbackList } from "./components/FeedbackList/FeedbackList";
import { Section } from "./components/Section/Section";
import { Statistics } from "./components/Statistics/Statistics";

import { FEEDBACK_OPTIONS } from "./components/data/FEEDBACK_OPTIONS";
import css from "./App.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState((prevState) => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositivePercentage();

    return (
      <div className={css.container}>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>

        <Section title="Please leave feedback">
          <FeedbackList
            options={FEEDBACK_OPTIONS}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
      </div>
    );
  }
}

export default App;

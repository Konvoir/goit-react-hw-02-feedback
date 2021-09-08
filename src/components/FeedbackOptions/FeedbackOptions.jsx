import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      key={feedback}
      type="button"
      className={s.button}
      onClick={onLeaveFeedback}
      data-feedback={feedback}
    >
      {feedback}
    </button>
  );
};

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) =>
    FeedbackButton({ feedback: option, onLeaveFeedback })
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

import PropTypes from "prop-types";
import s from "./FeedbackList.module.css";

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

export const FeedbackList = ({ options, onLeaveFeedback }) => {
  return options.map((option) =>
    FeedbackButton({ feedback: option, onLeaveFeedback })
  );
};

FeedbackList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

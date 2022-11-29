import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback, text }) {
  return text.map(item => {
    return (
      <button
        type="button"
        className={css.button}
        onClick={() => {
          onLeaveFeedback(item);
        }}
        key={item}
      >
        {item}
      </button>
    );
  });
}

FeedbackOptions.propType = {
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

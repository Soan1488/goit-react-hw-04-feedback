import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback, text }) {
  return text.map(item => {
    return (
      <button
        type="button"
        className="button"
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

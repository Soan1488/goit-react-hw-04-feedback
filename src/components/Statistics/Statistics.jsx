import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className="list">
      <li className="listItem">Good: {good}</li>
      <li className="listItem">Neutral: {neutral}</li>
      <li className="listItem">Bad: {bad}</li>
      <li className="listItem">Total: {total}</li>
      {positivePercentage ? (
        <li className="listItem">Positive feedback: {positivePercentage} %</li>
      ) : (
        <li className="listItem">Positive feedback: 0 %</li>
      )}
    </ul>
  );
}

Statistics.propType = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

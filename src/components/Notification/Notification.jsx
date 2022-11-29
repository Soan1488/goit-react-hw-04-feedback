import PropTypes from 'prop-types';
import css from './Notification.module.css';

export default function Notification({ message }) {
  return <p className={css.text}>{message}</p>;
}

Notification.proptype = {
  message: PropTypes.string,
};

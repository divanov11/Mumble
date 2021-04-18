import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({
  className = '',
  error,
  hideLabel = false,
  label = '',
  name,
  options = [],
  type = 'radio',
  ...others
}) => {
  return (
    <div className={classNames(className, 'form__field', `form__field--${type}`)}>
      <p className={classNames({ 'form__label--hidden': hideLabel })}>{label}:</p>
      {options.map((option) => (
        <span key={option?.value}>
          <input
            className={classNames('input', `input--${type}`)}
            id={`input#${name}${option?.value}`}
            type={type}
            value={option?.value}
            name={name}
            {...others}
          />
          <label htmlFor={`input#${name}${option?.value}`}>{option?.title}</label>
        </span>
      ))}
      {error && <small className="form__error">{error}</small>}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  hideLabel: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']),
};

export default Input;

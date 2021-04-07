import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Input = ({
  type = 'radio',
  name = '',
  label = '',
  hideLabel = false,
  className = '',
  options = [],
  error,
  ...others
}) => {
  return (
    <div className={classNames(className, 'form__field', `form__field--${type}`)}>
      <p className={classNames(`${hideLabel && 'form__label--hidden'}`)}>{label}:</p>
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default Input;

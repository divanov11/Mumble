import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({
  className = '',
  error = '',
  hideLabel = false,
  label = '',
  name,
  placeholder = '',
  type = 'text',
  value = '',
  ...others
}) => {
  return (
    <div className={classNames(className, 'form__field')}>
      <label
        htmlFor={`input#${name}`}
        className={classNames('form__label', { 'form__label--hidden': hideLabel })}
      >
        {label}
      </label>
      <input
        className={classNames('input', `input--${type}`)}
        id={`input#${name}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        {...others}
      />
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
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'date', 'time']),
  value: PropTypes.string,
};

export default Input;

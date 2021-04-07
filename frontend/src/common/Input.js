import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({
  type = 'text',
  name = '',
  value = '',
  placeholder = '',
  label = '',
  hideLabel = false,
  className = '',
  error,
  ...others
}) => {
  return (
    <div className={classNames(className, 'form__field')}>
      <label
        htmlFor={`input#${name}`}
        className={classNames('form__label', `${hideLabel && 'form__label--hidden'}`)}
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
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'date', 'time']),
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default Input;

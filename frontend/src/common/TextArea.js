import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TextArea = ({
  name = 'textarea',
  value = '',
  placeholder = 'Share you mumble thoughts...',
  label = '',
  hideLabel = false,
  className = '',
  defaultValue = '',
  error,
  ...others
}) => {
  return (
    <div className={classNames(className, 'form__field')}>
      <label
        htmlFor={`textarea#${name}`}
        className={classNames('form__label', `${hideLabel && 'form__label--hidden'}`)}
      >
        {label}
      </label>
      <textarea
        id={`textarea#${name}`}
        className="input input--textarea"
        name={name}
        placeholder={placeholder}
        value={value}
        {...others}
        aria-labelledby="name"
      >
        {defaultValue}
      </textarea>
      {error && <small className="form__error">{error}</small>}
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default TextArea;

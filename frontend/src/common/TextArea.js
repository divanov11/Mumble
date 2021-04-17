import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TextArea = ({
  className = '',
  defaultValue = '',
  error = '',
  hideLabel = false,
  label = '',
  name,
  placeholder = 'Share you mumble thoughts...',
  value = '',
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
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  error: PropTypes.string,
  hideLabel: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default TextArea;

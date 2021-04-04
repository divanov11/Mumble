import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextArea = ({
  name = 'textarea',
  value = '',
  placeholder = 'Share you mumble thoughts...',
  hideLabel = false,
  className = '',
  defaultValue = '',
  error,
  ...others
}) => {
  return (
    <div className={classnames(className, 'form__field')}>
      <label
        htmlFor={`textarea#${name}`}
        //TODO: Needs to work on Accessibility
        style={{ display: hideLabel ? 'none' : 'inline-block' }}
      >
        Message:
      </label>
      <textarea
        id={`textarea#${name}`}
        className="input input--textarea"
        name={name}
        placeholder={placeholder}
        value={value}
        {...others}
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
  hideLabel: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default TextArea;

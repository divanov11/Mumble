import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TagInput = ({ tags, setTags }) => {
  const [input, setInput] = useState('');

  const addTags = (e) => {
    e.stopPropagation();
    const value = e.key === ',' ? input.substring(0, input.length - 1) : input;
    if (value && (e.key === 'Enter' || e.key === ',')) {
      setInput('');
      setTags([...tags, { name: value }]);
    }
  };

  const removeTag = (tagToRemove) => {
    setTags((tags) => {
      const newState = [...tags.filter((tag) => tag !== tagToRemove)];
      return newState;
    });
  };

  const renderTags = tags.map((tag) => {
    return (
      <div className="tag input-tag-item" key={tag.name}>
        <small>{tag.name}</small>
        <i className="fa fa-times" aria-hidden="true" onClick={() => removeTag(tag)} />
      </div>
    );
  });

  return (
    <div className="input-tags" onClick={() => document.querySelector('.tag-input').focus()}>
      <div className="input-tag-list">{renderTags}</div>
      <input
        className="tag-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={addTags}
        placeholder="Press enter to add a tag"
      />
    </div>
  );
};

TagInput.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.array).isRequired,
  setTags: PropTypes.arrayOf(PropTypes.func).isRequired,
};

export default TagInput;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const TagInput = ({ tagList, tagListRef }) => {
  const [tags, setTags] = useState(tagList);
  const [input, setInput] = useState('');

  const addTags = (e) => {
    e.stopPropagation();
    const value =
      e.key === ',' ? e.target.value.substring(0, e.target.value.length - 1) : e.target.value;
    if (e.key === 'Enter' || e.key === ',') {
      if (value) {
        setInput('');
        setTags((state) => {
          const newState = [...state, value];
          tagListRef.current = newState;
          return newState;
        });
      }
    }
  };

  const removeTag = (e) => {
    const value = e.target.previousSibling.textContent;
    setTags((tags) => {
      const newState = [...tags.filter((x) => x !== value)];
      tagListRef.current = newState;
      return newState;
    });
  };

  const renderTags = tags.map((x, i) => {
    return (
      <div className="tag input-tag-item" key={i}>
        <small>{x}</small>
        <i className="fa fa-times" aria-hidden="true" onClick={removeTag} />
      </div>
    );
  });
  // TODO: Improve codes here
  return (
    <div className="input-tags" onClick={() => document.querySelector('.tag-input').focus()}>
      <div className="input-tag-list">{renderTags}</div>
      <Input
        className="tag-input"
        placeholder="Press enter to add a tag"
        onKeyUp={addTags}
        name="skills"
        onChange={(e) => setInput(e.target.value)}
        label="Add Skills"
        hideLabel
      />
      <input type="text" value={input} className="tag-input" />
    </div>
  );
};

TagInput.propTypes = {
  tagList: PropTypes.arrayOf(PropTypes.string).isRequired,
  tagListRef: PropTypes.object.isRequired,
};

export default TagInput;

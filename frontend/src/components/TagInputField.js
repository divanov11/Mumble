import '../styles/components/TagInputField.css';
import { useState } from 'react';
const TagInputField = ({ userData, tagListRef }) => {
  const [tagList, setTagList] = useState(userData.skills);
  const [input, setInput] = useState('');
  const addTags = (e) => {
    e.stopPropagation();
    const value = e.target.value;
    if (e.key === 'Enter') {
      if (value) {
        setInput('');
        setTagList((state) => {
          const newState = [...state, value];
          tagListRef.current = newState;
          return newState;
        });
      }
    }
  };
  const removeTag = (e) => {
    const value = e.target.previousSibling.textContent;
    console.log(value);
    setTagList((tags) => {
      const newState = [...tags.filter((x) => x !== value)];
      tagListRef.current = newState;
      return newState
    });
  };
  const renderTags = tagList.map((x, i) => {
    return (
      <div className="tag input-tag-item" key={i}>
        <small>{x}</small>
        <i className="fa fa-times" aria-hidden="true" onClick={removeTag} />
      </div>
    );
  });
  return (
    <div
      className="input-tags"
      onClick={() => document.querySelector('.tag-input').focus()}
    >
      <div className="input-tag-list">{renderTags}</div>
      <input
        type="text"
        placeholder="Press enter to add a tag"
        onKeyUp={addTags}
        onChange={(e) => setInput(e.target.value)}
        name="skills"
        value={input}
        className="tag-input"
      />
    </div>
  );
};

export default TagInputField;

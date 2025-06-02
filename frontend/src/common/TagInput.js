import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import skillsList from '../data/skills';
import '../styles/components/TagInput.css';

const TagInput = ({ tags, setTags }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Filter suggestions based on input
  useEffect(() => {
    if (input.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const inputLower = input.toLowerCase();
    const filteredSuggestions = skillsList
      .filter(skill => 
        skill.toLowerCase().includes(inputLower) && 
        !tags.some(tag => tag.name.toLowerCase() === skill.toLowerCase())
      )
      .slice(0, 5); // Limit to 5 suggestions for better UX
    
    setSuggestions(filteredSuggestions);
    setShowSuggestions(filteredSuggestions.length > 0);
    setActiveSuggestionIndex(0);
  }, [input, tags]);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target) && 
          inputRef.current && !inputRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const addTag = (value) => {
    if (!value || value.trim() === '') return;
    
    // Check if tag already exists (case insensitive)
    const valueToAdd = value.trim();
    const tagExists = tags.some(tag => tag.name.toLowerCase() === valueToAdd.toLowerCase());
    
    if (!tagExists) {
      // If adding from suggestions list, preserve the original casing from the skills list
      if (suggestions.some(s => s.toLowerCase() === valueToAdd.toLowerCase())) {
        const originalCasing = suggestions.find(s => s.toLowerCase() === valueToAdd.toLowerCase());
        setTags([...tags, { name: originalCasing }]);
      } else {
        // Otherwise use the input value as is
        setTags([...tags, { name: valueToAdd }]);
      }
    }
    
    setInput('');
    setShowSuggestions(false);
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    // Add tag on Enter or comma
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      
      if (showSuggestions && suggestions.length > 0) {
        // If suggestions are shown, add the selected suggestion
        addTag(suggestions[activeSuggestionIndex]);
      } else if (input.trim()) {
        // Otherwise add the current input
        const value = e.key === ',' ? input.substring(0, input.length - 1) : input;
        addTag(value);
      }
    } 
    // Navigate through suggestions with arrow keys
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (showSuggestions) {
        setActiveSuggestionIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
      }
    } 
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (showSuggestions) {
        setActiveSuggestionIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
      }
    }
    // Close suggestions on Escape
    else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.trim()) {
      setShowSuggestions(true);
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
    <div className="input-tags-container">
      <div className="input-tags" onClick={() => inputRef.current.focus()}>
        <div className="input-tag-list">{renderTags}</div>
        <input
          ref={inputRef}
          className="tag-input"
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => input.trim() && setShowSuggestions(true)}
          placeholder="Type to search skills, use arrow keys to navigate, Enter to select"
        />
      </div>
      
      {showSuggestions && (
        <div className="tag-suggestions" ref={suggestionsRef}>
          {suggestions.map((suggestion, index) => (
            <div 
              key={suggestion}
              className={`tag-suggestion ${index === activeSuggestionIndex ? 'active' : ''}`}
              onClick={() => addTag(suggestion)}
              onMouseEnter={() => setActiveSuggestionIndex(index)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

TagInput.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  setTags: PropTypes.func.isRequired,
};

export default TagInput;

# Dynamic Skills Tag Feature - Code Walkthrough

This document provides a detailed explanation of the code implementation for the dynamic skills tag feature (issue #468).

## 1. Enhanced Skills Database

We expanded the skills database in `skills.js` to include a comprehensive list of programming languages, frameworks, and technologies:

```javascript
// /frontend/src/data/skills.js
const skills = [
  // Programming Languages
  'JavaScript', 'Python', 'Java', 'C++', 'C#', 'PHP', 'Ruby', 'Swift', 'TypeScript', 'Go',
  'Kotlin', 'Rust', 'Scala', 'Perl', 'Dart', 'R', 'Elixir', 'Clojure', 'Haskell',
  
  // Frontend
  'React', 'Angular', 'Vue.js', 'Svelte', 'Next.js', 'Gatsby', 'HTML', 'CSS', 'SASS', 'LESS',
  'Bootstrap', 'Tailwind CSS', 'Material UI', 'Redux', 'jQuery', 'Webpack', 'Babel', 'ESLint',
  
  // ... more categories and skills ...
];

export default skills;
```

## 2. Enhanced TagInput Component

The core of the feature is the enhanced `TagInput` component that now provides suggestions as the user types:

```javascript
// /frontend/src/common/TagInput.js
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

  // ... more code ...
}
```

## 3. Keyboard Navigation and Selection

We implemented keyboard navigation to allow users to easily navigate through suggestions:

```javascript
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
```

## 4. Smart Tag Addition

We implemented smart tag addition that preserves proper casing and prevents duplicates:

```javascript
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
```

## 5. Rendering Suggestions

The component renders a dropdown with suggestions when the user is typing:

```javascript
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
```

## 6. Styling

We created dedicated styling for the component in `TagInput.css`:

```css
.input-tags-container {
  position: relative;
  width: 100%;
}

.tag-suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: var(--color-bg);
  border: 1px solid var(--color-light);
  border-radius: 0 0 5px 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.tag-suggestion {
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s;
  color: var(--color-text);
}

.tag-suggestion:hover,
.tag-suggestion.active {
  background-color: var(--color-main-light);
  color: var(--color-main);
}

/* ... more styles ... */
```

## Conclusion

This implementation provides a significant improvement to the user experience when adding skills to their profile. The dynamic suggestions make it easier to discover and select relevant technologies without having to remember exact skill names.
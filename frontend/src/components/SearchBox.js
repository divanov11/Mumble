import React, { useMemo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import debounce from 'lodash/debounce';
import { searchBarTyped } from '../actions/appActions';
import '../styles/components/SearchBox.css';

const SearchBox = () => {
  const keyword = useSelector((state) => state.searchBar.input);
  const dispatch = useDispatch();
  const history = useHistory();
  const searchInputRef = useRef(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);

  /* useMemo() makes sures that debounce function is not recreated everytime the component re-renders */
  const pushKeyword = useMemo(() => {
    return debounce((searchTerm) => {
      setIsSearching(false);
      if (searchTerm) {
        history.push(`/search?q=${searchTerm}`);
      } else {
        history.push(history.location.pathname);
      }
    }, 500); // end of debounce
  }, [history]);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSearching(true);
    pushKeyword(keyword);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(searchBarTyped(value));
    
    // Simulate search suggestions (in real app, this would be an API call)
    if (value.length > 2) {
      setSearchResults([
        `${value} in posts`,
        `${value} in articles`,
        `${value} in users`,
      ]);
    } else {
      setSearchResults([]);
    }
    setSelectedSuggestion(-1);
  };

  const handleKeyDown = (e) => {
    if (searchResults.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSuggestion(prev => 
          prev < searchResults.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedSuggestion(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        if (selectedSuggestion >= 0) {
          e.preventDefault();
          // Handle suggestion selection
          setSearchResults([]);
          setSelectedSuggestion(-1);
        }
        break;
      case 'Escape':
        setSearchResults([]);
        setSelectedSuggestion(-1);
        searchInputRef.current?.blur();
        break;
      default:
        break;
    }
  };

  // Enhanced keyboard shortcut functionality
  const useKeyboardShortcut = (key, callback) => {
    const callbackRef = useRef(callback);
    
    useEffect(() => {
      callbackRef.current = callback;
    });

    useEffect(() => {
      function handleKeyPress(event) {
        // Enhanced accessibility: only trigger if not in form elements
        const activeElement = document.activeElement;
        const isInFormElement = activeElement && (
          activeElement.tagName === 'INPUT' ||
          activeElement.tagName === 'TEXTAREA' ||
          activeElement.tagName === 'SELECT' ||
          activeElement.isContentEditable
        );

        if (event.code === key && !isInFormElement) {
          event.preventDefault();
          callbackRef.current(event);
        }
      }
      
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }, [key]);
  };

  // Apply keyboard shortcuts with better accessibility
  useKeyboardShortcut('Slash', () => {
    searchInputRef.current?.focus();
    // Announce to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = 'Search input focused. Type your search query.';
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  });

  // Enhanced Escape key functionality
  useKeyboardShortcut('Escape', () => {
    if (document.activeElement === searchInputRef.current) {
      searchInputRef.current?.blur();
      setSearchResults([]);
      setSelectedSuggestion(-1);
    }
  });

  return (
    <div className="search-container" role="search">
      <form
        onSubmit={submitHandler}
        className="form"
        id="search-form"
        autoComplete="off"
        role="search"
        aria-label="Search Mumble"
      >
        <label htmlFor="search-input" className="sr-only">
          Search Mumble for posts, articles, and users
        </label>
        <div className="search-input-wrapper">
          <i 
            className="fas fa-search" 
            id="search-icon"
            aria-hidden="true"
          ></i>
          <input
            ref={searchInputRef}
            id="search-input"
            type="search"
            value={keyword}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search Mumble"
            aria-describedby="search-help search-shortcut"
            aria-expanded={searchResults.length > 0}
            aria-haspopup="listbox"
            aria-autocomplete="list"
            aria-activedescendant={
              selectedSuggestion >= 0 ? `suggestion-${selectedSuggestion}` : undefined
            }
          />
          {isSearching && (
            <div 
              className="search-loading" 
              aria-label="Searching..."
              role="status"
            >
              <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
            </div>
          )}
        </div>
        
        <div id="search-help" className="sr-only">
          Use the search box to find posts, articles, and users on Mumble
        </div>
        
        <small className="shortcut__Text" id="search-shortcut">
          <span className="shortcut__Key" aria-label="Press forward slash to focus search">
            /
          </span>
        </small>

        {searchResults.length > 0 && (
          <ul 
            className="search-suggestions"
            role="listbox"
            aria-label="Search suggestions"
          >
            {searchResults.map((suggestion, index) => (
              <li
                key={index}
                id={`suggestion-${index}`}
                className={`search-suggestion ${
                  index === selectedSuggestion ? 'search-suggestion--selected' : ''
                }`}
                role="option"
                aria-selected={index === selectedSuggestion}
                onClick={() => {
                  dispatch(searchBarTyped(suggestion));
                  setSearchResults([]);
                  submitHandler({ preventDefault: () => {} });
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default SearchBox;

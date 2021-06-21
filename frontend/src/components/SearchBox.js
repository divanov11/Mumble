import React, { useMemo, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import debounce from 'lodash/debounce';
import { searchBarTyped } from '../actions/appActions';
import '../styles/components/SearchBox.css';

const SearchBox = () => {
  const keyword = useSelector((state) => state.searchBar.input);
  const dispatch = useDispatch();
  let history = useHistory();

  /* useMemo() makes sures that debounce function is not recreated everytime the component re-renders */
  const pushKeyword = useMemo(() => {
    return debounce((searchTerm) => {
      if (searchTerm) {
        history.push(`/search?q=${searchTerm}`);
      } else {
        history.push(history.push(history.location.pathname));
      }
    }, 500); // end of debounce
  }, [history]);

  const submitHandler = (e) => {
    e.preventDefault();
    pushKeyword(keyword);
  };

  // defining the function of the shortcut for the searh bar
  const ShortcutKey = (key, callback) => {
    const callbackRef = useRef(callback);
    useEffect(() => {
      callbackRef.current = callback;
    });

    useEffect(() => {
      function handle(event) {
        if (event.code === key) callbackRef.current(event);
      }
      document.addEventListener('keyup', handle);
      return () => document.removeEventListener('keyup', handle);
    }, [key]);
  };

  // Applying the functionality of the shortcut to the search bar
  ShortcutKey('Slash', (event) => {
    // if event occured in an input or textarea do nothing
    if (event.target.closest('input, textarea')) return;
    // else focus on the searchbox
    else {
      document.getElementById('search-input').focus();
    }
  });

  return (
    <form
      onKeyUp={submitHandler}
      onSubmit={submitHandler}
      className="form"
      id="search-form"
      autoComplete="off"
    >
      <i className="fas fa-search" id="search-icon"></i>
      <input
        id="search-input"
        autoFocus={true}
        value={keyword}
        onChange={(e) => dispatch(searchBarTyped(e.target.value))}
        placeholder="Search Mumble"
      />
      <small className="shortcut__Text">
        <span className="shortcut__Key">/</span>
      </small>
    </form>
  );
};

export default SearchBox;

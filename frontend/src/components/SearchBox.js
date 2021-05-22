import React, { useMemo } from 'react';
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

  return (
    <form onKeyUp={submitHandler} onSubmit={submitHandler} className="form" id="search-form">
      <i className="fas fa-search" id="search-icon"></i>
      <input
        id="search-input"
        autoFocus={true}
        value={keyword}
        onChange={(e) => dispatch(searchBarTyped(e.target.value))}
        placeholder="Search Mumble"
      />
    </form>
  );
};

export default SearchBox;

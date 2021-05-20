import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchBarTyped } from '../actions/appActions';

import '../styles/components/SearchBox.css';

const SearchBox = () => {
  const keyword = useSelector((state) => state.searchBar.input);
  const dispatch = useDispatch();

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/search?q=${keyword}`);
    } else {
      history.push(history.push(history.location.pathname));
    }
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

import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/components/SearchBox.css';
import debounce from '../utilities/debounce';

const SearchBox = () => {
  const inputRef = useRef();
  const history = useHistory();

  const pushSearch = debounce((keyword) => {
    if (keyword) {
      history.push(`/search?q=${keyword}`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  }, 500);

  const submitHandler = (e) => {
    e.preventDefault();
    pushSearch(inputRef.current.value);
  };

  return (
    <form onSubmit={submitHandler} className="form" id="search-form">
      <i className="fas fa-search" id="search-icon"></i>
      <input
        id="search-input"
        onChange={submitHandler}
        placeholder="Search Mumble"
        ref={inputRef}
      />
    </form>
  );
};

export default SearchBox;

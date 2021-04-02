import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/components/SearchBox.css';

function SearchBox() {
  const [keyword, setKeyword] = useState('');

  let history = useHistory();

  const submitHandler = (e) => {
    console.log('Form was submitted');
    e.preventDefault();
    if (keyword) {
      history.push(`/search?q=${keyword}`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <form onSubmit={submitHandler} className="form" id="search-form">
      <i className="fas fa-search" id="search-icon"></i>
      <input
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Mumble"
      />
    </form>
  );
}

export default SearchBox;

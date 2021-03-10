import React, { useState } from 'react';
import './interface.css';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState(null);
  const handleInput = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };
  return inputValue !== null ? (
    <div className="searchBar">
      <input type="search" id="inputSearch" value={inputValue} onChange={handleInput} placeholder="Une envie, une élégance, un produit ?" />
      <i className="fas fa-search" />
    </div>

  ) : (
    <p>
      <div className="searchBar">
        <input type="search" id="inputSearch" value={inputValue} onChange={handleInput} placeholder="Une envie, une élégance, un produit ?" />
        <i className="fas fa-search" />
      </div>
    </p>
  );
};

export default SearchBar;
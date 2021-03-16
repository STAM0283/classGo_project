/* eslint-disable react/prop-types */
import React from 'react';
import './interface.css';

const SearchBar = (props) => {
  const { articles } = props.data;
  const { setArticles } = props.data;
  const { allArtciles } = props.data;
  // const { setAllArticles } = props.data;
  const { inputValue } = props.data;
  const { setInputValue } = props.data;
  const handleInputValue = (event) => {
    const { value } = event.target;
    setInputValue(value);
    setArticles(articles.filter((item) => item.name.toLowerCase().includes(inputValue)));
    if (inputValue === '') {
      setArticles(allArtciles);
    }
  };
  return articles !== null ? (
    <div className="searchBar">
      <input type="search" id="inputSearch" value={inputValue} onChange={handleInputValue} placeholder="Une envie, une élégance, un produit ?" />
      <i className="fas fa-search" />
    </div>

  ) : (
    <div className="searchBar">
      <input type="search" id="inputSearch" value={inputValue} onChange={handleInputValue} placeholder="Une envie, une élégance, un produit ?" />
      <i className="fas fa-search" />
    </div>
  );
};

export default SearchBar;

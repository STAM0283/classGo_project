/* eslint-disable react/prop-types */
import React from 'react';
import SlideShow from './SlideShow';
import ArticleFound from './ArticlesFound';

const Home = (props) => {
  const { articles } = props.data;
  const { setArticles } = props.data;
  const { allArtciles } = props.data;
  const { setAllArticles } = props.data;
  const { category } = props.data;
  const { setCategory } = props.data;
  const { inputValue } = props.data;
  const { setInputValue } = props.data;
  return (
    <div className="home">
      <SlideShow />
      <h3 style={{ fontSize: 'xx-large' }}>NOS PRODUITS PHARES</h3>
      <ArticleFound data={{
        articles,
        setArticles,
        allArtciles,
        setAllArticles,
        category,
        setCategory,
        inputValue,
        setInputValue,
      }}
      />
    </div>
  );
};

export default Home;

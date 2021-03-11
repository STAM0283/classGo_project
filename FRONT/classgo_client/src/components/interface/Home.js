/* eslint-disable react/prop-types */
import React from 'react';
import SlideShow from './SlideShow';
import ArticleFound from './ArticlesFound';

const Home = (props) => {
  const { articles } = props.data;
  const { setArticles } = props.data;
  console.log('@@@@@@@@@@', articles);
  return (
    <div className="home">
      <SlideShow />
      <h3 style={{ fontSize: 'xx-large' }}>NOS PRODUITS PHARES</h3>
      <ArticleFound data={{
        articles,
        setArticles,
      }}
      />
    </div>
  );
};

export default Home;

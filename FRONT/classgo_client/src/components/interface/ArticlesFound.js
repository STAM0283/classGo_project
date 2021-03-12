/* eslint-disable react/prop-types */
import React from 'react';

const ArticlesFound = (props) => {
  const { articles } = props.data;
  const { setArticles } = props.data;
  const { category } = props.data;
  const { setCategory } = props.data;
  const selectCategory = (event) => {
    const id = parseInt(event.target.id, 10);
    setCategory(id);
    setArticles((prevState) => prevState.filter((item) => item.category_id === category));
  };
  return articles !== null ? (
    <div className="articlesFound">
      <div className="categoryArticles">
        <h4 aria-hidden onClick={() => setCategory('')}>tous</h4>
        <h4 aria-hidden id="1" onClick={selectCategory}>Montres</h4>
        <h4 aria-hidden id="2" onClick={selectCategory}>Lunettes</h4>
        <h4 aria-hidden id="3" onClick={selectCategory}>Bijoux</h4>
      </div>
      <div className="allArticles">
        {
         articles.map((article) => (
           <div key={article.article_id} className="article-container">
             <img src={article.picture} alt="montre" />
             <h2>{article.name}</h2>
             <div className="starsAndPrice">
               <div>
                 <i className="far fa-star" />
                 <i className="far fa-star" />
                 <i className="far fa-star" />
                 <i className="far fa-star" />
                 <i className="far fa-star" />
               </div>
               <div>
                 <p>{article.price}</p>
               </div>
             </div>
             <button type="button">Ajouter au panier</button>
           </div>
         ))
      }
      </div>
    </div>
  ) : (
    <div>
      LOADING
    </div>
  );
};

export default ArticlesFound;

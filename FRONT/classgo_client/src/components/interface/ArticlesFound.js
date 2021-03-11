/* eslint-disable react/prop-types */
import React from 'react';

const ArticlesFound = (props) => {
  const { articles } = props.data;
  const { setArticles } = props.data;
  // const [category, setCategory] = useState(1);
  const selectCategory = (event) => {
    const category = event.target;
    // setCategory(value);
    setArticles(articles.filter((item) => item.category_id === category));
    console.log('mes categories', category);
  };
  return articles !== null ? (
    <div className="articlesFound">
      <div className="categoryArticles">
        <h4 aria-hidden value="1" onClick={selectCategory}>Montres</h4>
        <h4 aria-hidden value="2" onClick={selectCategory}>Lunettes</h4>
        <h4 aria-hidden value="3" onClick={selectCategory}>Bijoux</h4>
      </div>
      <div className="allArticles">
        {
         articles.map((article) => (
           <div className="article-container">
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

/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import axios from 'axios';

const proprieties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,

};

const SlideShow = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/images').then((response) => {
      setImages(response.data);
    });
  }, []);
  return images !== null ? (
    <div className="slide-container">
      <Slide {...proprieties}>
        {
          images.map((item, index) => (
            <div key={index} className="each-slide">
              <div>
                <img src={item.url} alt={item.title} />
              </div>
            </div>

          ))
        }
      </Slide>
    </div>

  ) : (
    <p>Loading</p>
  );
};

export default SlideShow;

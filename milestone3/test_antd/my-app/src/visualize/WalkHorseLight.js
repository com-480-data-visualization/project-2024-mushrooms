import React, { useState, useRef, useEffect } from 'react';
import { Carousel, Radio } from 'antd';

const WHLight = () => {
  const [dotPosition, setDotPosition] = useState('top');

  const handlePositionChange = (event) => {
    setDotPosition(event.target.value);
  };

  const carouselRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (!carouselRef.current) return;

      if (event.deltaY > 0) {
        carouselRef.current.next();
      } else {
        carouselRef.current.prev();
      }
    };
    const carouselDiv = document.querySelector('.carousel-container');
    carouselDiv.addEventListener('wheel', handleWheel);

    return () => {
      carouselDiv.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div
      className="carousel-container"
      style={{  width: '60%', height: '350px', margin: 'auto' }}
    >
      <Carousel ref={carouselRef} dotPosition={dotPosition} autoplay>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Portobello_mushrooms.jpg/440px-Portobello_mushrooms.jpg"
            alt="Agaricus bisporus"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Pleurotus_ostreatus_JPG7.jpg"
            alt="Pleurotus ostreatus"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg"
            alt="Cantharellus cibarius"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/35/Single_lycoperdon_perlatum.jpg"
            alt="Lycoperdon perlatum"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default WHLight ;

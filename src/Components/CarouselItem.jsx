import React from 'react';

const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item">
      <img src={item.url} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.oldPrice}</p>
    </div>
  );
};

export default CarouselItem;
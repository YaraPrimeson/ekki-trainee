import { useContext, useEffect, useState } from 'react';
import { Context } from '../Context/Context';
import Cards from '../Components/Cards';
import Carousel from '../Components/Carousel';

const HomeCards = () => {


  const renderCard = (item) => {
    return <Cards item={item} />;
  };

  return (
    <div>
      <Carousel data={data} renderCard={renderCard} />
    </div>
  );
};

export default HomeCards;

import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Context/Context';
import styles from '../styles/Carousel.module.scss'

const Carousel = () => {
  const { getClothes } = useContext(Context);
  const [data, setData] = useState([]);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  useEffect(() => {
    getClothes()
      .then((res) => setData(res))
      .catch((e) => console.log(e));
  }, []);

  const handlePrevClick = () => {
    setSelectedSlideIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedSlideIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    
    <div className={styles.container}>
      <div className={styles.slider}>
        {data.map((item, index) => (
          <div 
            className={index === selectedSlideIndex ? styles.slideActive : styles.slide}
            key={item.id}
          >
            <img className={styles.img__card} src={item.url} alt={item.name} />
            <p className={styles.p__name}>{item.name}</p>
            <p className={styles.p__oldprice}>{item.oldPrice}</p>
            <p className={styles.p__newprice}>{item.newPrice}</p>
            <div className={styles.cards__buttons}>
              Size :
              <button>s</button>
              <button>m</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.sliderButtons}>
        <button className={styles.prevButton} onClick={handlePrevClick}>
          &lt;
        </button>
        <button className={styles.nextButton} onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
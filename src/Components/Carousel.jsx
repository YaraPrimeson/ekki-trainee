
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Context/Context';
import styles from '../styles/Carousel.module.scss'
import sale from '../asscets/img/sale.png'
import basketpink from '../asscets/img/basketpink.png'

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
   <div>
    <img className={styles.sale} src={sale} alt="" />
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
             <div className={styles.cards__buttons__container}>
               Size :
               <button className={styles.cards__button}>s</button>
               <button className={styles.cards__button}>m</button>
               <button className={styles.basket__pink}> <img className={styles.basket__img} src={basketpink} alt="#" /></button>
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
   </div>
  );
};

export default Carousel;
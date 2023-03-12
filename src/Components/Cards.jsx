
import React from 'react';
import styles from '../styles/Cards.module.scss';
import { Link } from 'react-router-dom';
import basketpink from '../asscets/img/basketpink.png';

const Cards = ({ item }) => {
  const { xl,s, l, m } = item.sizes || {};
  return (
    <div className={styles.card__container}>
      <div className={styles.card__elements}>
        <Link to='/details'>
          <img className={styles.img__card} src={item.url} alt='' />
        </Link>
        <p className={styles.p__name}>{item.name}</p>
        <p className={styles.p__oldprice}>{item.oldPrice}</p>
        <p className={styles.p__newprice}>{item.newPrice}</p>
        <div className={styles.cards__buttons__container}>
          Size:
          {s && <button className={styles.cards__button}>s</button>}
          {xl && <button className={styles.cards__button}>xl</button>}
          {l && <button className={styles.cards__button}>l</button>}
          {m && <button className={styles.cards__button}>m</button>}
          <button className={styles.basket__pink}>
            <img className={styles.basket__img} src={basketpink} alt='#' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;


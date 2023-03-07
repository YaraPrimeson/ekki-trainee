import React  from 'react'
import styles from '../styles/Cards.module.scss'
import sale from "../asscets/img/sale.png"
import { Link } from 'react-router-dom'


const Cards = ({item}) => {

  return (
    
    <div>
            <div className={styles.card__container}>
                <div className={styles.card__elements}>
                <Link to='/details'>
                  <img className={styles.img__card} src={item.url} alt="" />
                  </Link>
                  <p className={styles.p__name}>{item.name}</p>
                  <p className={styles.p__oldprice}>{item.oldPrice}</p>
                  <p className={styles.p__newprice}>{item.newPrice}</p>
                  <div className={styles.cards__buttons}> Size :
                      <button>s</button>
                      <button>m</button>
                  </div>
                </div>
            </div>
    </div>
  )
}

export default Cards;
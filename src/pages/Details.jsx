import React from 'react'
import detailsfoto from '../asscets/img/detailsfoto.png'
import basketpink from '../asscets/img/basketpink.png'
import styles from '../styles/Details.module.scss'

const Details = () => {
  return (
    <>
    <div className={styles.container}>
        <img className={styles.img} src={detailsfoto} alt="" />
        <div className={styles.info__container}>
            <h1 className={styles.h1}>Knitted Sweaters</h1>
            <p>Size:</p>
            <div className={styles.buttonsSizes}>
                <button className={styles.buttonStyle}>xs</button>
                <button className={styles.buttonStyle}>s</button>
                <button className={styles.buttonStyle}>m</button>
                <button className={styles.buttonStyle}>l</button>
            </div>
               <p>
                Excellent quality, modern model, universal color
                   Quality accessories!
               </p>
               <p>Very convenient for you and comfortable for the animal👌🏼</p>
               <p>Waterproof!!! ❌💦</p>
               <p>Transformer bag, conveniently folds. There is a pocket for food or bowls for the animal!</p>
               <p>Can be completely closed.</p>
               <p>42*29*18cm</p>
            <div className={styles.buyButtons}>
                <button className={styles.firstButton}>50€</button>
                <button className={styles.secondButton}>buy</button>
            </div>
        </div>
    </div>
    <button className={styles.basketButton}> 
        <img className={styles.busketImg} src={basketpink} alt="" />
        </button>
    </>
  )
}

export default Details;
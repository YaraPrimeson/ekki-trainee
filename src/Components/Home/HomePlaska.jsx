import React from 'react'
import styles from "../../styles/HomePlashka.module.scss"
import delivery from "../../asscets/img/delivery.png"
import proportion from "../../asscets/img/proportion.png"
import skull from "../../asscets/img/skull.png"

const HomePlaska = () => {
  return (
    <div> 
        <div className={styles.plashka__container}>
           <div className={styles.plashka__elements}>
           <img className={styles.img__elements} src={delivery} alt="" />
        <div>
            <h3 className={styles.h3}>delivery</h3>
            <h4 className={styles.h4}>Fast delivery throughout Europe</h4>
        </div>
    </div>
    <div className={styles.plashka__elements}>
    <img className={styles.img__elements} src={proportion} alt="" />
        <div>
            <h3 className={styles.h3}>proportions</h3>
            <h4 className={styles.h4}>We will select the correct size.</h4>
        </div>
    </div>
    <div className={styles.plashka__elements}>
    <img className={styles.img__elements} src={skull} alt="" />
        <div>
            <h3 className={styles.h3}>over 900+ styles</h3>
            <h4 className={styles.h4}>We have everythings you need</h4>
        </div>
    </div>
</div>
</div>
  )
}

export default HomePlaska;
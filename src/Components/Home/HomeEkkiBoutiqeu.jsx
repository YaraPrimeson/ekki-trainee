import React from 'react'
import styles from "../../styles/HomeEkkiBoutique.module.scss"
import guccidog from "../../asscets/img/guccidog.png"
import Ellipse from "../../asscets/img/Ellipse.png"


const EkkiBoutiqeu = () => {
  return (
    <div>
    <div className={styles.container}>
    <div className={styles.container__title}>
    <p className={styles.p}>has just arrived!</p>
    <h1 className={styles.h1}>Ekki boutique</h1>
    <h2 className={styles.h2}>shop now → </h2>
   </div>
   <img className={styles.img} src={guccidog} alt="" />
   <img className={styles.background} src={Ellipse} alt="" />
</div>
</div>
  )
}

export default EkkiBoutiqeu;
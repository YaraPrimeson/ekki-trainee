import React from 'react'
import styles from "../../styles/HomeAboutUs.module.scss"
import aboutus1 from "../../asscets/img/aboutus1.png"
import aboutus2 from "../../asscets/img/aboutus2.png"

const HomeAboutUs = () => {
  return (
    <div>
            <div className={styles.aboutUs__container}>
                <div className={styles.title__aboutUs__conatiner}>
                    <img className={styles.img__up} src={aboutus1} alt="" />
                    <p className={styles.p__title}>ABOUT US</p>
                    <img className={styles.img__down} src={aboutus2} alt="" />
                </div>
                <div className={styles.subtitle__aboutUs__container}>
                    <p className={styles.p__title}>who are we?</p>
                    <div className={styles.li__subtitle}>
                        <li>light shopping,</li>
                        <li>handy wishlist,</li>
                        <li>interesting blog,</li>
                        <li>fast ordering,</li>
                        <li>online payment in just one click,</li>
                        <li>individual approach.</li>
                    </div>
                    <p className={styles.p__subtitle}>In our store, you can buy goods at any convenient time by going to the official website in the online product catalog. 
                        Ekki Boutique is a place where you can order literally anything for dogs. 
                    </p>
                    <p className={styles.p__subtitle}>
                    The dog store is very versatile. Here you can find everything from clothes to toys.
                    The pricing policy will pleasantly surprise everyone, in fact, as well as the quality of the products supplied.
                    </p>
                    <p className={styles.p__subtitle}>  Everything on the site is done for the maximum convenience of customers.
                    There are sections: products of the week, bestsellers, sale.</p>
                    <p className={styles.p__subtitle}>  Using convenient filters, it will be possible to find what you were looking for in a matter of minutes.
                    You no longer have to travel all over the city in search of the necessary purchase. 
                    Now you don’t even need to leave your home, because you can access our website from any gadget, 
                    just having access to the Internet.</p>
                    <p className={styles.postScriptum}>
                            Our site is the perfect place to shop. We offer you convenience, speed and high quality service.
                    </p>
                </div>
            </div>
    </div>
  )
}

export default HomeAboutUs;

import styles from "../styles/Home.module.scss"
import guccidog from "../asscets/img/guccidog.png"
import Ellipse from "../asscets/img/Ellipse.png"
import delivery from "../asscets/img/delivery.png"
import proportion from "../asscets/img/proportion.png"
import skull from "../asscets/img/skull.png"
import sweater1 from "../asscets/img/sweater1.png"
import sweater2 from "../asscets/img/sweater2.png"
import sweater3 from "../asscets/img/sweater3.png"
import sale from "../asscets/img/sale.png"
import aboutus1 from "../asscets/img/aboutus1.png"
import aboutus2 from "../asscets/img/aboutus2.png"
const Home = () =>{
    return(
        <>
            <div className={styles.container}>
                <div className={styles.container__title}>
                <p className={styles.p}>has just arrived!</p>
                <h1 className={styles.h1}>Ekki boutique</h1>
                <h2 className={styles.h2}>shop now → </h2>
               </div>
               <img className={styles.img} src={guccidog} alt="" />
               <img className={styles.background} src={Ellipse} alt="" />
            </div>





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





            <img className={styles.img__sale} src={sale} alt="" />
            <div className={styles.card__container}>
                <div className={styles.card__elements}>
                  <img className={styles.img__card} src={sweater1} alt="" />
                  <p className={styles.p__name}>Knitted sweaters</p>
                  <p className={styles.p__oldprice}>87€</p>
                  <p className={styles.p__newprice}>49€</p>
                  <div className={styles.cards__buttons}> Size :
                      <button>s</button>
                      <button>m</button>
                  </div>
                </div>
                <div className={styles.card__elements}>
                  <img className={styles.img__card} src={sweater2} alt="" />
                  <p className={styles.p__name}>Knitted sweaters</p>
                  <p className={styles.p__oldprice}>87€</p>
                  <p className={styles.p__newprice}>49€</p>
                  <div className={styles.cards__buttons}> Size :
                      <button>s</button>
                      <button>m</button>
                  </div>
                </div>
                <div className={styles.card__elements}>
                  <img className={styles.img__card} src={sweater3} alt="" />
                  <p className={styles.p__name}>Knitted sweaters</p>
                  <p className={styles.p__oldprice}>87€</p>
                  <p className={styles.p__newprice}>49€</p>
                  <div className={styles.cards__buttons}> Size :
                      <button>s</button>
                      <button>m</button>
                  </div>
                </div>
            </div>





            
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

        </>
     
    )
}
export default Home;
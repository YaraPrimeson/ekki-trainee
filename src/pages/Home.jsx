import Layout from "../Components/Layout";
import styles from "../styles/Home.module.scss"

const Home = () =>{
    return(
        <div>
         <Layout> 
            <div>
            <p className={styles.p}>has just arrived!</p>
            <h1>Ekki boutique</h1>
            <h2>shop now </h2>
           </div>
           </Layout>
        </div>
     
    )
}
export default Home;
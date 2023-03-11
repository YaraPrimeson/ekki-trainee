import React,{useContext,useState,useEffect} from "react";
import { Context } from "../Context/Context";
import Cards from "../Components/Cards";
import styles from "../styles/Toys.module.scss"

const Toys = () => {
    const {getToys}  = useContext(Context)
    const [toys,setToys] = useState([])
    
    useEffect(()=>{
        getToys().then((res)=> setToys(res)).catch(e => console.log(e))
        }, []);
    
    return (
        <div>
            <div className={styles.header}>Toys</div>
            <div className={styles.header__title}>Showing {toys.length} products</div>
            <div className={styles.container}>
                {toys.map((item) =>
                <div key={item.id}>
                <Cards item ={item}/>
            </div>
                )}
            </div>
        </div>
    )
}
export default Toys;

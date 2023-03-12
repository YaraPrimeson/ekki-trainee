import {Context} from '../Context/Context'
import React, { useContext,useEffect,useState} from 'react'
import Cards from '../Components/Cards';
import styles from '../styles/Clothes.module.scss'

const Clothes = () =>{
    const {getClothes} = useContext(Context);
    const [data,setData] = useState([]);
    useEffect(()=>{
    getClothes().then((res)=> setData(res)).catch(e => console.log(e))
    }, []);
    return(
        <div>
            <div className={styles.header}>Clothes</div>
            <div className={styles.header__title}>Showing {data.length} products</div>
            <div className={styles.container}>
                {data.map((item) =>
                   <Cards item={item}
                   key={item.id}/>
                )}
            
            </div>
        </div>
    )
}
export default Clothes;
import {Context} from '../Context/Context'
import React, { useContext,useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
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
            <div className={styles.header__title}>Showing 4 products</div>
            <div className={styles.container}>
                {data.map((item) =>
                <div  key={item.id}>
                   <Cards item={item}/>
                </div>
                )}
            
            </div>
        </div>
    )
}
export default Clothes;
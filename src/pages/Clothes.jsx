import {useEffect, useState} from "react";


const Clothes = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        getClothes()
    }, [])
    return (
        <div>
            {state.map((item) => (
                <Card item={item}/>
            ))}
        </div>
    )
}
export default Clothes;

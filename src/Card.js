import React from 'react';

const Card = ({item}) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <img src={item.url} alt=""/>
            <div>
                    <p>{item.newPrice}</p>
            </div>
        </div>
    );
};

export default Card;


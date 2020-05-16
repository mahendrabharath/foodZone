import React from 'react';
import DishCard from '../DishCard/DishCard';


const DishList = props => {
    const { dishList } = props;

    return <div className="container">
        {dishList.map((el, i) => <DishCard {...el} key={i} />)}
    </div>
};

export default DishList;
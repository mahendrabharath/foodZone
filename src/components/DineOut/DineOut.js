import React, { useState } from 'react';
import SearchDishes from './SearchDishes';
import { AppLogo } from '../../assets/images';
import DishList from './DishList';
import FilterDish from './FilterDish';
import defaultSearch from '../../mockdata/defaulSearch';
import Header from '../Header/Header';

const DineOut = props => {
    const [searchResult, setSearchResult] = useState([]);
    const [dishList, setDishList] = useState([]);

    return <div className='dineout'>
        <Header />
        <SearchDishes searchResult={searchResult} setSearchResult={setSearchResult} setDishList={setDishList} />
        <DishList dishList={defaultSearch}/>
        <FilterDish />
    </div>
}

export default DineOut;
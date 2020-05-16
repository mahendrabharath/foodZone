import React, { useState } from 'react';
import SearchDishes from '../SearchDish/SearchDishes';
import { AppLogo } from '../../../assets/images';
import DishList from '../DishList/DishList';
import FilterDish from '../FilterDish/FilterDish';
import defaultSearch from '../../../mockdata/defaulSearch';
import Header from '../../Header/Header';

const DineOut = props => {
    const [searchResult, setSearchResult] = useState([]);
    const [dishList, setDishList] = useState([]);
    const [preferences, setPreferences] = useState({});
    
    return <div className='dineout'>
        <Header />
        <SearchDishes searchResult={searchResult} setSearchResult={setSearchResult} setDishList={setDishList} />
        <DishList dishList={defaultSearch}/>
        <FilterDish />
    </div>
}

export default DineOut;
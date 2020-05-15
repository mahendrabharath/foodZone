import React, { useState } from 'react';
import { AutoComplete, Button } from 'antd';
import './SearchDish.scss'
import { getSearchByDefault } from '../../services';
import { UnorderedListOutlined } from '@ant-design/icons';

const { Option } = AutoComplete;

const SearchDishes = props => {
    const { searchResult: result, setSearchResult: setResult, setDishList } = props;

    const handleSearch = (value) => {
        const data = getSearchByDefault();
        const cuisines = data.map(el => ({ cuisine: el.cuisine, id: el.dishid }));
        setResult(cuisines);
        setDishList(data);
    };


    return <div className='dish-search-container'>
        <AutoComplete style={{ width: '100%' }} onSearch={handleSearch} onFocus={() => setResult([])} placeholder="input here">
            {result.map((dish) => (
                <Option key={dish.cuisine} value={dish.id}>
                    {dish.cuisine}
                </Option>
            ))}
        </AutoComplete>

        <div className='preferences-container'>
            <Button shape="round" icon={<UnorderedListOutlined />} size={'large'}>
                Preferences
        </Button>
        </div>
    </div>;
}

export default SearchDishes;
import React, { useState } from 'react';
import { AutoComplete, Button, Modal, Input } from 'antd';
import './SearchDish.scss'
import { getSearchByDefault } from '../../../services';
import { UnorderedListOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import CheckOutPopUp from '../CheckoutPopUp/CheckoutPopUp';

const { Option } = AutoComplete;
const { TextArea } = Input;

const SearchDishes = props => {
    const { searchResult: result, setSearchResult: setResult, setDishList } = props;
    const [showPreferences, setShowPreferences] = useState(false);

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
            <Button shape="round" icon={<UnorderedListOutlined />} onClick={() => setShowPreferences(true)} size={'large'}>
                Preferences
            </Button>
            <Modal
                title="Preferences"
                visible={showPreferences}
                footer={[
                    <Button key="back" onClick={() => setShowPreferences(false)}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" onClick={() => setShowPreferences(false)}>
                        Add Preferences
                    </Button>,
                ]}
            >
                <TextArea />
            </Modal>
        </div>
        {/* <div className='cart-btn-container'>
            <Button className='cart-btn' shape="round" icon={<ShoppingCartOutlined />} onClick={() => setShowPreferences(true)} size={'large'}>
                Cart
            </Button>
            <CheckOutPopUp />
        </div> */}
    </div>;
}

export default SearchDishes;
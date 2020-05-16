import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import { List, Avatar, Button, Skeleton } from 'antd';
import defaultSearch from '../../mockdata/defaulSearch';
import { AlertOutlined } from '@ant-design/icons';
import './Orders.scss';
import reducer from '../../reducer';
import store, {FoodContext} from '../../store';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

const suggestion = [
    { name: 'Roti price rating quantity', hotel: 'AL Daz' },
    { name: 'Red Velvet Cake (750 Gm)', hotel: 'Sweet Truth' },
    { name: 'Naan', hotel: 'Behrouz Biryani' }
];

const Orders = props => {
    const [orderList, setOrderList] = useState([]);
    const [list, setList] = useState([]);
    const [initLoading, setInitLoading] = useState(false);
    const [loading, setLoading] = useState(false);

    // const [state, dispatch] = useReducer(reducer, store);
    const { state, dispatch } = useContext(FoodContext);

    useEffect(() => {
        getData()
    }, [])

    const getData = async callback => {
        setLoading(true);
        const resp = await fetch(fakeDataUrl);
        const json = await resp.json();
        setList(json.results);
        console.log(json);
        setLoading(false);
    };

    var price = 0;
    const total = defaultSearch.slice(3).map(el => price = price + Number(el.price))

    console.log('Orders ', state)

    return <div>
        <Header />
        <h3 style={{ textAlign: 'center' }}>Order checkout</h3>
        <div className="food-list">
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={defaultSearch.slice(3)}
                renderItem={item => (
                    <List.Item
                    // actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={
                                    <AlertOutlined />
                                }
                                title={<a href="https://ant.design">{item.cuisine}</a>}
                            // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                            <div>{item.price}</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        </div>
        <div className='total-btn'>
            <div>
                <h1>Total: {price}</h1>
            </div>
            <div>
                <Button type="primary">Place Order</Button>
            </div>
        </div>
        <div className='suggestion-items'>
            <h3>Suggested Items</h3>
            <ul>
                {suggestion.map(el => <li>
                    <h3>{el.name}</h3>
                    <h5>{el.hotel}</h5>
                </li>)}
            </ul>
        </div>

    </div>
}

export default Orders;

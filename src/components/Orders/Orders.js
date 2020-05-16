import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import { List, Avatar, Button, Skeleton, Select, Input } from 'antd';
import defaultSearch from '../../mockdata/defaulSearch';
import { AlertOutlined } from '@ant-design/icons';
import './Orders.scss';
import reducer from '../../reducer';
import store, { FoodContext } from '../../store';
import { withRouter } from 'react-router';
import Axios from 'axios';

const { Option } = Select;
const { TextArea } = Input;

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

        const url = 'https://cd950485.ngrok.io/v1/prm/login'
        const payload = {
            "password": "hackathon",
            "timestamp": "2020-05-16T07:27:31.004Z",
            "userId": "test1"
          };
          debugger
          Axios.post(url, payload, {
            'Content-Type': 'application/x-www-form-urlencoded',
          }).then(el => {
            console.log('SUccess ', el)
          }).catch(err => {
              console.log('Error ',err)
          })
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
        <div className='orders-container'>
            <div className='special-instructions'>
                <h3>Special Instructions</h3>
                <Select
                    showSearch
                    placeholder="Select a preference"
                    onChange={() => { }}
                >
                    <Option value="jack">Preference 1</Option>
                    <Option value="lucy">Preference 2</Option>
                    <Option value="tom">Preference 3</Option>
                </Select>
                <div>
                    <TextArea />
                </div>
            </div>
            <div className="food-list">
                <h1>Butter Chicken</h1><span></span>
                <h3>Punjabi Rasoi</h3>
                <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </h5>
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
        <div className='total-btn'>
            <div>
                <h1>Total: {price}</h1>
            </div>
            <div>
                <Button type="primary">Place Order</Button>
            </div>
            <div>
                <Button onClick={() => props.history.push('/dine-out')} type="primary">Back</Button>
            </div>
        </div>

    </div>
}

export default withRouter(Orders);

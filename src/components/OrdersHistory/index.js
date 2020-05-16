import React, { useEffect, useState } from 'react';
import {mockData} from './constants';
import OrderedItemCard from './OrderedItemCard';
import {fetchOrderHistory} from '../../services'

function getOrdersContent({orderHistory, isLoading}){
    return orderHistory.map((order)=>{
        return(
            <OrderedItemCard order={order} loading={isLoading}/>
        )
    })
}

const OrderHistory = () => {
    const [orderHistory, setOrderHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchOrderHistory()
            .then(response => {
                setOrderHistory(mockData);
                setIsLoading(false);
            })
            .catch(error => {
                console.log("error",error);
                setOrderHistory(mockData);// will remove once api integration done
                setIsLoading(false);
            });
    });

    return (
        <div style={{margin:"10px 100px"}}>
            <h4>Past Orders</h4>
            {getOrdersContent({orderHistory, isLoading})}
        </div>
    )
}


export default OrderHistory;
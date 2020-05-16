import {
    BASE_URL, 
    ORDERSHISTORY_PATH
} from  "../config";
import defaultSearch from '../mockdata/defaulSearch'
export const getSearchByDefault = () => {
    return defaultSearch;
}

export const fetchOrderHistory=()=>{
    const URL = `${BASE_URL}${ORDERSHISTORY_PATH}`;
    return fetch(URL)
        .then(res => res.json())
}
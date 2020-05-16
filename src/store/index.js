import React from 'react';

const store = {
    dineOut: {
        search: [],
        filter: []
    },
    orders: []
}
export const FoodContext = React.createContext(store);

export default store;
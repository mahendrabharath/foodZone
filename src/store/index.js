import React from 'react';

const store = {
    dineOut: {
        search: [],
        filter: []
    },
    orders: []
}
const ThemeContext = React.createContext(themes.light);

export default store;
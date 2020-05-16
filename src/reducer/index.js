import store from "../store";

const reducer = (state = store, action) => {
    switch(action.type) {
        case 'SET_ORDER_DATA': {
            console.log('Reducer called')
            return {...state, dineOut: 'Check'};
        }

        default: return state;
    }
}

export default reducer;
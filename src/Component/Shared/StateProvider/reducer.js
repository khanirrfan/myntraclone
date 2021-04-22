export const initialState = {
    bag: [],
}

function reducer(state, action) {
    console.log(action.type);
    switch (action.type) {
        case 'ADD_TO_BAG':
            // logic
            return { ...state, bag: [...state.bag, action.payload] };
            break;
        case 'REMOVE_FROM_BAG':
            // LOGIC
            let newBag = [...state.bag];
            const index = state.bag.findIndex((items) => items.productId === action.id);
            if (index >= 0) {
                newBag.splice(index, 1);
            } else {

            }
            return { ...state, bag: newBag };
            break;
        default:
            return state;
    }
}

export default reducer;
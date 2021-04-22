export const initialState = {
    bag:[],
}

function reducer(state, action){
    console.log(action.type);
    switch(action.type){
        case 'ADD_TO_BAG' :
            // logic
            return { ...state, bag:[...state.bag, action.payload]};
            break;
        case 'REMOVE_FROM_BAg' :
            // LOGIC
            return { state};
            break;
        default : 
            return state;
    }
}

export default reducer;
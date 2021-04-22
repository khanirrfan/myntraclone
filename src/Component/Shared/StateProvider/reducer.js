export const initialState = {
    basket:[],
}

function reducer(state, action){
    switch(action.type){
        case 'ADD_TO_BASKET' :
            // logic
            break;
        case 'REMOVE_FROM_BASKET' :
            // LOGIC
            break;
        default : 
            return state;
    }
}

export default reducer;
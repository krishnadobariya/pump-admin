import { ADD_ASSETS } from "store/Action/stockAction";


export const initialState = {
    assetsAdd: ""
}

const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ASSETS:
            return{ ...state, assetsAdd: action.payload}
        default:
            return state;
    }
}
export default stockReducer;
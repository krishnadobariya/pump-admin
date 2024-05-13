import { UPDATE_ALL_STOCK } from "store/Action/stockAction";
import { GET_ALL_STOCK } from "store/Action/stockAction";
import { ADD_STOCK } from "store/Action/stockAction";


export const initialState = {
    getAllStock: "",
    stockAdd: "",
    updateStock: "",
}

const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_STOCK:
            return { ...state, getAllStock: action.payload };
        case ADD_STOCK:
            return { ...state, stockAdd: action.payload }
        case UPDATE_ALL_STOCK:
            return { ...state, updateStock: action.payload }
        default:
            return state;
    }
}
export default stockReducer;
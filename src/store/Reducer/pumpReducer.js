import { UPDATE_PUMP } from "store/Action/pumpAction";
import { DELETE_PUMP } from "store/Action/pumpAction";
import { GET_ALL_PUMP } from "store/Action/pumpAction";
import { ADD_PUMP } from "store/Action/pumpAction";

export const initialState = {
    addPump: "",
    getAllPump:"",
    updatePump:"",
    deletePump:"",
}

const pumpReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PUMP:
            return { ...state, addPump: action.payload };
        case GET_ALL_PUMP:
                return { ...state, getAllPump: action.payload };
        case UPDATE_PUMP:
            return{...state,updatePump:action.payload};
            case DELETE_PUMP:
                return{...state,deletePump:action.payload}
        default:
            return state;
    }
}
export default pumpReducer


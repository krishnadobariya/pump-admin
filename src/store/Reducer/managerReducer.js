import { UPDATE_MANAGER } from "store/Action/managerAction";
import { GET_ALL_MANAGERS } from "store/Action/managerAction";
import { ADD_MANAGER } from "store/Action/managerAction";

export const initialState = {
    addManager: "",
    getAllManager:"",
    updateManager:""
}

const managerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MANAGER:
            return { ...state, addManager: action.payload };
        case GET_ALL_MANAGERS:
                return { ...state, getAllManager: action.payload };
        case UPDATE_MANAGER:
            return{...state,updateManager:action.payload}
        default:
            return state;
    }
}
export default managerReducer


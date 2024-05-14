import { UPDATE_MANAGER } from "store/Action/managerAction";
import { VIEW_MANAGER } from "store/Action/managerAction";
import { DELETE_MANAGER } from "store/Action/managerAction";
import { GET_ALL_MANAGERS } from "store/Action/managerAction";
import { ADD_MANAGER } from "store/Action/managerAction";

export const initialState = {
    addManager: "",
    getAllManager: "",
    updateManager: "",
    deleteManager: "",
    ViewManager: "",
}

const managerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MANAGER:
            return { ...state, addManager: action.payload };
        case GET_ALL_MANAGERS:
            return { ...state, getAllManager: action.payload };
        case UPDATE_MANAGER:
            return { ...state, updateManager: action.payload }
        case DELETE_MANAGER:
            return { ...state, deleteManager: action.payload }
        case VIEW_MANAGER:
            return { ...state, ViewManager: action.payload }
        default:
            return state;
    }
}
export default managerReducer


import { UPDATE_CATEGORY } from "store/Action/categoryAction";
import { GET_ALL_CATEGORY } from "store/Action/categoryAction";
import { ADD_CATEGORY } from "store/Action/categoryAction";

export const initialState = {
    addCategory: "",
    getAllCategory: "",
    updateCategory: ""
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return { ...state, addCategory: action.payload };
        case GET_ALL_CATEGORY:
            return { ...state, getAllCategory: action.payload };
        case UPDATE_CATEGORY:
            return { ...state, updateCategory: action.payload }
        default:
            return state;
    }
}
export default categoryReducer


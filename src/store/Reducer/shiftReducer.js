import { DELETE_SHIFT } from "store/Action/shiftAction";
import { GET_PDF_SHIFT } from "store/Action/shiftAction";
import { UPDATE_SHIFT } from "store/Action/shiftAction";
import { ADD_SHIFT } from "store/Action/shiftAction";
import { GET_ALL_SHIFT } from "store/Action/shiftAction";



export const initialState = {
    getAllShift: "",
    shiftAdd: "",
    updateShift: "",
    deleteShift: "",
    getPdfShift: "",
};

const shiftReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SHIFT:
            return { ...state, getAllShift: action.payload };
        case ADD_SHIFT:
            return { ...state, shiftAdd: action.payload };
        case UPDATE_SHIFT:
            return { ...state, updateShift: action.payload };
        case DELETE_SHIFT:
            return { ...state, deleteShift: action.payload };
        case GET_PDF_SHIFT:
            return { ...state, getPdfShift: action.payload };
        default:
            return state;
    }
};

export default shiftReducer;

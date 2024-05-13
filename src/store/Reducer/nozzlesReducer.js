import { UPDATE_NOZZLES } from "store/Action/nozzlesAction";
import { GET_PDF_NOZZLES } from "store/Action/nozzlesAction";
import { GET_ALL_NOZZLES } from "store/Action/nozzlesAction";
import { ADD_NOZZLES } from "store/Action/nozzlesAction";


export const initialState = {
    addNozzles: "",
    getAllNozzles: "",
    updateNozzles: "",
    getPdfNozzle: "",
}

const nozzlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOZZLES:
            return { ...state, addNozzles: action.payload };
        case GET_ALL_NOZZLES:
            return { ...state, getAllNozzles: action.payload };
        case UPDATE_NOZZLES:
            return { ...state, updateNozzles: action.payload };
        case GET_PDF_NOZZLES:
            return { ...state, getPdfNozzle: action.payload };
        default:
            return state;
    }
}
export default nozzlesReducer


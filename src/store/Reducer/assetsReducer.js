import { ADD_ASSETS } from "store/Action/assetsAction";
import { GET_ASSETS } from "store/Action/assetsAction";


export const initialState = {
    assetsAdd: "",
    assetsGet: ""
}

const assetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ASSETS:
            return{ ...state, assetsAdd: action.payload};
        case GET_ASSETS:
            return { ...state, assetsGet: action.payload };
        default:
            return state;
    }
}
export default assetsReducer;
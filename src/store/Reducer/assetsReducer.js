import { ADD_ASSETS } from "store/Action/assetsAction";
import { GET_ASSETS } from "store/Action/assetsAction";
import { UPDATE_ASSETS } from "store/Action/assetsAction";
import { DELETE_ASSETS } from "store/Action/assetsAction";


export const initialState = {
    assetsAdd: "",
    assetsGet: "",
    updateAssets: "",
    deleteAssets: "",
}

const assetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ASSETS:
            return{ ...state, assetsAdd: action.payload};
        case GET_ASSETS:
            return { ...state, assetsGet: action.payload };
        case UPDATE_ASSETS:
            return { ...state, updateAssets: action.payload };
        case DELETE_ASSETS:
            return { ...state, updateAssets: action.payload };
        default:
            return state;
    }
}
export default assetsReducer;
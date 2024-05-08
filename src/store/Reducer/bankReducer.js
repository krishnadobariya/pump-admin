import { UPDATE_BANKS } from "store/Action/bankAction";
import { GET_ALL_BANKS } from "store/Action/bankAction";

export const initialState = {
    getAllBanks: "",
    updatesBank: "",

}

const bankReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BANKS:
            return { ...state, getAllBanks: action.payload }
        case UPDATE_BANKS:
            return { ...state, updatesBank: action.payload }
        default:
            return state
    }
}

export default bankReducer

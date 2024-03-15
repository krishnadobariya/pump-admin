import { LOGIN_ADMIN } from "store/Action/adminAction";
import { REGISTER_ADMIN } from "store/Action/adminAction";

export const initialState = {
    registerAdmin: "",
    loginAdmin: "",

}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_ADMIN:
            return { ...state, registerAdmin: action.payload };
        case LOGIN_ADMIN:
            return { ...state, loginAdmin: action.payload };
        default:
            return state;
    }
}
export default adminReducer

